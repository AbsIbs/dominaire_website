// Components
import FilterComponent from "./components/filterComponent";

const Page = async ({ searchParams }) => {
  return (
    <>
      <section className="flex ypadding justify-center">
        <div className="w-[1440px] xpadding flex flex-col ~sm/lg:~gap-8/24">
          <p className="res-text-80 font-light leading-tight">
            What we&apos;ve achieved
          </p>
          <FilterComponent searchParams={searchParams} />
        </div>
      </section>
    </>
  );
};

export default Page;
