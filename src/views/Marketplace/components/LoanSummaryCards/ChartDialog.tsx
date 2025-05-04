import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "components/Dialog";
import CancelBg from "assets/images/cancelDialog.png";
import EyeIcon from "assets/icons/eye.svg";
import IconButton from "components/Elements/IconButton";
import { Loan } from "views/Marketplace/types";
import { Line } from "react-chartjs-2";

type Props = {
  chartData: [];
  loanData: Loan;
  open?: boolean;
  setOpen?: (open: boolean) => void;
};

const ChartDialog: React.FC<Props> = ({
  chartData,
  loanData,
  open,
  setOpen,
}) => {
  const dates = chartData?.map((d) => {
    const time = new Date(+d["createdAt"]);
    return `${time.getMonth() + 1}/${time.getDate()}/${time.getFullYear()}`;
  });
  const amount = chartData?.map((data) => {
    return data["collateralSum"];
  });
  amount && amount.reverse();
  let data = [];
  let data2 = [];
  let data3 = [];
  let data4 = [];
  let data5 = [];
  let colorsData = [];
  let loanPercentages = [];
  const percentages = [125, 140, 160, 180, 200];
  for (let k = 0; k < percentages.length; k++) {
    loanPercentages.push((percentages[k] / 100) * loanData.borrowAmount);
  }

  Array.from({ length: amount.length }).map((_d) =>
    data.push(loanPercentages[0])
  );
  Array.from({ length: amount.length }).map((_d) =>
    data2.push(loanPercentages[1])
  );
  Array.from({ length: amount.length }).map((_d) =>
    data3.push(loanPercentages[2])
  );
  Array.from({ length: amount.length }).map((_d) =>
    data4.push(loanPercentages[3])
  );
  Array.from({ length: amount.length }).map((_d) =>
    data5.push(loanPercentages[4])
  );
  for (let i = 0; i < amount.length; i++) {
    colorsData.push("#FFFFFF");
  }

  const chartJsOption = {
    type: "Line",
    responsive: true,
    pointHoverRadius: 5,
    pointRadius: 0,
    pointHitRadius: 8,
    scales: {
      yAxis: {
        min: loanData.borrowAmount,
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
      {
        label: "Liquidation Alert (125%)",
        data: data,
        borderColor: "#ff0000fc",
        backgroundColor: "#ff0000fc",
      },
      {
        label: "Liquidation Alert (140%)",
        data: data2,
        borderColor: "#ff0000fc",
        backgroundColor: "#ff0000fc",
      },
      {
        label: "Liquidation Alert (160%)",
        data: data3,
        borderColor: "#ff0000fc",
        backgroundColor: "#ff0000fc",
      },
      {
        label: "Liquidation Alert (180%)",
        data: data4,
        borderColor: "#ff0000fc",
        backgroundColor: "#ff0000fc",
      },
      {
        label: "Liquidation Alert (200%)",
        data: data5,
        borderColor: "#ff0000fc",
        backgroundColor: "#ff0000fc",
      },
    ],
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={(e) => e.stopPropagation()}>
        <IconButton>
          <img src={EyeIcon} alt="more-info" />
        </IconButton>
      </DialogTrigger>
      <DialogContent
        onClick={(e) => e.stopPropagation()}
        size="small"
      >
        <DialogTitle>
          altcoin / sun token liquidation risk
        </DialogTitle>
        <Line options={chartJsOption} data={chartJSData} />
      </DialogContent>
    </Dialog>
  );
};

export default ChartDialog;
