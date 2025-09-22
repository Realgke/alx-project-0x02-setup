import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
