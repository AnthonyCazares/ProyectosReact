import { useState } from "react";
import "/src/index.css";

export default function Calcu() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div id="calculadora" className="titucalcu">
      <h1 className="titulocalc">Basic calculator</h1>
      <div className="calcu">
        <div className="calculator">
          <input className="inputcalc" type="text" value={input} readOnly />
          <div className="buttons">
            <button className="botones" onClick={() => handleButtonClick("1")}>
              1
            </button>
            <button className="botones" onClick={() => handleButtonClick("2")}>
              2
            </button>
            <button className="botones" onClick={() => handleButtonClick("3")}>
              3
            </button>
            <button
              className="funciones"
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
            <button className="botones" onClick={() => handleButtonClick("4")}>
              4
            </button>
            <button className="botones" onClick={() => handleButtonClick("5")}>
              5
            </button>
            <button className="botones" onClick={() => handleButtonClick("6")}>
              6
            </button>
            <button
              className="funciones"
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>
            <button className="botones" onClick={() => handleButtonClick("7")}>
              7
            </button>
            <button className="botones" onClick={() => handleButtonClick("8")}>
              8
            </button>
            <button className="botones" onClick={() => handleButtonClick("9")}>
              9
            </button>
            <button
              className="funciones"
              onClick={() => handleButtonClick("*")}
            >
              *
            </button>
            <button className="grises" onClick={() => handleButtonClick("0")}>
              0
            </button>
            <button className="grises" onClick={handleCalculate}>
              =
            </button>
            <button className="grises" onClick={handleClear}>
              C
            </button>
            <button
              className="funciones"
              onClick={() => handleButtonClick("/")}
            >
              /
            </button>
          </div>
          <div className="result">{result}</div>
        </div>
      </div>
    </div>
  );
}
