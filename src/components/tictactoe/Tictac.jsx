import { useState } from "react";
import "/src/index.css";
import { Casilla } from "./Casilla";
import { TURNS } from "./constants.js";
import { comprobarGanador, comprobarFinal } from "./logic/tabla.js";
import { Ganador } from "./Ganador.jsx";
import { resetPartida, guardarPartida } from "./logic/storage/index.js";

export default function TicTac() {
  const [tabla, setTabla] = useState(() => {
    const tablaFromStorage = window.localStorage.getItem("tabla");
    if (tablaFromStorage) return JSON.parse(tablaFromStorage);
    return Array(9).fill(null);
  });

  const [turno, setTurno] = useState(() => {
    const turnoFromStorage = window.localStorage.getItem("turno");
    return turnoFromStorage ?? TURNS.X;
  });

  // null es que no hay ganador, false es que hay un empate
  const [ganador, setGanador] = useState(null);

  const Resetear = () => {
    setTabla(Array(9).fill(null));
    setTurno(TURNS.X);
    setGanador(null);

    resetPartida();
  };

  const actualizarTabla = (index) => {
    // no actualizamos esta posición
    // si ya tiene algo
    if (tabla[index] || ganador) return;
    // actualizar el tablero
    const nuevaTabla = [...tabla];
    nuevaTabla[index] = turno;
    setTabla(nuevaTabla);
    // cambiar el turnoo
    const nuevoTurno = turno === TURNS.X ? TURNS.O : TURNS.X;
    setTurno(nuevoTurno);
    // guardar aqui partida
    guardarPartida({
      tabla: nuevaTabla,
      turno: nuevoTurno,
    });
    // revisar si hay ganador
    const nuevoGanador = comprobarGanador(nuevaTabla);
    if (nuevoGanador) {
      setGanador(nuevoGanador);
    } else if (comprobarFinal(nuevaTabla)) {
      setGanador(false); // empate
    }
  };

  return (
    <div id="tictactoe" className="centrartabla">
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <button onClick={Resetear}>RESET</button>
        <section className="game">
          {tabla.map((casilla, index) => {
            return (
              <Casilla
                key={index}
                index={index}
                actualizarTabla={actualizarTabla}
              >
                {casilla}
              </Casilla>
            );
          })}
        </section>

        <section className="turn">
          <Casilla seleccionado={turno === TURNS.X}>{TURNS.O}</Casilla>
          <Casilla seleccionado={turno === TURNS.O}>{TURNS.X}</Casilla>
        </section>

        <Ganador Resetear={Resetear} ganador={ganador} />
      </main>
    </div>
  );
}
