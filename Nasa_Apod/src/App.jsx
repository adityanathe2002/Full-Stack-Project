import React from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

import { RouterProvider } from 'react-router-dom';
import { nasaRouter } from './Component/Routers/RouterPage';
import Nasa from './Component/Nasa';

const App = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div>
      <RouterProvider router={nasaRouter}>
        <Nasa></Nasa>
      </RouterProvider>
    </div>
  )
}

export default App