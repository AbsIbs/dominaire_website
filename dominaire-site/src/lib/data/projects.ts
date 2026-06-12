// Types
import { ProjectData } from "@/src/lib/data/types";

export const PROJECT_DATA: ProjectData[] = [
  {
    id: "f972c271-5028-4e8d-ada7-afe405a1b0e2",
    client_id: "pulse-poetry",
    commence_date: new Date("2023-10-01"),
    end_date: null,
    title: "Find Spoken-Word events all over London",
    description:
      "Pulse Poetry needed a dedicated home for spoken word events, something far beyond what Instagram could support. We built a full platform and admin system that brings the entire scene together. Audiences can browse upcoming shows, explore organisers and navigate directly to ticket links, while the Pulse team manages everything through a powerful internal dashboard. The platform is fast, intuitive and built for growth, with SEO, analytics and a search‑optimised structure that makes discovery effortless.",
    services: ["Product Development"],
    coverImage: "/projects/pulse-poetry/coverImage.png",
    tech_stack: ["Figma", "Next.js", "Tailwind CSS", "Supabase"],
    review: "",
    main_services: ["Design", "Development"],
    project_name: "Pulse Poetry",
    site_url: "https://www.pulsepoetry.com",
    slug: "show-finder-webapp",
    featured: true,
    problem: {
      imageSrc: "/images/projects/pulse-poetry/pulse problem hd.png",
      description:
        "Pulse Poetry had outgrown Instagram. Shows were curated manually, discovery depended on the algorithm and followers had no reliable way to browse events or buy tickets. The platform simply couldn’t support Pulse Poetry’s ambition to become the Eventbrite of spoken word. They needed a dedicated system that centralised events, streamlined submissions and created a clear path from discovery to ticket purchase.",
    },
    solution: {
      content: [
        {
          title: "User-Facing Platform",
          description:
            "We designed and built a fast, intuitive platform where audiences can browse upcoming spoken‑word shows with clarity. Each event page includes rich details, interactive maps, organiser profiles and direct ticket links, making discovery effortless. The interface is intentionally minimal, allowing the content — the shows, the venues, the artists — to take centre stage. The experience works seamlessly across devices, giving users a reliable place to explore the spoken‑word scene without relying on social media algorithms.",
        },
        {
          title: "Admin Panel & Access Control  ",
          description:
            "We built a dedicated admin system that gives the Pulse team full control over their ecosystem. Staff can manage organisers, approve submissions, edit show details, upload media and assign different permission levels to team members. The dashboard is designed for speed and clarity, reducing the time spent on manual curation and giving the team a structured, reliable workflow for managing the entire platform.",
        },
        {
          title: "Anonymous Organiser Submissions  ",
          description:
            "To encourage growth and reduce friction, we created a submission flow that allows organisers to upload shows without creating an account. This was a strategic decision: removing the signup barrier increases the number of events on the platform and keeps the ecosystem active. Submissions enter a review queue in the admin panel, where the Pulse team can approve, edit or reject them with a single click.",
        },
        {
          title: "SEO & Analytics Setup",
          description:
            "We implemented technical SEO foundations to ensure the platform is discoverable from day one. This includes structured metadata, sitemap generation, clean markup and GA4 integration for tracking user behaviour. The goal was to give Pulse Poetry long‑term visibility and the ability to make data‑driven decisions as the platform grows.",
        },
        {
          title: "Search‑Optimised URL Structure",
          description: `
            We engineered an Eventbrite‑style URL system that mirrors real search intent. For example:
/shows/london/shows--this-weekend/all-shows/  
This structure improves indexing, strengthens SEO and makes the platform feel familiar to users who are used to large‑scale event platforms. It’s a small detail with a big impact on discoverability and long‑term growth.
            `,
        },
      ],
      media: [
        {
          type: "video",
          src: "/projects/pulse-poetry/solution.webm",
          caption: "Searching for shows",
        },
        {
          type: "video",
          src: "/projects/pulse-poetry/solution 2.webm",
          caption: "Uploading shows",
        },
      ],
    },
    impact: [
      {
        title: "Centralised Event Infrastructure",
        description:
          "Pulse Poetry now runs on a single, structured platform where all shows live together. Discovery is unified and no longer scattered across social feeds.",
      },
      {
        title: "Built for Thousands, Not Dozens",
        description:
          "The platform scales effortlessly — from a handful of events to thousands — while staying fast, structured and reliable.",
      },
      {
        title: "Professionalised the Entire Event Workflow",
        description:
          "Submissions, approvals and publishing now follow a clean, consistent workflow, replacing ad‑hoc tools and manual processes.",
      },
    ],
  },
  {
    id: "f972c271-5028-4e8d-ada7-afe405a1b0e2",
    client_id: "pulse-poetry",
    commence_date: new Date("2023-10-01"),
    end_date: null,
    title: "Find Spoken-Word events all over London",
    description:
      "Pulse Poetry is your sanctuary for all things poetic, where every word finds a place and every voice is celebrated. Join our vibrant community to share your work, discover new favourites, and immerse yourself in the art of poetry.\n\nDiscover a seamless experience with Pulse Poetry, where organising and attending spoken word events is effortless. Connect with talented poets, explore diverse performances, and be part of a thriving community dedicated to the art of spoken word.",
    services: [
      "Product Development",
      "Workflow Audit",
      "Automation",
      "Artificial Intelligence",
    ],
    coverImage: "/images/projects/pulse-poetry/coverImage.png",
    tech_stack: [
      "Figma",
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Material-UI",
      "SQL",
      "Supabase",
    ],
    review: "",
    main_services: ["Design", "Development", "Marketing"],
    project_name: "Pulse Poetry",
    site_url: "https://www.pulsepoetry.com",
    slug: "show-upload-automation",
    featured: true,
    problem: {
      imageSrc: "/images/projects/pulse-poetry/what is on.png",
      description:
        "Pulse Poetry had outgrown Instagram. Shows were curated manually, discovery depended on the algorithm and followers had no reliable way to browse events or buy tickets. The platform simply couldn’t support Pulse Poetry’s ambition to become the Eventbrite of spoken word. They needed a dedicated system that centralised events, streamlined submissions and created a clear path from discovery to ticket purchase.",
    },
    solution: {
      content: [
        {
          title: "User-Facing Platform",
          description:
            "We designed and built a fast, intuitive platform where audiences can browse upcoming spoken‑word shows with clarity. Each event page includes rich details, interactive maps, organiser profiles and direct ticket links, making discovery effortless. The interface is intentionally minimal, allowing the content — the shows, the venues, the artists — to take centre stage. The experience works seamlessly across devices, giving users a reliable place to explore the spoken‑word scene without relying on social media algorithms.",
        },
        {
          title: "Admin Panel & Access Control  ",
          description:
            "We built a dedicated admin system that gives the Pulse team full control over their ecosystem. Staff can manage organisers, approve submissions, edit show details, upload media and assign different permission levels to team members. The dashboard is designed for speed and clarity, reducing the time spent on manual curation and giving the team a structured, reliable workflow for managing the entire platform.",
        },
        {
          title: "Anonymous Organiser Submissions  ",
          description:
            "To encourage growth and reduce friction, we created a submission flow that allows organisers to upload shows without creating an account. This was a strategic decision: removing the signup barrier increases the number of events on the platform and keeps the ecosystem active. Submissions enter a review queue in the admin panel, where the Pulse team can approve, edit or reject them with a single click.",
        },
        {
          title: "SEO & Analytics Setup",
          description:
            "We implemented technical SEO foundations to ensure the platform is discoverable from day one. This includes structured metadata, sitemap generation, clean markup and GA4 integration for tracking user behaviour. The goal was to give Pulse Poetry long‑term visibility and the ability to make data‑driven decisions as the platform grows.",
        },
        {
          title: "Search‑Optimised URL Structure",
          description: `
            We engineered an Eventbrite‑style URL system that mirrors real search intent. For example:
/shows/london/shows--this-weekend/all-shows/  
This structure improves indexing, strengthens SEO and makes the platform feel familiar to users who are used to large‑scale event platforms. It’s a small detail with a big impact on discoverability and long‑term growth.
            `,
        },
      ],
      media: [
        {
          type: "video",
          src: "/projects/pulse-poetry/solution.webm",
          caption: "Searching for shows",
        },
        {
          type: "video",
          src: "/projects/pulse-poetry/solution 2.webm",
          caption: "Uploading shows",
        },
      ],
    },
    impact: [
      {
        title: "",
        description: "",
      },
    ],
  },
];
