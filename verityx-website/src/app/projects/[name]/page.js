// Components
import Header from "./components/header";
import { MDXRemote } from "next-mdx-remote/rsc";
// Supabase
import { createClient } from "../../../../utils/supabase/server.ts";

export const generateMetadata = async ({ params }) => {
  const title = params;

  return {
    title: `${title.name} | Dominaire`,
    description: `Our project with ${title.name}.`,
  };
};

const Page = async ({ params }) => {
  const supabase = createClient();

  // Get data
  const { data, error } = await supabase
    .from("project")
    .select(`*, client!inner(name, id)`)
    .eq("slug", params.name)
    .single();

  // Fetch summary
  const res = await fetch(data.summary_mdx);
  const mdxText = await res.text();

  return (
    <>
      <section className="xpadding py-16">
        <div className="flex gap-4 items-center justify-center">
          <div className="flex flex-col ~sm/lg:~gap-12/24 w-[1440px]">
            <Header data={data} />
            <MDXRemote source={mdxText} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
