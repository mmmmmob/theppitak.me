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
  id: number;
  logo: JSX.Element;
  toolTip: string;

  constructor(id: number, logo: JSX.Element, toolTip: string) {
    this.id = id;
    this.logo = logo;
    this.toolTip = toolTip;
  }
}

const toolSetsData: [number, JSX.Element, string][] = [
  [1, <FaHtml5 />, "HTML"],
  [2, <FaCss3 />, "CSS"],
  [3, <SiJavascript />, "JavaScript"],
  [4, <FaReact />, "React"],
  [5, <SiTailwindcss />, "Tailwind CSS"],
  [6, <SiDaisyui />, "DaisyUI"],
  [7, <FaNodeJs />, "Node.js"],
  [8, <SiExpress />, "Express"],
  [9, <SiMongodb />, "MongoDB"],
  [10, <SiSqlite />, "SQLite"],
  [11, <SiNextdotjs />, "Next.js"],
  [12, <SiTypescript />, "TypeScript"],
  [13, <SiFigma />, "Figma"],
  [14, <SiVisualstudiocode />, "Visual Studio Code"],
  [15, <SiNotion />, "Notion"],
  [16, <SiTrello />, "Trello"],
];

const toolSets: ToolSet[] = toolSetsData.map(
  ([id, logo, toolTip]) => new ToolSet(id, logo, toolTip),
);

export default function Stack() {
  return (
    <main className="mb-6 flex justify-between pt-3">
      <div className="flex w-fit self-center">
        <span className="mr-2 text-4xl">🛠️ </span>
        <span className=" text-4xl font-semibold italic">Toolsets</span>
      </div>
      <div className="grid h-64 w-2/3 flex-none grid-cols-4 items-center justify-items-center overflow-x-scroll rounded-xl border-2 border-red py-3 text-4xl dark:border-blue">
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
