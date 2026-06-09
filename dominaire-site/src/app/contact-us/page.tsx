// Components
import { ContactForm } from "@/src/features/contact-us/components";

export const metadata = {
  title: "Get in touch",
  description: "Let's build something great together",
};

const Page = async () => {
  return (
    <>
      <section className="flex py-48 justify-center">
        <div className="w-360 px-4 flex flex-col gap-48">
          <p className="text-8xl font-light leading-tight">
            Let&apos;s build something great together
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Page;
