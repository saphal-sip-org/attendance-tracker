import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Sidebar from "./components/navbar/Sidebar";

import Login from "./routes/pages/Login";
import Home from "./routes/pages/Home";
import Register from "./routes/pages/Register";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element : <Login />

    },
    {
      path: "/register",
      element: <Register />
    }
  ])
  
  return (
    <RouterProvider router={router}>
      <div className="app">
        <Sidebar />
        
      </div>

    </RouterProvider>
  )
}

export default App;