import WorkCard from "@/components/WorkCard";

const works = [
  {
    title: "AI Agent Demo",
    platform: "linkedin",
    views: 1200,
    role: "Content strategy and AI workflow design",
    link: "https://www.linkedin.com/in/marianadjum",
  },
  {
    title: "AI Workflow Breakdown",
    platform: "medium",
    views: 640,
    role: "Narrative and production optimization",
    link: "https://medium.com",
  },
] as const;

export default function WorkList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {works.map((work) => (
        <WorkCard key={work.title} {...work} />
      ))}
    </div>
  );
}
