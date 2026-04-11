import Image from "next/image";
import Link from "next/link";

type WorkCardProps = {
  title: string;
  platform: "linkedin" | "x" | "medium";
  views?: number;
  role: string;
  link: string;
};

export default function WorkCard({
  title,
  platform,
  views,
  role,
  link,
}: WorkCardProps) {
  const platformIcons: Record<WorkCardProps["platform"], string> = {
    linkedin: "/icons/linkedin.svg",
    x: "/icons/x.svg",
    medium: "/icons/medium.svg",
  };

  return (
    <article className="work-card glass-card h-full rounded-xl p-6">
      <div className="flex items-center gap-3">
        <Image src={platformIcons[platform]} alt="" width={24} height={24} aria-hidden="true" />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="work-card-platform mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{platform}</p>
      <div className="work-card-reveal mt-3">
        {typeof views === "number" && (
          <p className="text-sm text-[var(--muted)]">{views.toLocaleString()} views</p>
        )}
        <p className="mt-1 text-sm italic text-foreground/85">{role}</p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm text-cyan-300 underline"
        >
          Read more {"->"}
        </Link>
      </div>
    </article>
  );
}
