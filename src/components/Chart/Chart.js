import "./Chart.css";
import Chartbar from "./Chartbar";

const Chart = (props) => {

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Chartbar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMax}
        label={dataPoint.label}/>
      ))}
    </div>
  );
};
export default Chart;
