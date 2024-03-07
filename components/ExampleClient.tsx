"use client";

import ExampleServer from "./ExampleServer";

const ExampleClient = () => {
  console.log("I'm a Client Component");
  return (
    <div className="mt-8 bg-yellow-300 p-16 border-2 border-red-900">
      <h3 className="text-2xl">This is an Example Client Component</h3>
      <ExampleServer />
    </div>
  );
};

export default ExampleClient;
