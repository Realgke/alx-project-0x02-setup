import React from "react";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        <p>Here you can see all posts.</p>
      </main>
    </>
  );
};

export default PostsPage;
