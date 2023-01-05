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
            <div id = 'heading'>
                <Header />
            </div>
            <Canvas id={id} painting={painting}/>
        </div>
    )
}

export default CanvasPage