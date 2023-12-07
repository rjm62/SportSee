
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import '../../style/ActivityBarCharts.css'

const data = [
  {
    name: "1",
    uv: 40,
    pv: 24
  },
  {
    name: "2",
    uv: 71,
    pv: 54
  },
  {
    name: "3",
    uv: 20,
    pv: 65
  },
  {
    name: "4",
    uv: 27,
    pv: 39
  },
  {
    name: "5",
    uv: 18,
    pv: 48
  },
  {
    name: "6",
    uv: 48,
    pv: 38
  },
  {
    name: "7",
    uv: 58,
    pv: 43
  },
  {
    name: "8",
    uv: 75,
    pv: 65

  },
  {
    name: "9",
    uv: 39,
    pv: 71
  },
  {
    name: "10",
    uv: 34,
    pv: 43
  }
];


const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="tooltipContainer">
        <p>{`${payload[0].value} `}kg</p>
        <p>{`${payload[1].value} `}kCal</p>
      </div>
    );
  }
  return null;
};



function ActivityBarCharts() {
  return (
    <ResponsiveContainer  width="100%" height={300} >
    <BarChart
      width={800}
      height={140}
      data={data}
      margin={{
        top: 25,
        right: 20,
        left: 0,
        bottom: 12
      }}
      barCategoryGap={"18"}
      maxBarSize={8}
      barGap={"-6"}
    >
      <CartesianGrid strokeDasharray="3 1" vertical={false} />
      <XAxis dataKey="name"   padding={{ left: -25, right: -25 }} tickLine={false} tickMargin={15} />
      <YAxis
      orientation='right' tickCount={3} tickLine={false} axisLine={false} tickMargin={35}
      // dx={14} 
      // interval="preserveStartEnd"
      // scale="sqrt"
      // padding={{ top: 15, bottom: -5 }}

      />

      <Tooltip 
    content={CustomTooltip}
      />
      
      <text dy={+40} width={200}>
            Activité quotidienne
      </text>
      <Legend
      chartWidth={600}
      height={80}
      align='right'
      verticalAlign='top'
      margin={{
        top: 2000,
        right:500,
        left: 300,
        bottom:2000
      }}
      />
      <Bar dataKey="pv" fill="#282D30"  legendType="cercle" name="&nbsp;Poids(kg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
      radius={[10, 10, 0, 0]} isAnimationActive={true} animationDuring={2500}
      
      />
      <Bar dataKey="uv" fill="#E60000" legendType="cercle" name="&nbsp;Calories brûlées(kCal)" radius={[10, 10, 0, 0]}/>
    </BarChart>
    </ResponsiveContainer>
  );
}


export default ActivityBarCharts
