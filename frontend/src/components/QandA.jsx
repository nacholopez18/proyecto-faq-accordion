import { React, useState } from "react";

function QandA(props) {
  const [response, setResponse] = useState(false);

  function handleButton() {
    setResponse(!response);
    console.log(response);
  }
  return (
    <>
      <div>
        <div className="question">
          <h4>{props.question}</h4>
          <button onClick={handleButton}>
            <img src={response ? "./icon-minus.svg" : "./icon-plus.svg"} />
          </button>
        </div>
        <p>{response ? props.answer : null}</p>
      </div>
    </>
  );
}

export default QandA;
