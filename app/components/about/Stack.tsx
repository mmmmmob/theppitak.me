import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiDaisyui,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNotion,
  SiSqlite,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

class ToolSet {
  id: string;
  logo: React.ReactNode;
  toolTip: string;

  constructor(id: string, logo: React.ReactNode, toolTip: string) {
    this.id = id;
    this.logo = logo;
    this.toolTip = toolTip;
  }
}

const toolSetsData: { id: string; logo: React.ReactNode; toolTip: string }[] = [
  { id: "1", logo: <FaHtml5 key={1} />, toolTip: "HTML" },
  { id: "2", logo: <FaCss3 key={2} />, toolTip: "CSS" },
  { id: "3", logo: <SiJavascript key={3} />, toolTip: "JavaScript" },
  { id: "4", logo: <FaReact key={4} />, toolTip: "React" },
  { id: "5", logo: <SiTailwindcss key={5} />, toolTip: "Tailwind CSS" },
  { id: "6", logo: <SiDaisyui key={6} />, toolTip: "DaisyUI" },
  { id: "7", logo: <FaNodeJs key={7} />, toolTip: "Node.js" },
  { id: "8", logo: <SiExpress key={8} />, toolTip: "Express" },
  { id: "9", logo: <SiMongodb key={9} />, toolTip: "MongoDB" },
  { id: "10", logo: <SiSqlite key={10} />, toolTip: "SQLite" },
  { id: "11", logo: <SiNextdotjs key={11} />, toolTip: "Next.js" },
  { id: "12", logo: <SiTypescript key={12} />, toolTip: "TypeScript" },
  { id: "13", logo: <SiFigma key={13} />, toolTip: "Figma" },
  {
    id: "14",
    logo: <SiVisualstudiocode key={14} />,
    toolTip: "Visual Studio Code",
  },
  { id: "15", logo: <SiNotion key={15} />, toolTip: "Notion" },
  { id: "16", logo: <SiTrello key={16} />, toolTip: "Trello" },
];

const toolSets: ToolSet[] = toolSetsData.map(
  ({ id, logo, toolTip }) => new ToolSet(id, logo, toolTip),
);

export default function Stack() {
  return (
    <main className="flex justify-between py-3">
      <div className="flex w-fit self-center">
        <span className="mr-2 text-4xl">🛠️ </span>
        <span className=" text-4xl font-semibold italic">Toolsets</span>
      </div>
      <div className="grid h-64 w-2/3 flex-none grid-cols-4 items-center justify-items-center overflow-x-scroll rounded-xl border-2 border-red py-3 text-3xl dark:border-blue">
        {toolSets.map((tool) => (
          <TooltipProvider key={tool.id}>
            <Tooltip>
              <TooltipTrigger>{tool.logo}</TooltipTrigger>
              <TooltipContent>
                <p>{tool.toolTip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </main>
  );
}
