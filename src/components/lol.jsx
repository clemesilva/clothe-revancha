function Usuario(props) {
  const { nombre, edad, nacionalidad } = props;
  console.log(props);
  return (
    <div>
      <h1>Nombre: {nombre}</h1>
      <p>edad: {edad}</p>
      <p>Nacionalidad: {nacionalidad}</p>
    </div>
  );
}
export default Usuario;
