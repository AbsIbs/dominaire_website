"use client";
// Material UI
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
// Components
import FadeIn from "./fadeIn";

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
      <FadeIn viewport={{ once: true, amount: 0.5 }}>
        <div className="flex-1 flex flex-col justify-end rounded-lg bg-[#F4F4F4] gap-10 ~sm/lg:~p-4/10">
          <div className="flex flex-col">
            <p className="text-[50px]">
              <FormatQuoteRoundedIcon
                fontSize="inherit"
                sx={{ color: "black" }}
                className=" rotate-180"
              />
            </p>
            <p className="res-text-28 text-text-normal line-clamp-5">
              {props.desc}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {props.jobs.map((job, index) => (
                <div
                  key={index}
                  className="flex px-6 py-2 rounded-full border-2 border-line"
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
      </FadeIn>
    );
  };

  return (
    <div className="flex flex-col gap-10">
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
