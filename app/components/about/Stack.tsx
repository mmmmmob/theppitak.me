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

export default function Stack() {
  return (
    <main className="mb-6 flex justify-between pt-3">
      <div className="flex w-fit self-center">
        <span className="mr-2 text-4xl">🛠️ </span>
        <span className=" text-4xl font-semibold italic">Toolsets</span>
      </div>
      <div className="grid h-64 w-2/3 flex-none grid-cols-4 items-center justify-items-center overflow-x-scroll rounded-xl border-2 border-red py-3 dark:border-blue">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FaHtml5 size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>HTML</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FaCss3 size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>CSS</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiJavascript size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>JavaScript</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FaReact size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>React</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiTailwindcss size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Tailwind CSS</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiDaisyui size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>DaisyUI</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FaNodeJs size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Node.js</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiExpress size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Express</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiMongodb size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>MongoDB</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiSqlite size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>SQLite</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiNextdotjs size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Next.js</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiTypescript size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>TypeScript</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiFigma size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Figma</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiVisualstudiocode size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Visual Studio Code</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiNotion size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Notion</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <SiTrello size={40} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Trello</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </main>
  );
}
