import TicTac from "/src/components/tictactoe/Tictac";
import Calcu from "./components/Calculadora";
import Todo from "./components/todo";
import Navbar from "./components/navbar";
import PokemonViewer from "./components/pokemon";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tictac" element={<TicTac />} />
        <Route path="/pokemon" element={<PokemonViewer />} />
        <Route path="/todolist" element={<Todo />} />
        <Route path="/calculator" element={<Calcu />} />
      </Routes>
    </>
  );
}

export default App;
