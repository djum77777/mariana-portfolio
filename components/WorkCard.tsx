import Link from "next/link";

export type WorkCardProps = {
  title: string;
  platform: "linkedin" | "x" | "medium";
  views?: number;
  role: string;
  link: string;
};

export default function WorkCard({ title, platform, views, role, link }: WorkCardProps) {
  return (
    <article className="rounded-lg border border-foreground/10 bg-background p-6">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <span className="text-xs uppercase text-foreground/60">{platform}</span>
      </div>
      {typeof views === "number" && (
        <p className="mt-2 text-sm text-foreground/70">{views.toLocaleString()} views</p>
      )}
      <p className="mt-2 text-sm italic text-foreground/80">{role}</p>
      <Link href={link} target="_blank" className="mt-4 inline-block text-sm underline">
        Open post
      </Link>
    </article>
  );
}
