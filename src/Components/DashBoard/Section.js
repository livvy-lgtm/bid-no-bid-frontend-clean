import React from "react";

import { Question } from "./Question";
import Header from "../Header/Header";
import sectionsInfo from "../../section.json";

const Section = ({
  currentSectorIndex,
  setCurrentSectorIndex,
  handleAnswer,
  sections,
  answers,
  setFormVisible,
}) => {
  const changeSectorNext = () => {
    if (currentSectorIndex < sections.length - 1)
      setCurrentSectorIndex(currentSectorIndex + 1);
      document.querySelector('.sections-info').scrollTo(0,0)
  };
  const changeSectorBack = () => {
    if (currentSectorIndex <= sections.length - 1 && currentSectorIndex > 0)
      setCurrentSectorIndex(currentSectorIndex - 1);
      document.querySelector('.sections-info').scrollTo(0,0)
  };
  
  const handleFormVisible = () => {
    setFormVisible(true);
  };

  return (
    <>
      <div className="sections-info">
        <Header
          sections={sectionsInfo}
          currentSectorIndex={currentSectorIndex}
        />
        {sections[currentSectorIndex].questions.map((question, i) => (
          <Question
            key={"section" + i}
            question={question}
            questionIndex={i}
            sectionIndex={currentSectorIndex}
            handleAnswer={handleAnswer}
            answers={answers}
          />
        ))}
        <div className="next-btn">
          <button
            onClick={changeSectorBack}
            className="change-sector-back-button"
          >
            Back
          </button>
          {!(currentSectorIndex === sections.length - 1) ? (
            <button onClick={changeSectorNext} className="change-sector-button">
              Next
            </button>
          ) : (
            <button onClick={handleFormVisible} className="end-page-button">
              Finish
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Section;
