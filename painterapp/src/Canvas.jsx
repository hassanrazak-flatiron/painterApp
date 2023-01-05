
const Canvas = ({painting}) =>{

    return (
        <div id = "canvas">
            <img id="paintingCanvas" src={painting.imageURL} alt={painting.title}></img>
            <div id = "paintingInfo">
                <h1 id="paintingTitleInfo" >{painting.title}</h1>
                <h4>{painting.Artist}</h4>
                <p id="paintingDesInfo" >{painting.Description}</p>
                <p>{painting.Date}</p>
            </div>
        </div>
        
    )
}

export default Canvas