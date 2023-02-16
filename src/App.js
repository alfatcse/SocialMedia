import router from './Routes/Routes'
import './App.css';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="max-w-6xl mx-auto">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
