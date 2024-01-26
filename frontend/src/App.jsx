import { useState } from "react";
import "./App.css";
import QandA from "./components/QandA";

function App() {
  const [answer, setAnswer] = useState(false);
  return (
    <>
      <header>
        <div>
          <img src="./icon-star.svg" alt="" />
          <h1>FAQs</h1>
        </div>
      </header>
      <main>
        <QandA
          question="What is Frontend Mentor, and how will it help me?"
          minus="./icon-minus.svg"
          plus="./icon-plus.svg"
          answer="Frontend Mentor offers realistic coding challenge yo help developers
          improve their frontend coding skills with projects in HTML, CSS and
          Javascript. It's suitable for all levels and ideal for portfolio
          building."
        />
      </main>
    </>
  );
}

export default App;
