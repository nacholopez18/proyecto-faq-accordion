import { useState } from "react";
import "./App.css";
import QandA from "./components/QandA";

function App() {
  const [response, setResponse] = useState(false);

  function handleButton() {
    setResponse(!response);
    console.log(response);
  }

  return (
    <>
      <header>
        <div>
          <img src="./icon-star.svg" alt="" />
          <h1>FAQs</h1>
        </div>
      </header>
      <main>
        <div>
          <QandA
            question="What is Frontend Mentor, and how will it help me?"
            btnImg={response ? "./icon-minus.svg" : "./icon-plus.svg"}
            handleButton={handleButton}
            answer={
              response
                ? "Frontend Mentor offers realistic coding challenge yo help developers improve their frontend coding skills with projects in HTML, CSS and Javascript. It's suitable for all levels and ideal for portfolio building."
                : null
            }
          />
        </div>
        <div>
          <QandA
            question="Is Frontend Mentor free?"
            btnImg={response ? "./icon-minus.svg" : "./icon-plus.svg"}
            handleButton={handleButton}
            answer={
              response
                ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quos dicta quam blanditiis modi, veniam temporibus beatae soluta illo ratione quae sapiente deserunt, exercitationem nulla est. Eveniet beatae vitae ipsum."
                : null
            }
          />
        </div>

        <div>
          <QandA
            question="Can I use Frontend Mentor in my portfolio?"
            btnImg={response ? "./icon-minus.svg" : "./icon-plus.svg"}
            handleButton={handleButton}
            answer={
              response
                ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quos dicta quam blanditiis modi, veniam temporibus beatae soluta illo ratione quae sapiente deserunt, exercitationem nulla est. Eveniet beatae vitae ipsum."
                : null
            }
          />
        </div>
        <div>
          <QandA
            question="How can I get help if I'm stuck on a challenge?"
            btnImg={response ? "./icon-minus.svg" : "./icon-plus.svg"}
            handleButton={handleButton}
            answer={
              response
                ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quos dicta quam blanditiis modi, veniam temporibus beatae soluta illo ratione quae sapiente deserunt, exercitationem nulla est. Eveniet beatae vitae ipsum."
                : null
            }
          />
        </div>
      </main>
    </>
  );
}

export default App;
