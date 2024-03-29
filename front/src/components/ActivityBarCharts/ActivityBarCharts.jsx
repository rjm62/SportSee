
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

function ActivityBarCharts({user}) {
  const daysNumbers = () => {
    return user.sessions.map((session, index) => index + 1);
   }
  return (
    <ResponsiveContainer  width="100%" height={230} >
      <BarChart
        width={1600}
        height={90}
        data={user.sessions}
        margin={{
          top: 25,
          right: 40,
          left: 0,
          bottom: 12
        }}
        barCategoryGap={"13"}
        maxBarSize={8}
        barGap={"-6"}
        padding={{Right: 20}}
      >
        <CartesianGrid strokeDasharray="3 1" vertical={false} />
        <XAxis 
        dataKey= {daysNumbers}  
        padding={{ left: -22, right: -22 }} 
        tickLine={false} 
        tickMargin={15} 
        />
      
        <YAxis
        yAxisId="kg"
        dataKey="kilogram"
        domain={["dataMin - 2", "dataMax + 1"]} 
        allowDecimals={false}
        dx={30}
        orientation="right"
        axisLine={false}
        tickLine={false}
        />
        <YAxis
        yAxisId="cal"
        dataKey="calories"
        hide={true}
        orientation="left"
        axisLine={false}
        tickLine={false}
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

        <Bar  
        yAxisId="kg" 
        dataKey="kilogram" 
        fill="#282D30"  
        legendType="cercle" 
        name="&nbsp;Poids(kg)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
        radius={[10, 10, 0, 0]} 
        // isAnimationActive={true} 
        // animationDuring={2500}
        />

        <Bar 
        yAxisId="cal" 
        dataKey="calories" 
        fill="#E60000" 
        legendType="cercle" 
        name="&nbsp;Calories brûlées(kCal)" 
        radius={[10, 10, 0, 0]} 
        /> 

      </BarChart>
    </ResponsiveContainer>
  );
}

export default ActivityBarCharts
