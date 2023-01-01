import './App.css';
import ColorBar from './ColorBar';
import Canvas from './Canvas';
import Header from './Header';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <div id = 'heading'>
      <Header />
      <Form />
      </div>
      <ColorBar />
      <Canvas />
      
    </div>
  );
}

export default App;
