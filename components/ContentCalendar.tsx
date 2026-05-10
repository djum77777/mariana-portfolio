"use client";

import { useMemo, useState, type CSSProperties } from "react";
import type { ContentCalendarItem } from "@/lib/notion-content";

type WeekDay = {
  key: string;
  label: string;
  dateLabel: string;
  items: ContentCalendarItem[];
};

const brandClasses = [
  "content-calendar-dot--rose",
  "content-calendar-dot--mint",
  "content-calendar-dot--gold",
  "content-calendar-dot--lavender",
];

function toDateOnly(value: string) {
  return value.slice(0, 10);
}

function parseDateOnly(value: string) {
  const [year, month, day] = toDateOnly(value).split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getWeekStartKey(value: string | Date) {
  const date = typeof value === "string" ? parseDateOnly(value) : new Date(value);
  const day = date.getDay();
  const daysSinceMonday = (day + 6) % 7;
  date.setDate(date.getDate() - daysSinceMonday);
  date.setHours(0, 0, 0, 0);
  return formatDateKey(date);
}

function getHktToday() {
  const now = new Date();
  const hktTime = now.getTime() + 8 * 60 * 60 * 1000;
  const hkt = new Date(hktTime);
  return new Date(hkt.getUTCFullYear(), hkt.getUTCMonth(), hkt.getUTCDate());
}

function addDays(dateKey: string, days: number) {
  const date = parseDateOnly(dateKey);
  date.setDate(date.getDate() + days);
  return formatDateKey(date);
}

function getBrandClass(brand: string) {
  const hash = brand.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
  return brandClasses[hash % brandClasses.length];
}

function buildWeekDays(items: ContentCalendarItem[], weekStartKey: string) {
  const itemsByDay = new Map<string, ContentCalendarItem[]>();

  for (const item of items) {
    const key = toDateOnly(item.date);
    itemsByDay.set(key, [...(itemsByDay.get(key) ?? []), item]);
  }

  const hasWeekendContent = [addDays(weekStartKey, 5), addDays(weekStartKey, 6)].some((key) => itemsByDay.has(key));
  const dayCount = hasWeekendContent ? 7 : 5;

  return Array.from({ length: dayCount }, (_, index): WeekDay => {
    const key = addDays(weekStartKey, index);
    const date = parseDateOnly(key);
    const dayItems = itemsByDay.get(key) ?? [];

    return {
      key,
      label: new Intl.DateTimeFormat("en", { weekday: "short" }).format(date),
      dateLabel: new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(date),
      items: dayItems.sort((a, b) => a.type.localeCompare(b.type)),
    };
  });
}

function formatWeekRange(weekStartKey: string) {
  const start = parseDateOnly(weekStartKey);
  const end = parseDateOnly(addDays(weekStartKey, 6));
  const sameYear = start.getFullYear() === end.getFullYear();
  const sameMonth = sameYear && start.getMonth() === end.getMonth();

  if (sameMonth) {
    const month = new Intl.DateTimeFormat("en", { month: "short" }).format(start);
    return `${month} ${start.getDate()}-${end.getDate()}`;
  }

  if (sameYear) {
    const formatter = new Intl.DateTimeFormat("en", { month: "short", day: "numeric" });
    return `${formatter.format(start)}-${formatter.format(end)}`;
  }

  const formatter = new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" });
  return `${formatter.format(start)}-${formatter.format(end)}`;
}

function getStatusTone(status: string) {
  const normalized = status.toLowerCase();
  if (normalized.includes("draft")) return "content-calendar-status--ready";
  if (normalized.includes("art")) return "content-calendar-status--art";
  if (normalized.includes("review")) return "content-calendar-status--review";
  return "content-calendar-status--backup";
}

function getShortTitle(title: string) {
  const cleaned = title
    .replace(/^(mon|tue|wed|thu|fri|sat|sun)\s*[-:]\s*/i, "")
    .replace(/^\?\?\?\s*/, "")
    .trim();
  const [beforeColon] = cleaned.split(":");
  const words = beforeColon.trim().split(/\s+/).filter(Boolean);
  return words.length > 7 ? `${words.slice(0, 7).join(" ")}...` : beforeColon.trim();
}

function getWeekKeys(items: ContentCalendarItem[]) {
  return Array.from(new Set(items.map((item) => getWeekStartKey(item.date)))).sort();
}

function getInitialWeekIndex(weekKeys: string[]) {
  const currentWeek = getWeekStartKey(getHktToday());
  const exactIndex = weekKeys.indexOf(currentWeek);
  if (exactIndex >= 0) return exactIndex;

  const nextIndex = weekKeys.findIndex((weekKey) => weekKey > currentWeek);
  if (nextIndex >= 0) return nextIndex;

  return Math.max(weekKeys.length - 1, 0);
}

export default function ContentCalendar({ items }: { items: ContentCalendarItem[] }) {
  const sortedItems = useMemo(
    () => [...items].sort((a, b) => toDateOnly(a.date).localeCompare(toDateOnly(b.date))),
    [items],
  );
  const weekKeys = useMemo(() => getWeekKeys(sortedItems), [sortedItems]);
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(() => getInitialWeekIndex(weekKeys));
  const selectedWeekKey = weekKeys[selectedWeekIndex] ?? getWeekStartKey(getHktToday());
  const currentWeekKey = getWeekStartKey(getHktToday());
  const visibleItems = sortedItems.filter((item) => getWeekStartKey(item.date) === selectedWeekKey);
  const days = buildWeekDays(visibleItems, selectedWeekKey);
  const brands = Array.from(new Set(visibleItems.map((item) => item.brand))).slice(0, 4);
  const readyCount = visibleItems.filter((item) => item.status.toLowerCase().includes("draft")).length;
  const statusGroups = Array.from(new Set(visibleItems.map((item) => item.status))).slice(0, 4);
  const hasPreviousWeek = selectedWeekIndex > 0;
  const hasNextWeek = selectedWeekIndex < weekKeys.length - 1;
  const isCurrentWeek = selectedWeekKey === currentWeekKey;

  return (
    <section id="calendar" className="bg-[#fffaf7] py-14 text-[#241c18] md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(520px,1.18fr)] lg:px-12">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#2f67c7]">Content Rhythm</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-normal md:text-[2.65rem]">
              Weekly content, without the clutter.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#665b53]">
              A Notion-powered view of what is moving through the content pipeline this week.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="content-calendar-stat bg-[#e8f7f3]">
              <span>{visibleItems.length}</span>
              <p>Planned pieces</p>
            </div>
            <div className="content-calendar-stat bg-[#fff0bf]">
              <span>{readyCount}</span>
              <p>Draft ready</p>
            </div>
            <div className="content-calendar-stat bg-[#f3e8ff]">
              <span>{brands.length}</span>
              <p>Channel lanes</p>
            </div>
          </div>
        </div>

        <div className="content-calendar-board">
          <div className="content-calendar-head">
            <div>
              <p>{isCurrentWeek ? "Live current week" : "Notion week view"}</p>
              <h3>{formatWeekRange(selectedWeekKey)}</h3>
            </div>
            <div className="content-calendar-controls" aria-label="Week navigation">
              <button
                type="button"
                onClick={() => setSelectedWeekIndex((index) => Math.max(index - 1, 0))}
                disabled={!hasPreviousWeek}
                aria-label="View previous week"
              >
                &lt;
              </button>
              <span>{selectedWeekIndex + 1} / {weekKeys.length || 1}</span>
              <button
                type="button"
                onClick={() => setSelectedWeekIndex((index) => Math.min(index + 1, weekKeys.length - 1))}
                disabled={!hasNextWeek}
                aria-label="View next week"
              >
                &gt;
              </button>
            </div>
          </div>

          {brands.length > 0 ? (
            <div className="content-calendar-legend content-calendar-legend--row" aria-label="Channel lanes">
              {brands.map((brand) => (
                <span key={brand}>
                  <i className={getBrandClass(brand)} />
                  {brand}
                </span>
              ))}
            </div>
          ) : null}

          <div
            className="content-calendar-week-board"
            style={{ "--content-calendar-days": days.length } as CSSProperties & Record<string, number>}
          >
            {days.map((day) => (
              <article key={day.key} className="content-calendar-week-card">
                <div className="content-calendar-card-head">
                  <div>
                    <strong>{day.label}</strong>
                    <span>{day.dateLabel}</span>
                  </div>
                  <em>{day.items.length}</em>
                </div>

                <div className="content-calendar-mini-stack">
                  {day.items.length > 0 ? (
                    day.items.slice(0, 5).map((item) => (
                      <span
                        key={item.id}
                        className="content-calendar-mini-pill"
                        tabIndex={0}
                        aria-label={`${item.title}, ${item.brand}, ${item.status}`}
                      >
                        <span className={`content-calendar-dot ${getBrandClass(item.brand)}`} />
                        <strong>{item.type}</strong>
                        <span className="content-calendar-tooltip" role="tooltip">
                          <b>{getShortTitle(item.title)}</b>
                          <span>{item.pillar}</span>
                          <em>{item.priority}</em>
                        </span>
                      </span>
                    ))
                  ) : (
                    <span className="content-calendar-empty">Open slot</span>
                  )}
                  {day.items.length > 5 ? <span className="content-calendar-overflow">+{day.items.length - 5}</span> : null}
                </div>
              </article>
            ))}
          </div>

          <div className="content-calendar-status-row" aria-label="Production status">
            {statusGroups.map((status) => (
              <span key={status} className={`content-calendar-status-pill ${getStatusTone(status)}`}>
                {status}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
