"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="m-4 text-9xl font-semibold">🚧</p>
      <p className="text-red m-4 text-7xl font-semibold">Under Construction</p>
      <p className="text-blue m-4 text-7xl">อยู่ระหว่างดำเนินการ</p>
      <p className="text-gray m-4 text-7xl">このサイトは建設中です</p>
      <p className="m-4 text-7xl text-black">이사이트는공사중입니다</p>
    </div>
  );
}
