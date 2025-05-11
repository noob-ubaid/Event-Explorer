import React from "react";

const Question = ({ ask }) => {
  return (
    // <div>
    //   <input type="radio" name="my-accordion-3" />
    //   <div className="collapse-title font-semibold">{question.question}</div>
    //   <div className="collapse-content text-sm">{question.answer}</div>
    // </div>
    <div className="collapse collapse-plus bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title text-black font-semibold">
        {ask.question}
      </div>
      <div className="collapse-content text-black text-sm">
        {ask.answer}
      </div>
    </div>
  );
};

export default Question;
