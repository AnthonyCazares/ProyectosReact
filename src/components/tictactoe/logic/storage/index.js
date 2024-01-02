export const guardarPartida = ({ tabla, turno }) => {
  // guardar aqui partida
  window.localStorage.setItem("tabla", JSON.stringify(tabla));
  window.localStorage.setItem("turno", turno);
};

export const resetPartida = () => {
  window.localStorage.removeItem("tabla");
  window.localStorage.removeItem("turno");
};
