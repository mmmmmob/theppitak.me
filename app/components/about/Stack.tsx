import React from "react";

export default function Stack() {
  return (
    <main className="mb-6 flex justify-between pt-3">
      <div className="flex w-fit self-center">
        <span className="mr-2 text-4xl">🛠️ </span>
        <span className=" text-4xl font-semibold italic">Toolsets</span>
      </div>
      <div className="h-52 w-2/3 rounded-xl border-2 border-red dark:border-blue"></div>
    </main>
  );
}
