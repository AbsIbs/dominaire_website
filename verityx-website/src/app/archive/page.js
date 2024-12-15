// Supabase
import { createClient } from "../../../utils/supabase/server";
// Components
import ArchiveTable from "./components/archiveTable";

const Page = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("project")
    .select(
      `main_service, commence_date, project_name, slug, client!inner(name, location)`
    )
    .order("commence_date", { ascending: false })

  return (
    <>
      <section className="flex ypadding justify-center">
        <div className="w-[1440px] xpadding flex flex-col ~sm/lg:~gap-8/24">
          <p className="res-text-80 font-light leading-tight">Our archive</p>
          <ArchiveTable data={data} />
        </div>
      </section>
    </>
  );
};

export default Page;
