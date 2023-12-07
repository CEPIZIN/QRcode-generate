import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    
  }

  return (
    <div className="App">
      <div className='container-header'>
        <h1>QR CODE GENERATE</h1>
      </div>
      
      <div className='container-input'>
        <form onSubmit={handleSubmit}> 
          <input 
            placeholder='Coloque seu link'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input className='submit' type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;