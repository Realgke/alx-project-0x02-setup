// interfaces/index.ts

export interface SampleInterface {
  id: number;
  name: string;
}
export interface CardProps {
  title: string;
  content: string;
}
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPost: (title: string, content: string) => void;
}
export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
