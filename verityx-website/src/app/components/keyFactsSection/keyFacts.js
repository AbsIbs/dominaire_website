// Components
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Key = (props) => {
  return (
    <div className="flex gap-4 items-center">
      <div className={`${props.color} h-6 w-6`}></div>
      <p className="res-text-21 text-text-normal">{props.text}</p>
    </div>
  );
};

export const Slide1 = () => {
  // Chart.JS
  ChartJS.register(ArcElement, Tooltip);
  const labels = ["Other", "Google"];
  const data = {
    labels: labels,
    datasets: [
      {
        data: [10, 90],
        backgroundColor: ["#121212", "#E9204F"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col h-full ~sm/2xl:~gap-4/12 2xl:justify-between">
      <div className="flex flex-col gap-2">
        <p className="res-text-50 text-text-normal-70">
          &apos;90% of online searches happen on Google.&apos;
        </p>
        <div className="flex flex-col gap-2">
          <Key
            text={"Google Search, Images and YouTube"}
            color={"bg-primary"}
          />
          <Key text={"Other search engines"} color={"bg-surface"} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {/* Graph */}
        <div className="w-fit" style={{ aspectRatio: 2 }}>
          <Doughnut data={data} />
        </div>
        <p className="res-text-base text-text-normal-70">
          SOURCE: STATSCOUNTER
        </p>
      </div>
    </div>
  );
};

export const Slide2 = () => {
  // Chart.JS
  ChartJS.register(ArcElement, Tooltip);
  const labels = ["Other", "Google"];
  const data = {
    labels: labels,
    datasets: [
      {
        data: [10, 90],
        backgroundColor: ["#121212", "#E9204F"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-2">
        <p className="res-text-50 text-text-normal-70">
          &apos;90% of online searches happen on Google.&apos;
        </p>
        <div className="flex flex-col gap-2">
          <Key
            text={"Google Search, Images and YouTube"}
            color={"bg-primary"}
          />
          <Key text={"Other search engines"} color={"bg-surface"} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {/* Graph */}
        <div className="w-fit" style={{ aspectRatio: 2 }}>
          <Doughnut data={data} />
        </div>
        <p className="res-text-base text-text-normal-70">
          SOURCE: STATSCOUNTER
        </p>
      </div>
    </div>
  );
};
