import React from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

import { RouterProvider } from 'react-router-dom';
import { nasaRouter } from './Component/Routers/RouterPage';
import Nasa from './Component/Nasa';
import { Provider } from 'react-redux';
import { store } from './Component/Redux/store';

const App = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div>
       <Provider store={store}>
      <RouterProvider router={nasaRouter}>
        <Nasa></Nasa>
      </RouterProvider>
      </Provider>
    </div>
  )
}

export default App