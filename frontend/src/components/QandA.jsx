import { React } from "react";

function QandA(props) {
  return (
    <>
      <div>
        <div>
          <h4>{props.question}</h4>
          <button>
            <img src={props.minus} />
            <img src={props.plus} />
          </button>
        </div>
        <p>{props.answer}</p>
      </div>
      ;
    </>
  );
}

export default QandA;
