
import './App.css';
import HomePage from './routes/HomePage/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from './routes/ListPage/ListPage';
import Layout from './routes/Layout/Layout';
import SinglePage from './routes/SinglePage/SinglePage';
import Profile from './routes/Profile/Profile';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Layout />,
        children:[
          {
          path:"/",
          element:<HomePage />
        },
          {
            path:"list",
          element:<ListPage />
        },
        {
          path:"singlepage",
        element:<SinglePage />
      },
      {
        path:"profile",
      element:<Profile />
    }
      ]
    }

  ]);


  return (

    <RouterProvider router={router}/>
  );
}

export default App;
