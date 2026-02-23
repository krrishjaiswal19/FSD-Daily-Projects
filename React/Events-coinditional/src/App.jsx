import { useState } from 'react'
import './App.css'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      <h1>{isLoggedIn ? "Welcome User 👋" : "Please Login"}</h1>

      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;


