import "./barChart.css";
import {
BarChart,
CartesianGrid,
XAxis,
YAxis,
Tooltip,
Legend,
Bar,
ResponsiveContainer,
} from "recharts";



export default function barChart({ title, data, dataKey }) {
return (
<div className="barChart">
<h3 className="barChartTitle">{title}</h3>
<ResponsiveContainer width="100%" aspect={4 / 1}>
<BarChart width={930} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Subject" />
<YAxis dataKey="Subject" />
  <Tooltip />
  <Legend />
  <Bar dataKey="subject" fill="#8884d8" />
  <Bar dataKey="Subject" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>
);
}