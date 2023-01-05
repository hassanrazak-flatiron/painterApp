import Canvas from './Canvas';
import {useParams} from 'react-router-dom';
import Header from './Header';

const CanvasPage=({paintings})=>{
    
    //grab the custon id given by Painting.jsx to select which painting was given
    let {id} = useParams()
    
    return(
        <div>
            <div id = 'heading'>
                <Header />
            </div>
            <Canvas id={id} paintings={paintings}/>
        </div>
    )
}

export default CanvasPage