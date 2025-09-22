// pages/home.tsx
import React from "react";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Home Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Card 1" content="This is the content of card 1." />
        <Card title="Card 2" content="This is the content of card 2." />
        <Card title="Card 3" content="This is the content of card 3." />
      </div>
    </div>
  );
}
