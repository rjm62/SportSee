
import React from "react";
import {USER_ACTIVITY } from '../../data/dataMocked.js'
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
  console.log(USER_ACTIVITY[0].sessions)
  return (
    <ResponsiveContainer  width="100%" height={300} >
    <BarChart
      width={800}
      height={140}
      data={USER_ACTIVITY[0].sessions}
      margin={{
        top: 25,
        right: 20,
        left: 0,
        bottom: 12
      }}
      barCategoryGap={"30"}
      maxBarSize={8}
      barGap={"-6"}
    >
      <CartesianGrid strokeDasharray="3 1" vertical={false} />
      <XAxis dataKey='day'   padding={{ left: 10, right: 10 }} tickLine={false} tickMargin={15} />
      <YAxis
      orientation='right' tickCount={3} tickLine={false} axisLine={false} tickMargin={35}
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
      <Bar dataKey="kilogram" fill="#282D30"  legendType="cercle" name="&nbsp;Poids(kg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
      radius={[10, 10, 0, 0]} isAnimationActive={true} animationDuring={2500}
      
      />
      <Bar dataKey="calories" fill="#E60000" legendType="cercle" name="&nbsp;Calories brûlées(kCal)" radius={[10, 10, 0, 0]}/>
    </BarChart>
    </ResponsiveContainer>
  );
}


export default ActivityBarCharts
