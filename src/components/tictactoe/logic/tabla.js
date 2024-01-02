import { patron_ganar } from "../constants.js";

export const comprobarGanador = (checarTabla) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u O ganó
  for (const combo of patron_ganar) {
    const [a, b, c] = combo;
    if (
      checarTabla[a] &&
      checarTabla[a] === checarTabla[b] &&
      checarTabla[a] === checarTabla[c]
    ) {
      return checarTabla[a];
    }
  }
  // si no hay ganador
  return null;
};

export const comprobarFinal = (nuevaTabla) => {
  // revisamos si hay un empate
  // si no hay más espacios vacíos
  // en el tablero
  return nuevaTabla.every((casilla) => casilla !== null);
};
