const ArchiveTable = ({ data }) => {
  const Row = ({ client, location, mainService, commenceDate }) => (
    <li className="flex py-8 border-b border-b-line items-center justify-center">
      <p className="flex-[2] res-text-28">{client}</p>
      <p className="flex-1 font-medium">{location}</p>
      <p className="flex-1 font-medium">{mainService}</p>
      <p className="flex-1 font-medium">{commenceDate}</p>
    </li>
  );

  return (
    <div className="flex flex-col">
      <div className="flex w-full text-sm text-gray-400 pb-8">
        <p className="flex-[2]">CLIENT</p>
        <p className="flex-1">LOCATION</p>
        <p className="flex-1">SERVICES</p>
        <p className="flex-1">YEAR</p>
      </div>
      <hr className="h-px w-full border-line" />
      <ul className="flex flex-col">
        {data.map((item, index) => (
          <Row
            key={index}
            client={item.client.name}
            mainService={item.main_service.join(" & ")}
            commenceDate={new Date(item.commence_date).getFullYear()}
            location={item.client.location}
          />
        ))}
      </ul>
    </div>
  );
};

export default ArchiveTable;
