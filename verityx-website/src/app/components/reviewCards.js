// Material UI
import { Reviews } from "@mui/icons-material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const ReviewCards = () => {
  const maxLength = 200;
  const desc =
    "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut. Rhoncus id mattis mauris malesuada. Ut pulvinar urna lacus pharetra. Lorem ipsum dolor sit amet consectetur.";

  const data = [
    {
      client: "Lorem",
      desc: desc,
      name: "lorem",
      role: "CEO",
      jobs: ["UI Design", "UX Research", "Web Development"],
    },
    {
      client: "Lorem",
      desc: desc,
      name: "lorem",
      role: "CEO",
      jobs: ["UI Design", "UX Research", "Web Development"],
    },
    {
      client: "Lorem",
      desc: desc,
      name: "lorem",
      role: "CEO",
      jobs: ["UI Design", "UX Research", "Web Development"],
    },
  ];

  const Card = (props) => {
    return (
      <div className="flex w-full flex-col h-[700px] justify-end rounded-lg bg-[#F4F4F4] gap-10 p-10">
        <div className="flex w-full justify-end"></div>
        <div className="flex flex-col">
          <p className="text-[50px]">
            <FormatQuoteIcon fontSize="inherit" sx={{ color: "black" }} />
          </p>
          <p className="res-text-38 text-text-normal line-clamp-5">
            {props.desc}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            {props.jobs.map((job, index) => (
              <div
                key={index}
                className="flex px-4 py-2 rounded-full border-2 border-line"
              >
                <p className="text-text-normal res-text-21">{job}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col px-4 border-l-2 border-l-line">
            <p className="text-text-normal res-text-21 font-bold">
              {props.name}
            </p>
            <p className="text-text-normal res-text-base">
              {props.role} at {props.client}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-5 max-w-screen">
      {data.map((review, index) => (
        <div key={index}>
          <Card
            name={review.name}
            client={review.client}
            role={review.role}
            desc={review.desc}
            jobs={review.jobs}
          />
        </div>
      ))}
    </div>
  );
};

export default ReviewCards;
