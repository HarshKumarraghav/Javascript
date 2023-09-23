import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Pagination from "./pages/Pagination";
import Star from "./pages/Star";
import TicTacToe from "./pages/TicTacToe";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/star" element={<Star />} />
      <Route path="/tictactoe" element={<TicTacToe />} />
      <Route path="/pagination" element={<Pagination />} />
    </Routes>
  );
}

export default App;
