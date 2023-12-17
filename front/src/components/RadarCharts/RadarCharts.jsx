import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import '../../style/RadarCharts.css'

function RadarCharts(user) {

let performancesData= user.user.data
let kind = user.user.kind ;

var englandKindArray = Object.values(kind)   // récupération du tableau des activités en anglais

let translateText = [{englishText: "energy" , frenchText: "energie" }, // tableau traduction francais-anglais
                     {englishText: "speed", frenchText: "vitesse"},
                     {englishText: "strength", frenchText: "force"},
                     {englishText: "intensity", frenchText: "intensité"}                 
                    ]

let frenchKindArray =[]   // tableau vide des activités en français

// fonction forEach pour parcourir les éléments du tableaub et traduire les mots en francais
englandKindArray.forEach((element,index) => {
  let j=0
  for(let i=0; i<translateText.length; i++) {
    if(element=== translateText[i].englishText) {
      frenchKindArray.push(translateText[i].frenchText)   //remplissage du tableau   
      j=1
    }
    else if ( i==translateText.length-1 && j==0){  
      frenchKindArray.push(element)    // si aucune traduction n'a été trouvée,  mot identique en francais on l'intègre dans le tableau
    }
  }  
})

let newDataArray = []  // tableau vide des données performance

performancesData.forEach((element,index) => {
  const newObject ={       // on crée un nouvel objet avec type d'activité valeur et fullMark
    kind: frenchKindArray[index],
    value: element.value,
    fullMark: 150
  }
  newDataArray.push(newObject)    // on intère objet dans le tableau
})

  return (  
    <RadarChart className="three"
      cx={242}
      cy={100}
      outerRadius={150}
      width={500}
      height={200}
      data={newDataArray}
    >
    <PolarGrid stroke="white" />
    <PolarAngleAxis  dataKey="kind" stroke="white"  tick={{ fill:"white",
      fontSize:"1.3rem" ,
      fontWeight: 600,
      }} 
      />

      <PolarRadiusAxis tick ={false} axisLine={false} tickCount ="6" />
        
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#FF0101"
        fill= "#e60000"
        fillOpacity={0.7}
      />
    </RadarChart>
  )
}

export default RadarCharts