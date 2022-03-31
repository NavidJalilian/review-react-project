import React, { useState } from "react";
import Review from "./Review";

import {} from "react-icons/fa";
import people from "./data";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review></Review>
        {/* a function that adds two numbers */}
      </section>
    </main>
  );
}

export default App;
