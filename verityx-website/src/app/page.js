const Home = async () => {
  const data = [...Array(100).keys()];

  return (
    <>
      <section className="h-screen flex justify-center">
        <div className="w-full flex flex-col items-center">
          <h1>Hello world</h1>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-20">
          {data.map((item, index) => (
            <p>{item}</p>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
