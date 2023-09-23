import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
