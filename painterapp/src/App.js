import './App.css';
import Header from './Header';
import CanvasPage from './CanvasPage';
import Home from './Home';
import Form from './Form'
import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const [paintings, setPaintings] = useState([])
  const [category, setCategory] = useState("painting")

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home category={category} setCategory={setCategory} paintings={paintings}/>,
    },
    {
      path:"/canvas/:id",
      element: <CanvasPage />
    },
    {
      path:"/*",
      element: <h1>404 not found!</h1>
    },
    {
      path:"/postgallery",
      element: <Form/>,
    }
  ]);

  useEffect(()=>{
    fetch("http://localhost:3000/paintings")
    .then(res =>res.json())
    .then(response=>setPaintings(response))
  },[])

  return (
    <div className="App">
      <div id = 'heading'>
        <Header />
      </div>
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
