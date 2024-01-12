import React from "react";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  Label,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
import '../../style/RadarCharts.css'

function RadarCharts(user) {

let performancesData= user.user.data
let kind = user.user.kind ;

var englandKindArray = Object.values(kind)   // récupération du tableau des activités en anglais

let translateText = [{englishText: "energy" , frenchText: "Energie" }, // tableau traduction francais-anglais
                     {englishText: "speed", frenchText: "Vitesse"},
                     {englishText: "strength", frenchText: "Force"},
                     {englishText: "intensity", frenchText: "Intensité"},
                     {englishText: "cardio", frenchText: "Cardio"} ,
                     {englishText: "endurance", frenchText: "Endurance"}               
                    ]

let frenchKindArray =[]   // tableau vide des activités en français

// fonction forEach pour parcourir les éléments du tableau et traduire les mots en francais
englandKindArray.forEach((element,index) => {
  // let j=0
  for(let i=0; i<translateText.length; i++) {
    if(element=== translateText[i].englishText) {
      frenchKindArray.push(translateText[i].frenchText)   //remplissage du tableau   
      // j=1
    }
  }  
})

const newDataArray = []  // tableau vide des données performance

performancesData.forEach((element,index) => {
  const newObject ={       // on crée un nouvel objet avec type d'activité valeur et fullMark
    kind: frenchKindArray[index],
    value: element.value,
    fullMark: 150
  }
  newDataArray.push(newObject)    // on insère l'objet dans le tableau
})

const activityInOrder =["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"]
const newDataArrayInOrder=[]

for(let i=0; i<activityInOrder.length; i++) {
  for(let j=0; j<newDataArray.length; j++) {
    if(activityInOrder[i]=== newDataArray[j].kind) {
      newDataArrayInOrder.push(newDataArray[j])
    }
  }
}  

const CustomTooltip = ({ active, payload }) => {
  if (active) {

    return (
      <div className="tooltipContainer2">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

  return (  
    < ResponsiveContainer className="three"  startAngle="-90" endAngle="90">
      <RadarChart 
        cx={92}
        cy={90}
        outerRadius={64}
        width={100}
        height={87}
        data={newDataArrayInOrder}
      >
      <PolarGrid stroke="white" radialLines={false}/>
      <PolarAngleAxis  dataKey="kind" stroke="white"  tickLine={false} tick={{ fill:"white",
        fontSize:"0.5rem" ,
        fontWeight: 500,
        }} 
        />

        <PolarRadiusAxis tick ={false} axisLine={false} tickCount ="6" />
        <Label orientation ="left"/>

        <Tooltip 
        content={CustomTooltip}
        />
          
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#FF0101"
          fill= "#e60000"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer> 
  )
}

export default RadarCharts