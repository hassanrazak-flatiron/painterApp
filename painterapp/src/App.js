import './App.css';
import CanvasPage from './CanvasPage';
import Home from './Home';
import Form from './Form'
import Video from './Video';
import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  //useStates for json array and base category
  const [paintings, setPaintings] = useState([])
  const [category, setCategory] = useState("Paintings")

  //routes for the router(contains home, canvasPage and Form)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setPaintings={setPaintings} category={category} setCategory={setCategory} paintings={paintings}/>,
    },
    {
      path:"/canvas/:id",
      element: <CanvasPage paintings={paintings}/>
    },
    {
      path:"/*",
      element: <h1>404 not found!</h1>
    },
    {
      path:"/postgallery",
      element: <Form paintings={paintings} setPaintings={setPaintings}/>,
    }
  ]);

  //useEffect to convert json into array for paintings useState
  useEffect(()=>{
    fetch("http://localhost:3000/museum")
    .then(res =>res.json())
    .then(response=>setPaintings(response))
  },[])

  return (
    <div className="App">
      <Video />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
