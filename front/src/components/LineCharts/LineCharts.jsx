import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceArea,
  CustomTooltip
  } from "recharts";
import '../../style/LineCharts.css'

function LineCharts(user) {

    const data = [
        {
          name: "L",
          uv: 4000
        },
        {
          name: "M",
          uv: 3000
        },
        {
          name: "M",
          uv: 2000
        },
        {
          name: "J",
          uv: 2780
        },
        {
          name: "V",
          uv: 1890
        },
        {
          name: "S",
          uv: 2390
        },
        {
          name: "D",
          uv: 3490
        }
      ];

    return (
      <ResponsiveContainer width="100%" height="100%"> 
      
      <LineChart className="two" 
        // width={500}
        // height={200}
        data={user.user.sessions}
   
        margin={{
            top: 0,
            right: 10,
            left: 10,
            bottom: 20
        }}
    >
       < text className="title"
        x={80}
        y={-60} 
        fill="white"
        opacity={1}
        >
          Durée moyenne des
           
      </text>
      <text className="title"
        x={80}
        y={-15} 
        fill="white"
        opacity={0.5}
        >
          sessions
           
      </text> 

      <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} height={80}                       />
      <XAxis dataKey="day" 
      tickMargin={10}
      axisLine={false}
      tickLine={false}
      tick={{fill:"#ffffff", fillOpacity:"50%"}}
       />
      <YAxis hide={true}  domain={["dataMin -20", "dataMax + 50"]} />
      <Tooltip cursor={{
        stroke:'#000000',
        strokeOpacity:'10%',
        strockeWidth:'20%',
        height:'100%'
      }}/>
      <Legend />
    
      <ReferenceArea x1={50}  stroke="red" strokeOpacity={0.9} />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#ffffff"
        opacity="50%"
        // activeDot={{ r: 8 }}
        dot={false}
        legendType="none"
      />
    </LineChart>
    </ResponsiveContainer>
  );
}

export default LineCharts