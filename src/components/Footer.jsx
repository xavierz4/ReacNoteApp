export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        <span> Desing by: Jose Javier Soto Torres</span>
      </p>
      <p>Copiright © {year}</p>;
    </footer>
  );
};
