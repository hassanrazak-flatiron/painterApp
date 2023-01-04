const Paintings = ({painting})=>{
    
    const handleClick =()=>{
        
    }
    
    return (
        <div onClick={handleClick}>
            <img className="paintingImg" src={painting.imageURL} alt={painting.title}></img>
            <h2>{painting.title}</h2>
            <p></p>
        </div>
    )
}
export default Paintings