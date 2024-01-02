export const Casilla = ({ children, seleccionado, actualizarTabla, index }) => {
  const className = `square ${seleccionado ? "is-selected" : ""}`;

  const handleClick = () => {
    actualizarTabla(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
