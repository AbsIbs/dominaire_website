// Components
import ContactForm from "../components/contactForm"

const Page = async () => {

  return (
    <>
      <section className="flex ypadding justify-center">
        <div className="w-[1440px] xpadding flex flex-col gap-48">
          <p className="text-[6.25rem] font-light leading-tight">
            Let's building something great together
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Page;
