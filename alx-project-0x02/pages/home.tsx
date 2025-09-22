import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header"; // <-- import Header

interface Post {
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header /> {/* <-- add Header at top */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Add Post
        </button>

        {/* Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onPost={handlePost}
        />

        {/* Display posts */}
        <div className="grid gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
