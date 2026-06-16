// Components
import {
  ContactForm,
  ContactOptions,
} from "@/src/features/contact-us/components";

export const metadata = {
  title: "Get in touch",
  description: "Let's build something great together",
};

const Page = async () => {
  return (
    <>
      <section className="flex section-padding justify-center">
        <div className="w-360 flex flex-col gap-24 lg:gap-48">
          <h2 className="font-light leading-tight">
            Let&apos;s build something great together
          </h2>
          <ContactOptions />
          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
