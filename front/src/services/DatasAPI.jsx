import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

const userId = "18"
const userURL =`http://localhost:3000/user/${userId}`
const activityURL = `http://localhost:3000/user/${userId}/activity` 
const averageSessionsURL =`http://localhost:3000/user/${userId}/average-sessions`
const performanceURL = `http://localhost:3000/user/${userId}/performance`

  export const getUserFetchData = async() => {
    try {
      const response = await fetch(userURL);
      const data = await response.json();
  
      // Récupérer les données 'data' si elles existent
      if (data && data.data) {
        const tableauDeDonnees = [data.data];
        return tableauDeDonnees
  
      } else {
        console.error("'data' est manquant dans la réponse de l'API");
        const kiki= ["error"]
        return kiki
      }
    } catch (error) {
      console.error('problème de connexion pour récupérer les données', error);
      const koko =["error"]
      return koko
    }
  }


  export const getActivityFetchData = async() => {
    try {
      const response = await fetch(activityURL);
      const data = await response.json();
  
      if (data && data.data) {
        const tableauDeDonnees = [data.data];
        return tableauDeDonnees
  
      } else {
        console.error("'data' est manquant dans la réponse de l'API");
        const kiki= ["error"]
        return kiki
      }
    } catch (error) {
      console.error('problème de connexion pour récupérer les données', error);
      const koko =["error"]
      return koko
    }
  }

  export const getAverageSessionsFetchData = async() => {
    try {
      const response = await fetch(averageSessionsURL);
      const data = await response.json();
  
      if (data && data.data) {
        const tableauDeDonnees = [data.data];
        return tableauDeDonnees
  
      } else {
        console.error("'data' est manquant dans la réponse de l'API");
        const kiki= ["error"]
        return kiki
      }
    } catch (error) {
      console.error('problème de connexion pour récupérer les données', error);
      const koko =["error"]
      return koko
    }
  }

  export const getPerformanceFetchData = async() => {
    try {
      const response = await fetch(performanceURL);
      const data = await response.json();
  
      if (data && data.data) {
        const tableauDeDonnees = [data.data];
        return tableauDeDonnees
  
      } else {
        console.error("'data' est manquant dans la réponse de l'API");
        const kiki= ["error"]
        return kiki
      }
    } catch (error) {
      console.error('problème de connexion pour récupérer les données', error);
      const koko =["error"]
      return koko
    }
  }
  

   getUserFetchData()
   getActivityFetchData()
   getAverageSessionsFetchData()
   getPerformanceFetchData()
   