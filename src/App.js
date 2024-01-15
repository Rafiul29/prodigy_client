import { RouterProvider } from "react-router-dom";
import {router} from "../src/Routes/routes"
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  const authChecked=useAuthCheck();
  return !authChecked? (<div> Checking authentication ......</div>):(<RouterProvider router={router}></RouterProvider>)
}

export default App;
