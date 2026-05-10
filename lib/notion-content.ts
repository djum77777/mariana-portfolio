export type ContentCalendarItem = {
  id: string;
  title: string;
  date: string;
  brand: string;
  type: string;
  status: string;
  pillar: string;
  priority: string;
  url?: string;
};

type NotionProperty = {
  type?: string;
  title?: Array<{ plain_text?: string }>;
  rich_text?: Array<{ plain_text?: string }>;
  select?: { name?: string } | null;
  multi_select?: Array<{ name?: string }>;
  status?: { name?: string } | null;
  date?: { start?: string | null } | null;
  url?: string | null;
};

type NotionPage = {
  id: string;
  properties?: Record<string, NotionProperty>;
  url?: string;
};

type NotionQueryResponse = {
  results?: NotionPage[];
};

export const CONTENT_CALENDAR_CACHE_TAG = "notion-content-calendar";

const fallbackItems: ContentCalendarItem[] = [
  {
    id: "fallback-1",
    title: "AI product education",
    date: "2026-05-04",
    brand: "hellominds.ai",
    type: "Post",
    status: "Published",
    pillar: "Education",
    priority: "High",
  },
  {
    id: "fallback-2",
    title: "Game community update",
    date: "2026-05-07",
    brand: "TOWER",
    type: "Campaign",
    status: "Planned",
    pillar: "Community",
    priority: "Medium",
  },
  {
    id: "fallback-3",
    title: "Weekly signal review",
    date: "2026-05-10",
    brand: "Portfolio",
    type: "Report",
    status: "Review",
    pillar: "Reporting",
    priority: "Medium",
  },
];

const titleFields = ["Name", "Title", "Content", "Post", "Task"];
const dateFields = ["Date", "Publish Date", "Publish date", "Scheduled Date", "Schedule", "Deadline"];
const brandFields = ["Brand", "Project", "Product", "Channel", "Account"];
const typeFields = ["Type", "Content Type", "Format", "Category"];
const statusFields = ["Status", "Stage", "State"];
const pillarFields = ["Pillar", "Content Pillar", "Theme"];
const priorityFields = ["Priority", "Impact"];
const urlFields = ["URL", "Link", "Published URL", "Post URL"];

function readPlainText(property?: NotionProperty) {
  if (!property) return "";

  if (property.type === "title") {
    return property.title?.map((item) => item.plain_text ?? "").join("").trim() ?? "";
  }

  if (property.type === "rich_text") {
    return property.rich_text?.map((item) => item.plain_text ?? "").join("").trim() ?? "";
  }

  if (property.type === "select") return property.select?.name ?? "";
  if (property.type === "status") return property.status?.name ?? "";
  if (property.type === "multi_select") {
    return property.multi_select?.map((item) => item.name).filter(Boolean).join(", ") ?? "";
  }
  if (property.type === "url") return property.url ?? "";

  return "";
}

function readByFieldNames(properties: Record<string, NotionProperty>, fieldNames: string[]) {
  for (const fieldName of fieldNames) {
    const value = readPlainText(properties[fieldName]);
    if (value) return value;
  }

  return "";
}

function readDate(properties: Record<string, NotionProperty>) {
  for (const fieldName of dateFields) {
    const value = properties[fieldName]?.date?.start;
    if (value) return value;
  }

  const firstDate = Object.values(properties).find((property) => property.type === "date" && property.date?.start);
  return firstDate?.date?.start ?? "";
}

function readTitle(properties: Record<string, NotionProperty>) {
  const namedTitle = readByFieldNames(properties, titleFields);
  if (namedTitle) return namedTitle;

  const firstTitle = Object.values(properties).find((property) => property.type === "title");
  return readPlainText(firstTitle) || "Untitled content";
}

function mapPageToItem(page: NotionPage): ContentCalendarItem | null {
  const properties = page.properties ?? {};
  const date = readDate(properties);

  if (!date) return null;

  const url = readByFieldNames(properties, urlFields) || page.url;

  return {
    id: page.id,
    title: readTitle(properties),
    date,
    brand: readByFieldNames(properties, brandFields) || "Content",
    type: readByFieldNames(properties, typeFields) || "Post",
    status: readByFieldNames(properties, statusFields) || "Planned",
    pillar: readByFieldNames(properties, pillarFields) || "Content system",
    priority: readByFieldNames(properties, priorityFields) || "Normal",
    url,
  };
}

export async function getContentCalendarItems(): Promise<ContentCalendarItem[]> {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_CONTENT_DATABASE_ID;

  if (!token || !databaseId) return fallbackItems;

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({ page_size: 50 }),
      next: { tags: [CONTENT_CALENDAR_CACHE_TAG] },
    });

    if (!response.ok) return fallbackItems;

    const data = (await response.json()) as NotionQueryResponse;
    const items = (data.results ?? [])
      .map(mapPageToItem)
      .filter((item): item is ContentCalendarItem => Boolean(item))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return items.length > 0 ? items : fallbackItems;
  } catch {
    return fallbackItems;
  }
}
