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
    <article className="bg-[#0F0F0F] rounded-lg p-6 hover:shadow-lg transition">
      <div className="flex items-center gap-3">
        <Image src={platformIcons[platform]} alt={platform} width={24} height={24} />
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      </div>
      {views && (
        <p className="text-sm text-textPrimary mt-1">{views.toLocaleString()} views</p>
      )}
      <p className="text-sm text-textPrimary mt-1 italic">{role}</p>
      <Link href={link} target="_blank" className="mt-3 inline-block text-primary underline">
        Read more →
      </Link>
    </article>
  );
}