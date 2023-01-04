const Paintings = ({painting, setPaintingIsClicked})=>{
    
    const handleClick =()=>{
        setPaintingIsClicked({painting})
    }
    
    return (
        <div onClick={handleClick}>
            <img src={null} alt={null}></img>
            <h2>test</h2>
            <p></p>
        </div>
    )
}
export default Paintings