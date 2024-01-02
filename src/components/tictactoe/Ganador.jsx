import { Casilla } from "./Casilla.jsx";

export function Ganador({ ganador, Resetear }) {
  if (ganador === null) return null;

  const ganadorText = ganador === false ? "Draw" : "Winner:";

  return (
    <section className="winner">
      <div className="text">
        <h2>{ganadorText}</h2>

        <header className="win">
          {ganador && <Casilla>{ganador}</Casilla>}
        </header>

        <footer>
          <button onClick={Resetear}>New match</button>
        </footer>
      </div>
    </section>
  );
}
