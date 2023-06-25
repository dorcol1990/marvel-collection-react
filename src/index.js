import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Spiderman from './pages/Spiderman';
import Ironman from './pages/Ironman';
import CaptainAmerica from './pages/CaptainAmerica';
import Hulk from './pages/Hulk';
import Thor from './pages/Thor';

const router = createBrowserRouter([
  { path: "/",
    element: <App />,
    elementError: <div>Error 404 page</div>,
    children: [
      {path: "/spiderman",
      element: <Spiderman />},
      {path: "/ironman",
      element: <Ironman />},
      {path: "/captainamerica",
      element: <CaptainAmerica />},
      {path: "/hulk",
      element: <Hulk />},
      {path: "/thor",
      element: <Thor />}
    ]}
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

