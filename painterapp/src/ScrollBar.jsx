import Paintings from "./Paintings"

const ScrollBar = ({setPaintings, paintings, category}) =>{
    
    //filter paintings array with matching category
    const filteredList = paintings.filter(item =>{
        return item.category.toLowerCase() === category.toLowerCase()
    })
    
    return(
        <div id="scroll-bar">
            {filteredList.map(painting =>{
                return <Paintings key={painting.id} paintings={paintings} setPaintings={setPaintings} painting={painting}/>
            })}
        </div>
    )
}

export default ScrollBar