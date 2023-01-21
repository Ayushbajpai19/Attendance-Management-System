import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { userData } from "../../dummyData";
const data = [
  {
    "name": "English",
    "Total": 68,
    "Present": 64
  },
  {
    "name": "Hindi",
    "Total": 68,
    "Present": 35
  },
  {
    "name": "Maths",
    "Total": 68,
    "Present": 65
  },
  {
    "name": "Physics",
    "Total": 68,
    "Present": 60
  },
  {
    "name": "Chemistry",
    "Total": 68,
    "Present": 66
  },
  {
    "name": "Biology",
    "Total": 21,
    "Present": 20
  },
  {
    "name": "SST",
    "Total": 34,
    "Present": 31
  }
]
export default function barChart() {
return (
  <div className="widgetSm">
     <h3 class="widgetSmTitle">Subjectwise Attendance</h3>
     <br></br><br></br>
     <div class="barChart">
 <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Total" fill="#8884d8" />
  <Bar dataKey="Present" fill="#82ca9d" />
</BarChart>
</div>
</div>
);
}

// This is the full code for the bar chart component, you need to make sure that you've imported the necessary modules and packages and that your data is in the correct format. Also, you need to import the css file and use it to style the chart accordingly.

//You also need to import the data from the correct file and replace the userData in the code with the correct data.
// and you need to use this component in your widgetLg component by calling it in the return section.



