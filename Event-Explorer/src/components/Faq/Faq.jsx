import React, { useEffect, useState } from "react";
import Question from "../Question/Question";

const Faq = () => {
  const [questions, setQuestions] = useState([]);
 useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/Faq.json"); // make sure path is correct
      const data = await res.json();
      setQuestions(data);
    };

    fetchData();
  }, []);
  return (
    <div className="mt-10 px-4 mb-10 md:mb-16 md:px-0">
      <div>
        <h3 className="text-2xl md:text-4xl lg:text-5xl text-center  font-bold tracking-wide bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-500 my-4 font-medium text-center w-full">
          Find quick answers to common questions about using Event Explorer —
          from discovering events to account features and technical support.
        </p>
      </div>
      {/* all questions  */}
      <div className="mt-6">
       {
        questions.map(ask => <Question key={ask.id} ask={ask}></Question>)
       }
      </div>
    </div>
  );
};

export default Faq;
