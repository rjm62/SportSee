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
  } from "recharts";
import '../../style/LineCharts.css'

const CustomTooltip = ({ active, payload }) => {
  if (active) {

    return (
      <div className="tooltipContainer3">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

function LineCharts(user) {
  let daysFirstLetter =["L", "M", "M", "J", "V", "S", "D"]

  let newUserSessions = []

  user.user.sessions.forEach((element, index) => {
    const newObject = {
      day: daysFirstLetter[index],
      durée: element.sessionLength
      }
      newUserSessions.push(newObject)
    })

    return (
      <ResponsiveContainer className="containerSize"> 
      <div className="notation">
        <p> Durée moyenne des sessions</p>
      </div>
      <LineChart className="two" 
        data={newUserSessions}
      >

      <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} height={80}                       />
      <XAxis className=" letterSize" dataKey="day" 
      tickMargin={10}
      axisLine={false}
      tickLine={false}
      tick={{fill:"#ffffff", fillOpacity:"50%"}}
       />
      <YAxis hide={true}  domain={["dataMin -20", "dataMax + 50"]} />
      <Tooltip  content={CustomTooltip} wrapperStyle={{ width: 90, height: 20, color:"black"}} cursor={{ 
        stroke:'#000000',
        strokeOpacity:'60%',
        strockeWidth:'60%',
        height:'100%',
      }}/>
      <Legend />
      <ReferenceArea className= "essai" x1={6} x2={4}  y1={-60}  y2={150} stroke="red" strokeOpacity={0.1}  ifOverflow="visible" />
      <Line className="essai" 
        type="natural"
        dataKey="durée"
        stroke="white"
        opacity="50%"
        dot={false}
        legendType="none"
      />
    </LineChart>
    </ResponsiveContainer>
  );
}

export default LineCharts