import React, { useState } from "react";
import { type PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null; // hide modal when closed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPost(title, content); // send data to parent
    setTitle("");
    setContent("");
    onClose(); // close modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 w-full mb-4 rounded"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
