import { ClientId } from "@/src/lib/data/clients";

export type ProjectData = {
  id: string;
  client_id: ClientId;
  commence_date: Date;
  end_date: Date | null;
  title: string;
  description: string;
  services: string[];
  coverImage: string;
  tech_stack: string[];
  review: string;
  main_services: string[];
  project_name: string;
  site_url: string;
  slug: string;
  featured: boolean;
  problem: {
    description: string;
    imageSrc: string;
  };
  solution: {
    content: { title: string; description: string }[];
    media: { type: "video" | "image"; src: string; caption: string }[];
  };
  impact: {
    title: string;
    description: string;
  }[];
};
