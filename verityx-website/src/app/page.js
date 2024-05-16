// Components
import Hero from "./components/hero"

const Home = async () => {
  return (
    <>
      <section className="h-screen flex justify-center">
        <div className="w-full">
          <Hero />
        </div>
      </section>
      <section className="py-48 flex justify-center px-24"></section>
    </>
  );
};

export default Home;
