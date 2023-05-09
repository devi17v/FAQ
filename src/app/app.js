import React from "react";
import AnsDisplay from "./answer";
import "./app.css";

const App = () => {
  const faqArr = [
    {
      qno: 1,
      question: "Is this a good product?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      qno: 2,
      question: "How much does it cost?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      qno: 3,
      question: "When can I get it?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
  ];

  return (
    <div className="body-wrapper">
      <h1>Users FAQ</h1>
      <div className="content-wrapper">
        <h2>Frequently asked questions</h2>
        {faqArr.map((data) => (
          <AnsDisplay key={data.qno} questions={data} />
        ))}
      </div>
    </div>
  );
};

export default App;
