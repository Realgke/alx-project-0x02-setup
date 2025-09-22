import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const AboutPage: React.FC = () => {
  return (
    <>
      <Header /> {/* Add Header for navigation */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>

        <div className="flex gap-4">
          <Button title="Small Button" size="small" shape="rounded-sm" />
          <Button title="Medium Button" size="medium" shape="rounded-md" />
          <Button title="Large Button" size="large" shape="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
