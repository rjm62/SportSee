export const getUserFetchData = async() => {
    try {
      const userId = localStorage.getItem("userId")
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      const data = await response.json();
  
      // Récupérer les données 'data' si elles existent
      if (data && data.data) {
        const tableauDeDonnees = [data.data];
        return tableauDeDonnees
      }
    }
    
    catch (error) {
      return "error"
    }
  }


  export const getActivityFetchData = async() => {
    try {
      const userId = localStorage.getItem("userId")
      const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
      const data = await response.json();
  
      if (data && data.data) {
        const tableauDeDonnees = [data.data];
        return tableauDeDonnees
      }
    }

     catch (error) {
      return "error"
    }
  }

  export const getAverageSessionsFetchData = async() => {
    try {
      const userId = localStorage.getItem("userId")
      const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
      const data = await response.json();
  
      if (data && data.data) {
        const tableauDeDonnees = [data.data];
        return tableauDeDonnees
      }
    } 
    
    catch (error) {
      return "error"
    }
  }

  export const getPerformanceFetchData = async() => {
    try {
      const userId = localStorage.getItem("userId")

      const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
      const data = await response.json();
  
      if (data && data.data) {
        const tableauDeDonnees = [data.data];
        return tableauDeDonnees
      }
    } 

    catch (error) {
      return "error"
    }
  }

  
    

   getUserFetchData()
   getActivityFetchData()
   getAverageSessionsFetchData()
   getPerformanceFetchData()
   