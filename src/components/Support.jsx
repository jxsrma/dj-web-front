import React, { useEffect } from "react";
import "../css/support.css";
import QR from "../images/PaymentQR.png";
function Support(props) {
  document.title = "JXSRMA | " + props.title;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="support-main">
      <div className="support-text">
        <h1>💰 Your support means the world to me! 💎🌟</h1>
        <p>
          Creating music and sharing it with the world is our passion, and your
          financial support helps me continue to do what we love. 🎵🚀
        </p>
        <p>
          If you'd like to contribute and help me keep the music alive, you can
          do so by scanning UPI QR code or clicking the UPI ID below it. Every
          contribution, no matter how big or small, goes a long way in
          supporting our journey. 🙏💖
        </p>
        <p>
          Your support allows us to create more music, improve our production,
          and share our art with even more people. Thank you for being a part of
          this incredible musical adventure! 🎶🌈
        </p>
      </div>
      <div className="support-donate">
        <h1>
          Scan with any{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1280px-UPI-Logo-vector.svg.png"
            alt="UPI icon"
          />
        </h1>
        <a href="upi://pay?pa=jxsrma@axl">
          <img src={QR} alt="QRCode" />
        </a>
        <p>
          UPI ID: <a href="upi://pay?pa=jxsrma@axl">jxsrma@axl</a>&nbsp;👈
          <br />
          <span>Click the QR code or above UPI id to initiate payment</span>
        </p>
      </div>
    </div>
  );
}

export default Support;
