// React
import Link from "next/link";

// Types
type Props = {
  clientName: string;
  site_url: string;
  description: string;
  subServices: string[];
  title: string;
  tech_stack: string[];
  commence_date: Date;
};

const ProjectHeader = ({
  site_url,
  description,
  clientName,
  subServices,
  title,
  tech_stack,
  commence_date,
}: Props) => {
  const Subheader = ({ text }: { text: string }) => {
    return <h4 className="text-gray-400 tracking-widest">{text}</h4>;
  };

  return (
    <>
      <div className="flex flex-col gap-12 lg:gap-24">
        <div className="flex flex-col gap-2">
          <Subheader text={"CASE STUDY"} />
          <h1>{title}</h1>
          {site_url && (
            <Link
              className="flex w-fit mt-4 items-center gap-2 tracking-widest rounded bg-gray-800 py-4 px-6"
              href={site_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="uppercase font-semibold">Visit site</p>
            </Link>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="flex-1">
            <Subheader text={"CLIENT"} />
          </div>
          <div className="flex-1">
            <p className="res-text-21 font-bold uppercase">{clientName}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="flex-1">
            <Subheader text={"WHEN"} />
          </div>
          <div className="flex-1">
            <p className="res-text-21 font-bold uppercase">
              {commence_date.getFullYear()}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="flex-1">
            <Subheader text={"OUR SERVICES"} />
          </div>
          <div className="flex-1">
            {subServices.map((item, index) => (
              <p className="res-text-21 font-medium" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <div className="flex-1">
            <Subheader text={"SUMMARY"} />
          </div>
          <div className="flex-1">
            <p className="flex-1 res-text-21 leading-relaxed whitespace-break-spaces">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
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
    </>
  );
};

export default ProjectHeader;
