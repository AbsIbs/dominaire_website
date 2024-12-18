import Link from "next/link";

const Header = ({ data }) => {
  const Subheader = ({ text }) => {
    return <p className="res-text-21 text-gray-400 tracking-widest">{text}</p>;
  };

  return (
    <div className="flex flex-col gap-2">
      <Subheader text={"CASE STUDY"} />
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between">
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
            <p className="res-text-21 font-medium">{data.client.name}</p>
          </div>
          {data.site_url && (
            <Link
              href={data.site_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 res-text-21 tracking-widest rounded bg-gray-800 py-2 px-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p>Visit site</p>
              </button>
            </Link>
          )}
        </div>
        <p className="flex-1 res-text-21 leading-relaxed whitespace-break-spaces">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Header;
