
const Canvas = ({painting}) =>{

    return (
        <div id = "canvas">
            <img id="paintingCanvas" src={painting.imageURL} alt={painting.title}></img>
            
        </div>
        
    )
}

export default Canvas