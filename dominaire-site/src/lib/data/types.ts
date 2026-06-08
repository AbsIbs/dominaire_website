export type ProjectData = {
  id: string;
  client_id: string;
  commence_date: Date;
  end_date: Date | null;
  title: string;
  description: string;
  services: string[];
  coverImage: string;
  tech_stack: string[];
  review: string;
  main_service: string[];
  project_name: string;
  site_url: string;
  slug: string;
  featured: boolean;
};
