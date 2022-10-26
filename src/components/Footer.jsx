export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <img
          className="circular-square"
          src="../src/assets/fotoJavier.jpg"
          alt="Jose Soto"
        />
        <p>
          <span> Desing by: Jose Javier Soto Torres</span>
        </p>
        <p>
          Github:
          <a href="https://github.com/xavierz4/ReacNoteApp" target="_blank">
            NoteApp in Github
          </a>
        </p>
        <p>Copiright © {year}</p>;
      </div>
    </footer>
  );
};
