import Link from "next/link";

const ArchiveTable = ({ data }) => {
  const Row = ({ project_name, location, mainService, commenceDate, slug }) => (
    <Link href={`/projects/${slug}`}>
      <li className="flex py-8 border-b border-b-line items-center justify-center">
        <div className="flex-[2]">
          <p className="res-text-28 md:res-text-">{project_name}</p>
          <p className="font-medium block md:hidden">{commenceDate}</p>
        </div>
        <p className="flex-1 font-medium">{location}</p>
        <p className="flex-1 font-medium">{mainService}</p>
        <p className="flex-1 font-medium hidden md:block">{commenceDate}</p>
      </li>
    </Link>
  );

  return (
    <div className="flex flex-col">
      <div className="flex w-full text-sm text-gray-400 pb-8">
        <p className="flex-[2]">PROJECT</p>
        <p className="flex-1">LOCATION</p>
        <p className="flex-1">SERVICES</p>
        <p className="flex-1 hidden md:block">YEAR</p>
      </div>
      <hr className="h-px w-full border-line" />
      <ul className="flex flex-col">
        {data.map((item, index) => (
          <Row
            slug={item.slug}
            key={index}
            project_name={item.project_name}
            mainService={item.main_service.join(" & ")}
            commenceDate={new Date(item.commence_date).getFullYear()}
            location={item.client.location.split(",")[1]}
          />
        ))}
      </ul>
    </div>
  );
};

export default ArchiveTable;
