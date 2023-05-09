import React, { useState } from "react";

const AnsDisplay = ({ questions }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <section>
        <div className={isShow ? "true" : "false"}>
          <h3>{questions.question}</h3>
          <button onClick={() => setIsShow(!isShow)}>
            {isShow ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
        {isShow && <p>{questions.answer}</p>}
      </section>
    </>
  );
};

export default AnsDisplay;
