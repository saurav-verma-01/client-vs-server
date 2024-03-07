"use client";

import ExampleClient from "@/components/ExampleClient";

export default function Home() {
  console.log("Where do I render?");
  return (
    <main className="flex flex-col items-center p-24 min-h-screen bg-lime-300 text-lime-950">
      <h2 className="text-3xl font-semibold">Welcome to Next 👋</h2>
      <ExampleClient />
    </main>
  );
}
