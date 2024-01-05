    export const getUserFetchData = async() => {
    try {
      const userId = localStorage.getItem("userId")
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      const data = await response.json();
  
      // Récupérer les données 'data' si elles existent
      if (data && data.data) {
        const tableauDeDonnees = [data.data];
        return tableauDeDonnees
  
      } else {
        console.error("'data' est manquant dans la réponse de l'API");
        // const kiki= ["error"]
        // return kiki
      }
    } catch (error) {
      console.error('problème de connexion pour récupérer les données', error);
      // alert("l'API ne réponds pas veuillez revenir en données mockés")
      // const koko =["error"]
      // return koko
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
      const userId = localStorage.getItem("userId")
      const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
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
      const userId = localStorage.getItem("userId")

      const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
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
   