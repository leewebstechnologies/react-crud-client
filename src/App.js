import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Layout from "./pages/layout/Layout";
import Books from "./pages/books/Books";
import Add from "./pages/add/Add";
import Update from "./pages/update/Update";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Books />} />
            <Route path="add" element={<Add />} />
            <Route path="update/:id" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
