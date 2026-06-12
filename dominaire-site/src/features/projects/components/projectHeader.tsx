// React
import Link from "next/link";

// Types
type Props = {
  clientName: string;
  site_url: string;
  description: string;
  main_services: string[];
  title: string;
  tech_stack: string[];
};

const ProjectHeader = ({
  site_url,
  description,
  clientName,
  main_services,
  title,
  tech_stack,
}: Props) => {
  const Subheader = ({ text }: { text: string }) => {
    return <p className="res-text-21 text-gray-400 tracking-widest">{text}</p>;
  };

  return (
    <>
      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-2 max-w-1/2">
          <Subheader text={"CASE STUDY"} />
          <p className="res-text-60 font-bold leading-none">{title}</p>
          {site_url && (
            <Link
              className="flex w-fit mt-4 items-center gap-2 tracking-widest rounded bg-gray-800 py-2 px-6"
              href={site_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="uppercase font-semibold">Visit site</p>
            </Link>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <Subheader text={"CLIENT"} />
          </div>
          <div className="flex-1">
            <p className="res-text-21 font-bold uppercase">{clientName}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <Subheader text={"OUR SERVICES"} />
          </div>
          <div className="flex-1">
            {main_services.map((item, index) => (
              <p className="res-text-21 font-medium" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <Subheader text={"SUMMARY"} />
          </div>
          <div className="flex-1">
            <p className="flex-1 res-text-21 leading-relaxed whitespace-break-spaces">
              {description}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <Subheader text={"TECH STACK"} />
          </div>
          <div className="flex-1">
            {tech_stack.map((item, index) => (
              <p className="res-text-21 font-medium" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-2">
        <Subheader text={"CASE STUDY"} />
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between">
          <div className="flex-1 flex flex-col gap-12">
            <p className="res-text-60 font-bold leading-none">{title}</p>
            <div className="flex flex-col gap-1">
              <Subheader text={"OUR SERVICES"} />
              <div>
                {main_services.map((item, index) => (
                  <p className="res-text-21 font-medium" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Subheader text={"CLIENT"} />
              <p className="res-text-21 font-medium">{clientName}</p>
            </div>
            {site_url && (
              <Link href={site_url} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 res-text-21 tracking-widest rounded bg-gray-800 py-2 px-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p>Visit site</p>
                </button>
              </Link>
            )}
          </div>
          <p className="flex-1 res-text-21 leading-relaxed whitespace-break-spaces">
            {description}
          </p>
        </div>
      </div> */}
    </>
  );
};

export default ProjectHeader;
