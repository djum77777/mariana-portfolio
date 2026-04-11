import WorkCard from "@/components/WorkCard";
import { selectedWork } from "@/content/selected-work";

export default function WorkList() {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {selectedWork.map((work) => (
        <li key={work.title}>
          <WorkCard {...work} />
        </li>
      ))}
    </ul>
  );
}
