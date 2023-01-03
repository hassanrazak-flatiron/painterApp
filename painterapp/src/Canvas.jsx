import './App.css'
import {useState,useEffect} from 'react'

const Canvas = () =>{

    const [metArray,setMetArray] = useState([])
    const fetchMet = async () =>{
        let req  = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
        let res = await req.json()
        setMetArray(res)
    }

    useEffect(()=>{
        fetchMet()

    },[])

    return (
        <div id = "canvas">
          
            

        </div>
        
    )
}

export default Canvas