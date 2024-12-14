// NextJS
import Link from "next/link";
// Components
import FilterComponent from "./components/filterComponent";
import ProjectCard from "./components/projectCard";
// Supabase
import { createClient } from "../../../utils/supabase/server";

const Page = async ({ searchParams }) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("project")
    .select(
      `coverImage, main_service, commence_date, project_name, client!inner(name), slug`
    )
    .order("commence_date", { ascending: false })
    .limit(10);

  return (
    <>
      <section className="flex ypadding justify-center">
        <div className="w-[1440px] xpadding flex flex-col ~sm/lg:~gap-8/24">
          <p className="res-text-80 font-light leading-tight">
            What we&apos;ve achieved
          </p>
          <FilterComponent searchParams={searchParams} />
          <div className="grid gap-x-16 gap-y-12 md:gap-y-24 lg:gap-y-48 grid-cols-1 md:grid-cols-2">
            {data.map((project, index) => (
              <div key={index}>
                <ProjectCard
                  slug={project.slug}
                  coverImage={project.coverImage}
                  projectName={project.project_name}
                  mainService={project.main_service}
                  commenceDate={project.commence_date}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Link href="/archive" className="bg-white py-4 px-10 rounded-full">
              <p className="res-text-21 text-text-normal">Archive</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
