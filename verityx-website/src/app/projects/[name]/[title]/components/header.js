const Header = ({ data }) => {
  const Subheader = ({ text }) => {
    return <p className="res-text-21 text-gray-400 tracking-widest">{text}</p>;
  };

  return (
    <div className="flex flex-col gap-2">
      <Subheader text={"CASE STUDY"} />
      <div className="flex gap-24 justify-between">
        <div className="flex-1 flex flex-col gap-12">
          <p className="res-text-64 font-bold leading-none">{data.title}</p>
          <div className="flex flex-col gap-1">
            <Subheader text={"OUR SERVICES"} />
            <div>
              {data.services.map((item, index) => (
                <p className="res-text-21 font-medium" key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Subheader text={"CLIENT"} />
            <p className="res-text-21 font-medium">{data.client}</p>
          </div>
          <div className="flex flex-col gap-1">
            <Subheader text={"YEAR"} />
            <p className="res-text-21 font-medium">{data.year}</p>
          </div>
        </div>
        <p className="flex-1 res-text-21 leading-relaxed">{data.desc}</p>
      </div>
    </div>
  );
};

export default Header;