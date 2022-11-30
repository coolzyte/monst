import { useState } from "react";
import { accordionData } from "./data";
import SingleQuestion from "./SingleQuestion";

const Accordion = () => {
  const [questions, setQuestions] = useState(accordionData);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex-1">
        <div className="px-4 mx-auto lg:ml-0">
          <h3 className="mb-8 text-4xl font-bold font-poppins ">Faqs</h3>

          <div>
            {questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
