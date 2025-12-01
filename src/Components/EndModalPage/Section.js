import React, { useEffect, useState } from "react";

import sectionsInfo from "../../section.json";
import { getAnswerMaxScore } from "../../helpers/getAnswerMaxScore";
import { getAnswerPercentScore } from "../../helpers/getAnswerPercentScore";

// eslint-disable-next-line import/no-anonymous-default-export
export const Section = ({
  answers,
  section,
  sectionIndex,
  setCurrentSectorIndex,
  setEndModalVisible,
}) => {
  const [sectionScores, setSectionScore] = useState(0);
  const answerPercentScore = getAnswerPercentScore(
    sectionScores,
    section.questions
  );

  const hadleEditButton = () => {
    setCurrentSectorIndex(sectionIndex);
    setEndModalVisible(false);
  };

  useEffect(() => {
    let sectionScore = 0;
    answers[sectionIndex].forEach((answerIndex, questionIndex) => {
      if (answerIndex || answerIndex === 0) {
        sectionScore =
          sectionScore +
          sectionsInfo[sectionIndex].questions[questionIndex].answerOptions[
            answerIndex
          ].score;
      }
    });
    setSectionScore(sectionScore);
  }, [answers, answers[sectionIndex]]);

  return (
    <div className="section-wrapper">
      <div className="navbar-section-title">
        <div className="section-number">section {section.section}</div>
        <div className="section-title">
          {section.title}
          <div className="section-status">
            {answerPercentScore >= 60 && answerPercentScore < 100 ? (
              <div className="status-end-modal pay-attention-status">
                Pay attention
              </div>
            ) : answerPercentScore >= 100 ? (
              <div className="status-end-modal good-status">Good</div>
            ) : (
              <div className="status-end-modal neutral-status">Neutral</div>
            )}
          </div>
        </div>
      </div>
      <div className="section-description">
        {sectionsInfo[sectionIndex].description}
      </div>
      <div className="section-scores-data">
        <div className="score-value">
          <div>{getAnswerMaxScore(section.questions)}</div>
          <div className="score-title">max score</div>
        </div>
        <div className="score-value">
          <div>{sectionScores}</div>
          <div className="score-title">your score</div>
        </div>
        <div className="score-value">
          <div>{answerPercentScore}%</div>
          <div className="score-title">of max score</div>
        </div>
        <button onClick={hadleEditButton}>Edit</button>
      </div>
    </div>
  );
};
