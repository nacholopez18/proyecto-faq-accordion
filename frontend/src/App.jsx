import { useState } from "react";
import "./App.css";
import QandA from "./components/QandA";

function App() {
  return (
    <>
      <main className="mainContainer">
        <div className="">
          <div className="background">
            <img src="./icon-star.svg" alt="" />
            <h1>FAQs</h1>
          </div>
          <div className="qAndAContainer">
            <QandA
              question="What is Frontend Mentor, and how will it help me?"
              answer={
                "Frontend Mentor offers realistic coding challenge yo help developers improve their frontend coding skills with projects in HTML, CSS and Javascript. It's suitable for all levels and ideal for portfolio building."
              }
            />
          </div>
          <div className="qAndAContainer">
            <QandA
              question="Is Frontend Mentor free?"
              answer={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quos dicta quam blanditiis modi, veniam temporibus beatae soluta illo ratione quae sapiente deserunt, exercitationem nulla est. Eveniet beatae vitae ipsum."
              }
            />
          </div>
          <div className="qAndAContainer">
            <QandA
              question="Can I use Frontend Mentor in my portfolio?"
              answer={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quos dicta quam blanditiis modi, veniam temporibus beatae soluta illo ratione quae sapiente deserunt, exercitationem nulla est. Eveniet beatae vitae ipsum."
              }
            />
          </div>
          <div className="qAndAContainer">
            <QandA
              question="How can I get help if I'm stuck on a challenge?"
              answer={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quos dicta quam blanditiis modi, veniam temporibus beatae soluta illo ratione quae sapiente deserunt, exercitationem nulla est. Eveniet beatae vitae ipsum."
              }
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
