import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./style.css";

const QrCode = () => {
  const [input, setInput] = useState("");
  const qrRef = useRef();

  const downloadQRCode = (e) => {
    e.preventDefault();
    const canvas = qrRef.current.querySelector("canvas");
    if (!canvas) return; 

    const image = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = "qr-code.png";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setInput("");
  };

  const handleUrlChange = (e) => setInput(e.target.value);

  // No need for qrCodeEncoder function

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={input}
      size={300}
      level="H"
      ref={qrRef}
    />
  );

  return (
    <div>
      <div className="App">
        <div className="container-header">
          <div ref={qrRef}>{qrcode}</div>
          <h1>QR CODE GENERATE</h1>
        </div>

        <div className="container-input">
          <form onSubmit={downloadQRCode}>
            <input
              placeholder="Enter URL"
              type="text"
              value={input}
              onChange={handleUrlChange}
            />
            <button type="submit" disabled={!input}>
              Download QR code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
