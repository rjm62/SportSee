import {useState, useEffect} from 'react'
import axios from 'axios'

function usersData() {
    const [useerData, setUserData] = useState([])

    useEffect(()=> {
        const axiosData = async() => {
            const response = await axios('http://localhost:3000/')
            if(response.status !=200) {
                console.log("pas de réponse")
            }
            else {
                const data = response.data
                console.log(data)
            }
        }
    })
}

export default usersData