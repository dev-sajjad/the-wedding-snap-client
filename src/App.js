import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route/Route';

function App() {
  return (
    <div className='max-w-md md:max-w-screen-md lg:max-w-screen-xl mx-auto' >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
