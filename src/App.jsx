import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./components/authentication/Signup";
import { action as authAction } from "./pages/AuthAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
    action: authAction
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
