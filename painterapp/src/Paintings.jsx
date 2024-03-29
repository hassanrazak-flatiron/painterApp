import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Paintings = ({painting, setPaintings, paintings})=>{
    
    //give value navigate function
    const navigate = useNavigate()
    
    //navigate router to have /canvas at the end and the painting's id
    const handleClick =()=>{
        navigate(`/canvas/${painting.id}`)
    }

    const [isHover, setIsHover] = useState(false)

    //Print delete button
    function handleHover(){
       
        if(painting.category.toLowerCase() === "personal"){
            setIsHover(true)
        }
    }
    //remove delete button
    function handleHoverLeave(){
            setIsHover(false)
    }

    function deletePainting(){
        if (window.confirm("You are about to DELETE your painting, is this Okay?")) {
            fetch( `http://localhost:3000/museum/${painting.id}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json'
                },  
            })
            .then(res => res.json())
            .then(()=>{ 
                setPaintings(
                    paintings.filter((item)=>{
                        return item.id !== painting.id
                    })
                )
            })
        }

        if(painting.imageURL===null){

        }
    }
    
    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleHoverLeave} className="eachPainting">
            
            <img onClick={handleClick} className="paintingImgSmall" src={painting.imageURL} alt={painting.title}></img>
            <div id='painting-info-small'>

            <h4 className="paintingTitleSmall">{painting.title}</h4>
            <h4 className="paintingDateSmall">{painting.Date}</h4>
            </div>
            {isHover ? (
                <button onClick={deletePainting} className="deleteButton">DELETE</button>
            ):(
                null
            )}
        </div>
    )
}
export default Paintings