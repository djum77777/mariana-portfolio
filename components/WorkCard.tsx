// components/WorkCard.tsx
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
    <article className="glass-card rounded-xl p-6 transition hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        <Image src={platformIcons[platform]} alt={platform} width={24} height={24} />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      {views && (
        <p className="mt-1 text-sm text-[var(--muted)]">{views.toLocaleString()} views</p>
      )}
      <p className="mt-2 text-sm italic text-foreground/85">{role}</p>
      <Link href={link} target="_blank" className="mt-3 inline-block text-sm text-cyan-300 underline">
        Read more →
      </Link>
    </article>
  );
}