import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "./pages/books/Books";
import Add from "./pages/add/Add";
import Update from "./pages/update/Update";
import "./app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "update",
    element: <Update />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
