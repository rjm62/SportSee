import react from 'react'
import { RadialBarChart, RadialBar, Legend} from "recharts";
import '../../style/RadialBarCharts.css'

function RadialBarCharts(user) {
  let score = 230 - 390*(user.user.todayScore) || 230 - 390*(user.user.score)
    const data = [ 
        {
          uv: 8.22,
          fill: "#ff0000"
        }
      ];
      
      const style = {
        top: 0,
        left: 350,
        lineHeight: "24px"
      };
      
    return (
    <RadialBarChart 
        width={490}
        height={270}
        cx={242}
        cy={25}
        innerRadius={150}
        outerRadius={200}
        cornerRadius={50}
        barSize={25}
        data={data}
        endAngle={score}
        startAngle={230} 
        >

        <RadialBar 
            minAngle={15}
            background
            clockWise
            dataKey="uv"
            cornerRadius="40"
        />

        {/* <Legend 
            iconSize={0}
            wrapperStyle={style}
        /> */}
         <text dx={70} dy={-180} width={400} fontSize={30} fill='black' fontWeight={500}>
            Score
      </text>
        </RadialBarChart>
        
    )
}

export default RadialBarCharts