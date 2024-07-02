import AddTask from "./components/AddTask";
import ToDoScreen from "./screens/ToDoScreen";
import {createBrowserRouter , RouterProvider, Routerprovider} from "react-router-dom";
const router=createBrowserRouter([
  {
    path:"/",
    element:<ToDoScreen/>
  },
  {
    path:"/add-task",
    element:<AddTask/>,

  },
])
const App = () =>{
  return <RouterProvider router={router} />;
}

export default App;