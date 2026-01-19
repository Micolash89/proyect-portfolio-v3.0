import { IconType } from "@icons-pack/react-simple-icons";

export type FieldErrors = {
  name?: string[];
  email?: string[];
  message?: string[];
};
 
export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export type Technology = {
  name: string;
  Icon: IconType;
  positionClass: string;
  imageSrc?: string;
};
