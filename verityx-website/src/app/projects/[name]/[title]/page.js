// Components
import Header from "./components/header";

const Page = ({ params }) => {
  const data = {
    title: "Basic UX - design resources for Querentia",
    services: ["Logo Design", "Branding", "UI Design"],
    year: "2024",
    client: "Querentia",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id lectus laoreet gravida. Suspendisse sit amet ultricies felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque rutrum fringilla sem sit amet semper. Sed imperdiet accumsan porttitor. Nam dapibus augue dolor, ac lobortis magna eleifend ac. Vivamus finibus ipsum metus, eu hendrerit elit iaculis sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fa Vestibulum in sollicitudin neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod id lectus laoreet gravida. Suspendisse sit amet ultricies felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  };

  return (
    <>
      <section className="xpadding py-16">
        <div className="flex gap-4 items-center justify-center">
          <div className="flex flex-col ~sm/lg:~gap-12/24 w-[1440px]">
            <Header data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
