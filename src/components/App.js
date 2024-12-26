
import React from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {/* Do not remove the main div */}
       <h5>Enter your name:</h5>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter your name" 
      />
      {name && <h6>Hello, {name}!</h6>}    
    </div>
  );
}

export default App
