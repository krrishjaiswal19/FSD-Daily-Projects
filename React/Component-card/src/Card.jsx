function Card({ name, role, image }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      width: "200px",
      textAlign: "center",
      borderRadius: "10px",
      margin: "10px"
    }}>
      <img src={image} alt={name} width="100%" />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default Card;
