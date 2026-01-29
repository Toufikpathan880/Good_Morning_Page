// import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="icon">🌞</div>
        <h1>Good Morning</h1>
        <p>Please enter your details to get started.</p>

        <input type="text" placeholder="Full Name" />
        <input type="tel" placeholder="Phone Number" />
        <input type="email" placeholder="Email Address" />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
