import Canvas from './Canvas';
import {useParams} from 'react-router-dom';
import Header from './Header';

const CanvasPage=({paintings})=>{
    
    //grab the custon id given by Painting.jsx to select which painting was given
    let {id} = useParams()

    //select the painting from useState and id taken from Paintings.jsx
    const painting = paintings[id-1]
    
    return(
        <div>
            <div>
                <Header />
            </div>
            <Canvas id={id} painting={painting}/>
            <div id = "paintingInfo">

                <div id = 'painting-header'>
                    <h2 className="painting-header" >{painting.title}</h2>
                    <h4 className="painting-header">{painting.Date}</h4>
                    <h4 className="painting-header">{painting.Artist}</h4><br></br>
                </div>

                <p id="paintingDesInfo" >{painting.Description}</p>
            </div>
        </div>
    )
}

export default CanvasPage