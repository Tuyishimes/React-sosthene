import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Admissions from './Pages/Admissions';
import Boarding from './Pages/Boarding';
import Facilities from './Pages/Facilities';
import Learners from './Pages/Learners';
import NewsAndEvents from './Pages/NewsAndEvents';
import ContactUs from './Pages/ContactUs';

const rout =createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {path:"/",
      element:<Home/>},
       {
path:"/about",
element:<About/>
        },
        {path:"/education",
      element:<Education/>},
       {
path:"/admission",
element:<Admissions/>
        },
        {path:"/boarding",
      element:<Boarding/>},
       {
path:"/facilities",
element:<Facilities/>
        },
        {path:"/learners",
        element:<Learners/>},
         {
  path:"/NewsEvents",
  element:<NewsAndEvents/>
          },
          {path:"/contactUs",
        element:<ContactUs/>},
         
      

    ]
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rout} />
  </React.StrictMode>
);



