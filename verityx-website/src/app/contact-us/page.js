// Components
import ContactForm from "../components/contactForm"

const Page = async () => {
  return (
    <>
      <section className="flex ypadding justify-center">
        <div className="w-[1440px] xpadding flex flex-col ~sm/lg:~gap-8/48">
          <p className="res-text-80 font-light leading-tight">
            Let's building something great together
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Page;
