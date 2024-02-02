import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },{
    path: "/detail/:id",
    element: <Detail />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
