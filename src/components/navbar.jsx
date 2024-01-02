import "/src/index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
      <div className="sidebar">
        <ul>
          <li>
            <Link id="botontodo" to="/tictac">
              <img className="iconos" src="/tictac.svg" />
              Tic Tac Toe
            </Link>
          </li>
          <li>
            <Link id="botontodo" to="/pokemon">
              {" "}
              <img className="iconos " src="pokemo.svg" alt="" />
              Pokemon
            </Link>
          </li>
          <li>
            <Link id="botontodo" to="/todolist">
              <img className="iconos" src="todo.svg" alt="" />
              Todo list
            </Link>
          </li>
          <li>
            <Link id="botontodo" to="/calculator">
              {" "}
              <img className="iconos " src="calcu.svg" alt="" />
              Calculator
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
