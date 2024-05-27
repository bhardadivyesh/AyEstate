import "./DashboardOverview.css";
import LineGraph from "react-line-graph";
import DonutChart from "react-donut-chart";
const DashboardOverview = () => {
  const data = [
    2, 1, 5, 2, 8, 6, 2, 53, 4, 5, 6, 7, 8, 9, 0, 78, 6, 5, 4, 3, 3, 4,
  ];
  const props = {
    data,
    smoothing: 0.3,
    accent: "palevioletred",
    fillBelow: "#B7EEB7",
    hover: true,
    showXAxis: true,
    showYAxis: true,
  };
  return (
    <>
      <div className="bg">
        <LineGraph {...props} />
        <DonutChart
          data={[
            {
              label: "jakarta",
              value: 20,
            },
            {
              label: "bandang",
              value: 20,
            },
            {
              label: "bali",
              value: 20,
            },
            {
              label: "villa",
              value: 5,
            },
            {
              label: "Medan",
              value: 45,
            },
            
          ]}
        />
        ;
      </div>
    </>
  );
};

export default DashboardOverview;
