// Components
import ReviewSwiper from "./reviewSwiper";

const ReviewSection = () => {

  const desc =
    "Lorem ipsum dolor sit amet consectetur. Neque metus varius orci mattis eu nunc pellentesque. Nulla diam non nullam ut.";

  const data = [
    {
      company: "TDM Masjid",
      desc: desc,
      name: "Ryan",
      role: "CEO",
      jobs: [
        { name: "UI Design", icon: "design" },
        { name: "Web Development", icon: "development" },
        { name: "Branding", icon: "branding" },
      ],
    },
    {
      company: "Pulse Poetry",
      desc: desc,
      name: "Jason",
      role: "CEO",
      jobs: [
        { name: "UI Design", icon: "design" },
        { name: "Web Development", icon: "development" },
        { name: "Branding", icon: "branding" },
      ],
    },
    {
      company: "Querentia",
      desc: desc,
      name: "Patrick",
      role: "CEO",
      jobs: [
        { name: "UI Design", icon: "design" },
        { name: "Web Development", icon: "development" },
        { name: "Branding", icon: "branding" },
      ],
    },
  ];

  return (
    <>
      <ReviewSwiper data={data} />
    </>
  );
};

export default ReviewSection;
