import { Route, Routes } from "react-router-dom";
import TicTacToe from "./Pages/TicTacToe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TicTacToe />} />
      </Routes>
    </>
  );
}

export default App;
