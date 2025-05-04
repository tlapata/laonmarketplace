import { Loan } from "views/Marketplace/types";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
type Props = {
  chartData: [];
  loanData: Loan;
};

const LiquidationChart: React.FC<Props> = ({ chartData, loanData }) => {
  const dates = (chartData || []).map((d) => {
    const time = new Date(+d["createdAt"]);
    return `${time.getMonth() + 1}/${time.getDate()}/${time.getFullYear()}`;
  });
  const amount = chartData?.map((data) => {
    return data["collateralSum"];
  });
  let colorsData = [];
  let loanPercentages = [];
  const percentages = [200, 180, 160, 140, 125]
  const filteredThresholds = percentages
    .filter((value) => value >= loanData?.ltvpercentage)
    .concat(loanData?.ltvpercentage)

  for (let k = 0; k < filteredThresholds.length; k++) {
    loanPercentages.push((filteredThresholds[k] / 100) * loanData?.borrowAmount);
  }

  const liquidationAlertDatasets = filteredThresholds.map((threshold, index) => {
    const label = `Liquidation Alert (${threshold}%)`;
    const data = Array.from({ length: amount?.length }, () => loanPercentages[index]);
    return {
      label,
      data,
      borderColor: "#ff0000fc",
      backgroundColor: "#ff0000fc",
    };
  });

  for (let i = 0; i < amount?.length; i++) {
    colorsData.push("#FFFFFF");
  }

  const chartJsOption = {
    type: "Line",
    responsive: true,
    maintainAspectRatio: false,
    pointHoverRadius: 5,
    pointRadius: 0,
    pointHitRadius: 8,
    scales: {
      yAxis: {
        min: loanData?.borrowAmount,
        color: "white",
        ticks: {
          color: "white",
        },
      },
      xAxis: {
        ticks: {
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Lines Chart",
      },
      tooltip: {
        usePointStyle: true,
      },
    },
  };
  const labels = dates;

  const chartJSData = {
    labels,
    datasets: [
      {
        label: "Initial Collateral",
        data: [loanData?.totalCollateral],
        borderColor: "#6AD050",
        backgroundColor: "#6AD050",
        pointRadius: 5,
      },
      {
        label: "Collateral",
        data: amount,
        borderColor: "#6AD050",
        backgroundColor: "#6AD050",
      },
      ...liquidationAlertDatasets,
    ],
  };

  return (
    <>
      <Line options={chartJsOption} data={chartJSData} />
    </>
  );
};
export default LiquidationChart;
