import React from "react";

export default function WorkExp() {
  return (
    <main className="pt-3">
      <div className="flex w-fit">
        <span className="mr-2 text-4xl">💼</span>
        <span className="text-4xl font-semibold italic">Work Experiences</span>
      </div>
      <div className="flex  overflow-y-scroll">
        <div className="mr-4 mt-6 h-36 w-1/3 flex-shrink-0 rounded-xl border-2 border-red dark:border-blue"></div>
        <div className="mr-4 mt-6 h-36 w-1/3 flex-shrink-0 rounded-xl border-2 border-red dark:border-blue"></div>
        <div className="mr-4 mt-6 h-36 w-1/3 flex-shrink-0 rounded-xl border-2 border-red dark:border-blue"></div>
        <div className="mr-4 mt-6 h-36 w-1/3 flex-shrink-0 rounded-xl border-2 border-red dark:border-blue"></div>
        <div className="mt-6 h-36 w-1/3 flex-shrink-0 rounded-xl border-2 border-red dark:border-blue"></div>
      </div>
    </main>
  );
}
