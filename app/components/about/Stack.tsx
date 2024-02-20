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
  logo: JSX.Element;
  toolTip: string;

  constructor(logo: JSX.Element, toolTip: string) {
    this.logo = logo;
    this.toolTip = toolTip;
  }
}

const toolSetsData: [JSX.Element, string][] = [
  [<FaHtml5 />, "HTML"],
  [<FaCss3 />, "CSS"],
  [<SiJavascript />, "JavaScript"],
  [<FaReact />, "React"],
  [<SiTailwindcss />, "Tailwind CSS"],
  [<SiDaisyui />, "DaisyUI"],
  [<FaNodeJs />, "Node.js"],
  [<SiExpress />, "Express"],
  [<SiMongodb />, "MongoDB"],
  [<SiSqlite />, "SQLite"],
  [<SiNextdotjs />, "Next.js"],
  [<SiTypescript />, "TypeScript"],
  [<SiFigma />, "Figma"],
  [<SiVisualstudiocode />, "Visual Studio Code"],
  [<SiNotion />, "Notion"],
  [<SiTrello />, "Trello"],
];

const toolSets: ToolSet[] = toolSetsData.map(
  ([logo, toolTip]) => new ToolSet(logo, toolTip),
);

export default function Stack() {
  return (
    <main className="mb-6 flex justify-between pt-3">
      <div className="flex w-fit self-center">
        <span className="mr-2 text-4xl">🛠️ </span>
        <span className=" text-4xl font-semibold italic">Toolsets</span>
      </div>
      <div className="grid h-64 w-2/3 flex-none grid-cols-4 items-center justify-items-center overflow-x-scroll rounded-xl border-2 border-red py-3 text-3xl dark:border-blue">
        {toolSets.map((tool) => (
          <TooltipProvider>
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
