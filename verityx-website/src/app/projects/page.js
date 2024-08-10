// Components
import FilterComponent from "./components/filterComponent";
import ProjectCard from "./components/projectCard";
// Supabase
import { createClient } from "../../../utils/supabase/server";

const Page = async ({ searchParams }) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("project")
    .select(`coverImage, main_service, commence_date, client!inner(name)`)
    .order("commence_date", { ascending: false })
    .limit(10);

  console.log(data);

  return (
    <>
      <section className="flex ypadding justify-center">
        <div className="w-[1440px] xpadding flex flex-col ~sm/lg:~gap-8/24">
          <p className="res-text-80 font-light leading-tight">
            What we&apos;ve achieved
          </p>
          <FilterComponent searchParams={searchParams} />
          <div className="grid gap-x-16 gap-y-48 grid-cols-2">
            {data.map((project, index) => (
              <div key={index}>
                <ProjectCard
                  coverImage={project.coverImage}
                  clientName={project.client.name}
                  mainService={project.main_service}
                  commenceDate={project.commence_date}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
