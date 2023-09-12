import { useState } from 'react'
import tShirt from './assets/tshirt.png'

import './App.css'

function App() {
  const [textContent, setTextContent] = useState('');

  const handleChange =(event)=>{
    setTextContent(event.target.value);
  }
  
  return (
    <>
    <div className="container">
        <img id="tShirt" src={tShirt} alt="the t shirt"/>
        <div className="displayBox">
          <h1>{textContent}</h1>
        </div>
      </div>
      <footer>
        <label htmlFor="shirtText">Add some text. Yes, it can be an emoji.</label>
        <input 
          type="text" 
          id="shirtText"
          onChange={handleChange}
          value={textContent}
          maxLength={15} 
          />
      </footer>
    </>
  )
}

export default App
