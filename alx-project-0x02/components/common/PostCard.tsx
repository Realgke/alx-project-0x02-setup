import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
