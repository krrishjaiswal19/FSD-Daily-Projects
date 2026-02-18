import Card from "./Card";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Card 
        name="Krrish"
        role="Frontend Developer"
        image="https://via.placeholder.com/150"
      />

      <Card 
        name="Rahul"
        role="Backend Developer"
        image="https://via.placeholder.com/150"
      />

      <Card 
        name="Neha"
        role="UI Designer"
        image="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;

