// Components
import Header from "./components/header";
import { MDXRemote } from "next-mdx-remote/rsc";
// Supabase
import { createClient } from "../../../../utils/supabase/server.ts";
// Logic
import formatClientTitle from "./logic/formatClientTitle";

const Page = async ({ params }) => {
  const supabase = createClient();

  // Get data
  const { data, error } = await supabase
    .from("project")
    .select(`*, client!inner(name, id)`)
    .eq('client.name', formatClientTitle(params.name))
    .single()

    console.log(data)

  // Fetch summary
  const res = await fetch(
    `https://woyxacfrzfhkyahgfwpw.supabase.co/storage/v1/object/public/summaries/${params.name}/summary.mdx`
  );
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
