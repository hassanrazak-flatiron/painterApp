import Paintings from "./Paintings"

const ScrollBar = ({paintings, category}) =>{
    
    const filteredList = paintings.filter(item =>{
        return item.category === category.toLowerCase()
    })
    
    return(
        <div id="color-bar">
            {filteredList.map(painting =>{
                return <Paintings key={painting.id} painting={painting}/>
            })}
        </div>
    )
}

export default ScrollBar