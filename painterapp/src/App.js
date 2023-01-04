import './App.css';
import ScrollBar from './ScrollBar';
import Canvas from './Canvas';
import Header from './Header';
import CategoryButton from "./CategoryButton"
import { useState } from 'react';

function App() {

  const [paintings, setPaintings] = useState([])
  const [paintingIsClicked, setPaintingIsClicked] = useState(null)

  return (
    <div className="App">
      <div id = 'heading'>
        <Header />
      </div>
        <CategoryButton/>
        {/* <ScrollBar paintins={paintings} setPaintingIsClicked={setPaintingIsClicked}/> */}
        
        {paintingIsClicked ? (
          <Canvas />
        ):(
          null
        )}
        
    </div>
  );
}

export default App;
