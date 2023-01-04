import Paintings from "./Paintings"

const ScrollBar = ({paintings, setPaintingIsClicked}) =>{
    return(
        <div id="color-bar">
            {paintings.map(painting =>{
                return <Paintings painting={painting} setPaintingIsClicked={setPaintingIsClicked}/>
            })}
        </div>
    )
}

export default ScrollBar