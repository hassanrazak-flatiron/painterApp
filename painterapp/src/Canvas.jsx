
const Canvas = ({painting}) =>{

    return (
        <div id = "canvas">
            <img src={painting.imageURL} alt={painting.title}></img>
            <h1>{painting.title}</h1>
            <h4>{painting.Artist}</h4>
            <p>{painting.Descrption}</p>
            <p>{painting.Date}</p>
        </div>
        
    )
}

export default Canvas