import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import './style.css'

function QrcodeGenerate() {
  const [input, setInput] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={input}
      size={300}
      level={"H"}
    />
  )

  return (
    <div>
        <div className="App">
        <div className='container-header'>
                 <div>{qrcode}</div>
                <h1>QR CODE GENERATE</h1>
            </div>

            <div className='container-input'>
                <form onSubmit={handleSubmit}> 
                <input 
                    placeholder='Enter URL'
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                
                <button type="submit" disabled={!input}>
                  Download QR code
                </button>
                </form>

            </div>
            </div>

        </div>
      
  );
}

export default QrcodeGenerate;
