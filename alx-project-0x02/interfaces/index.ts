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
