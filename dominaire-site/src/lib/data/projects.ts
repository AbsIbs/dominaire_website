// Types
import { ProjectData } from "@/src/lib/data/types";

export const PROJECT_DATA: ProjectData[] = [
  {
    id: "f972c271-5028-4e8d-ada7-afe405a1b0e2",
    client_id: "pulse-poetry",
    commence_date: new Date("2024-05-01"),
    end_date: null,
    title: "Find Spoken-Word events all over London",
    description:
      "Pulse Poetry needed a dedicated home for spoken word events, something far beyond what Instagram could support. We built a full platform and admin system that brings the entire scene together. Audiences can browse upcoming shows, explore organisers and navigate directly to ticket links, while the Pulse team manages everything through a powerful internal dashboard. The platform is fast, intuitive and built for growth, with SEO, analytics and a search‑optimised structure that makes discovery effortless.",
    mainServices: ["Product Development"],
    subServices: ["UX Research", "UI Design", "Web Applications"],
    coverImage: "/projects/pulse-poetry/coverImage.png",
    tech_stack: ["Figma", "Next.js", "PostgreSQL", "Supabase"],
    review: "",
    project_name: "Pulse Poetry",
    site_url: "https://www.pulsepoetry.com",
    slug: "show-finder-webapp",
    featured: true,
    problem: {
      media: [
        {
          type: "image",
          src: "/projects/pulse-poetry/pulse problem hd.png",
          caption: "Searching for shows",
        },
      ],
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
    id: "22904539-ee0e-4161-9ae7-a15d2986deef",
    client_id: "pulse-poetry",
    commence_date: new Date("2025-12-01"),
    end_date: null,
    title: "Bulk Show Uploader",
    description:
      "A high‑integrity spreadsheet‑to‑platform pipeline that let Pulse Poetry publish hundreds of shows in minutes instead of hours.",
    mainServices: ["Product Development", "Workflow Audit", "Automation"],
    subServices: ["Workflow Analysis", "Automation", "Web Applications"],
    coverImage: "/projects/pulse-poetry/coverImage.png",
    tech_stack: [
      "Google Sheets",
      "Python",
      "Figma",
      "Next.js",
      "PostgreSQL",
      "Supabase",
    ],
    review: "",
    project_name: "Pulse Poetry",
    site_url: "https://www.pulsepoetry.com",
    slug: "show-upload-automation",
    featured: true,
    problem: {
      media: [
        {
          type: "video",
          src: "/projects/pulse-poetry/csv-automation-problem.webm",
          caption: "Importing shows one at a time",
        },
      ],
      description:
        "Pulse Poetry had outgrown Instagram. Shows were curated manually, discovery depended on the algorithm and followers had no reliable way to browse events or buy tickets. The platform simply couldn’t support Pulse Poetry’s ambition to become the Eventbrite of spoken word. They needed a dedicated system that centralised events, streamlined submissions and created a clear path from discovery to ticket purchase.",
    },
    solution: {
      content: [
        {
          title: "Spreadsheet‑Aligned Data Model",
          description:
            "The uploader was designed around the client’s existing Google Sheets workflow. A structured CSV template mirrored their internal tracker, including complex JSON fields, helper tables, and built‑in functions for formatting. A custom Google Sheets function fetched latitude and longitude from addresses via a public geocoding API, ensuring location data was always valid.",
        },
        {
          title: "Folder‑Based Upload Flow",
          description:
            "Admins could upload a single folder containing the CSV and an optional images directory. Images were matched by filename, with support for default images when none were provided. The system validated folder structure before parsing any data, catching issues like missing CSVs or misnamed folders early.",
        },
        {
          title: "Full Preview & Validation Table",
          description:
            "A custom‑built preview table rendered every row and column with pixel‑level control. Zod powered deep validation across all fields, highlighting invalid cells in hard red with tooltips explaining the issue. Entire rows were lightly tinted to signal errors at a glance. Thumbnail previews ensured images matched correctly. Duplicate detection and organiser matching were built in.",
        },
        {
          title: "Automatic Organiser Handling",
          description:
            "Each show must belong to an organiser. If the CSV referenced an organiser that didn’t exist in the database, the system automatically created it before inserting the show — keeping the workflow frictionless for the client.",
        },
        {
          title: "Atomic, High‑Integrity Uploads",
          description:
            "Uploads were executed through a Supabase RPC to guarantee atomicity. If any show failed validation or insertion, the entire batch rolled back. A progress indicator (e.g., 1/87) kept the user informed throughout the process.",
        },
      ],
      media: [
        {
          type: "video",
          src: "/projects/pulse-poetry/csv-automation-solution.webm",
          caption: "Importing shows via csv",
        },
      ],
    },
    impact: [
      {
        title: "Hours of Manual Work Eliminated",
        description:
          "Uploading shows one‑by‑one took ~4 minutes each. With the bulk uploader, the client could publish 100+ shows in a single batch — saving literal hours every week.",
      },
      {
        title: "A Pipeline That Matches Real Workflow",
        description:
          "Because the uploader mirrored the client’s existing spreadsheet tracker, the majority of work happened where they were already comfortable. Transposing data became trivial instead of a bottleneck.",
      },
      {
        title: "Instant Platform Scalability",
        description:
          "The site could jump from 20 shows to over 100 in minutes. The uploader unlocked a level of throughput that manual entry simply couldn’t match.",
      },
    ],
  },
  {
    id: "28f590fc-96fa-4ccb-bbfa-ab3c5fc90884",
    client_id: "everlum",
    commence_date: new Date("2025-05-01"),
    end_date: null,
    title: "Everlum - A platform to celebrate life beautifully",
    description:
      "A memorial platform to celebrate life beautifully — built with cinematic motion, emotional storytelling, and a deeply engineered foundation.",
    mainServices: ["Product Development"],
    subServices: ["UX Research", "UI Design", "Web Applications"],
    coverImage: "/projects/everlum/logo.png",
    tech_stack: ["Figma", "Next.js", "PostgreSQL", "Supabase"],
    review: "",
    project_name: "Everlum",
    site_url: "https://www.everlum.app",
    slug: "everlum-app",
    featured: true,
    problem: {
      media: [
        {
          type: "video",
          src: "/projects/everlum/forevermissed-problem.webm",
          caption: "Forevermissed",
        },
      ],
      description:
        "In one of the most emotionally vulnerable moments of a person’s life, the digital spaces available felt cold, dated, and hollow. Most memorial platforms hadn’t evolved in years — their interfaces resembled old blogs and social feeds, offering static templates instead of atmosphere, storytelling, or care. In a space that demands beauty and emotional depth, the market offered only functional archives.",
    },
    solution: {
      content: [
        {
          title: "Guest Tributes Without Accounts",
          description:
            "One of the most common frustrations with existing platforms was forcing grieving guests to create accounts before leaving a tribute. Everlum removes this barrier entirely. Anyone can share memories, stories, photos, audio, or video without friction — while still maintaining a secure moderation pipeline for the memorial owner.",
        },
        {
          title: "Cinematic Motion & Atmosphere",
          description:
            "Everlum’s emotional tone is shaped by motion. Smooth scrolling via Lenis, scroll‑triggered GSAP animations, and carefully timed transitions create a sense of calm, presence, and ceremony. The interface feels alive — not static — guiding visitors through a gentle, cinematic experience.",
        },
        {
          title: "Bold, Spacious, Cinematic UI",
          description:
            "The UI rejects the cramped, feed‑based layouts of legacy platforms. Everlum uses large typography, generous negative space, and a visual rhythm inspired by film title sequences. The design is intentionally slow, intentional, and reverent — built for older demographics without sacrificing beauty.",
        },
        {
          title: "Rich Media Storytelling",
          description:
            "Visitors can share stories, photos, audio, and video — each rendered in a clean, atmospheric layout. Media uploads are compressed, processed, and delivered through a custom pipeline to ensure fast performance without relying on expensive third‑party services.",
        },
        {
          title: "Light‑a‑Candle Ritual",
          description:
            "A full‑screen, black‑background cinematic modal where visitors can light a CSS‑rendered flickering candle. It’s a small but powerful ritual — a moment of stillness that transforms Everlum from a website into an experience.",
        },
      ],
      media: [
        {
          type: "video",
          src: "/projects/everlum/everlum-intro.webm",
          caption: "Everlum",
        },
        {
          type: "video",
          src: "/projects/everlum/everlum-tributes.webm",
          caption: "Tributes"
        },
        {
          type: "video",
          src: "/projects/everlum/everlum-gallery.webm",
          caption: "Gallery"
        },
      ],
    },
    impact: [
      {
        title: "A More Beautiful Way to Remember",
        description:
          "Early users consistently describe Everlum as 'beautiful' and 'emotional' — a stark contrast to the dated, template‑driven alternatives.",
      },
      {
        title: "Frictionless Participation for All Ages",
        description:
          "Older visitors were able to read, browse, and leave tributes with minimal guidance. Removing account creation dramatically increased participation.",
      },
      {
        title: "A Foundation for Scalable, Emotional Storytelling",
        description:
          "The architecture supports rich media, cinematic motion, and future AI‑powered features — all while remaining cost‑efficient and maintainable.",
      },
    ],
    engineering_notes: [
      {
        title: "Anonymous Tribute Authorization",
        description:
          "Designing a secure system where guests can upload stories and media without accounts required a custom authorization flow. Submissions are stored in a pending state, allowing memorial owners to approve or decline content without exposing the backend to anonymous writes.",
      },
      {
        title: "Distributed Media Compression Pipeline",
        description:
          "To avoid expensive third‑party APIs, Everlum uses three custom microservices deployed on Render — one each for audio, images, and video. Uploads trigger a Supabase Edge Function, which forwards media to the appropriate service in a fire‑and‑forget pattern. The service compresses the file, uploads the optimized version, deletes the original, and updates the database. This system took weeks to stabilize due to Docker deployment challenges and async orchestration.",
      },
      {
        title: "Atomic Multi‑Table Writes",
        description:
          "Tributes, media references, and metadata span multiple tables. All writes are atomic to prevent partial submissions. Error handling was a major challenge, especially when media uploads could fail independently of database writes.",
      },
      {
        title: "Handling Multiple Media Uploads",
        description:
          "Visitors often upload several images or audio files at once. Everlum uses a combination of client‑side batching, server actions, and background processing to maintain performance while ensuring each file is validated, compressed, and stored correctly.",
      },
      {
        title: "Motion Architecture with GSAP, Lenis, and Framer Motion",
        description:
          "Cinematic motion required blending three animation systems. GSAP handles scroll‑triggered sequences, Lenis controls the global scroll feel, and Framer Motion manages component‑level transitions. Balancing these without jank — especially on older devices — required deep tuning.",
      },
      {
        title: "Error State Design for Older Users",
        description:
          "Because the audience includes older demographics, error states needed to be clear, gentle, and actionable. Upload failures, validation issues, and media processing delays are surfaced with simple language and calm UI patterns.",
      },
      {
        title: "Silent Infinite Rerender Bug",
        description:
          "A subtle useEffect dependency issue caused silent infinite rerenders that only surfaced when Supabase usage hit 80%. Debugging and resolving this required a full audit of state and subscription lifecycles.",
      },
    ],
  },
];
