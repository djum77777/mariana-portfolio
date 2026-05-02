import Image from "next/image";
import Link from "next/link";

type WorkCardProps = {
  title: string;
  platform: "linkedin" | "x" | "medium";
  views?: number;
  eyebrow?: string;
  role: string;
  summary: string;
  link: string;
  featured?: boolean;
};

export default function WorkCard({
  title,
  platform,
  views,
  eyebrow,
  role,
  summary,
  link,
  featured = false,
}: WorkCardProps) {
  const platformIcons: Record<WorkCardProps["platform"], string> = {
    linkedin: "/icons/linkedin.svg",
    x: "/icons/x.svg",
    medium: "/icons/medium.svg",
  };
  const actionLabel = platform === "linkedin" ? "Read on LinkedIn" : platform === "x" ? "View on X" : "Read on Medium";

  return (
    <article className={`work-card glass-card h-full rounded-xl p-6 ${featured ? "work-card-featured" : ""}`}>
      <div className="flex flex-wrap items-center gap-2">
        <Image src={platformIcons[platform]} alt="" width={24} height={24} aria-hidden="true" />
        <p className="work-card-platform text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{platform}</p>
        {eyebrow && (
          <span className="rounded-full border border-cyan-300/35 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-cyan-200">
            {eyebrow}
          </span>
        )}
      </div>
      <div className={featured ? "mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_220px] md:items-end" : "mt-4"}>
        <div>
          <h3 className={`${featured ? "text-2xl md:text-3xl" : "text-xl"} font-semibold leading-tight text-foreground`}>
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/78">{summary}</p>
        </div>
        <div className="work-card-proof mt-4 md:mt-0">
        {typeof views === "number" && (
          <p className="text-sm font-medium text-cyan-200">{views.toLocaleString()} views</p>
        )}
        <p className="mt-1 text-sm text-foreground/85">{role}</p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex rounded-md border border-cyan-300/35 px-3 py-2 text-sm font-medium text-cyan-200 no-underline transition hover:border-cyan-200 hover:bg-cyan-300/10"
        >
          {actionLabel} {"->"}
        </Link>
        </div>
      </div>
    </article>
  );
}
