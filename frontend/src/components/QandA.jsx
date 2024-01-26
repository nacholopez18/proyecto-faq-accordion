import { React } from "react";

function QandA(props) {
  return (
    <>
      <div>
        <div>
          <h4>{props.question}</h4>
          <button
            onClick={props.handleButton}
            //   disabled={props.noShow}
          >
            <img src={props.btnImg} />
          </button>
        </div>
        <p>{props.answer}</p>
      </div>
    </>
  );
}

export default QandA;
