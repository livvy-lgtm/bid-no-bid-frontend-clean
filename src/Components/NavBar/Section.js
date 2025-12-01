import React, {useEffect, useState} from "react";

import sectionsInfo from "../../section.json";
import {getAnswerMaxScore} from "../../helpers/getAnswerMaxScore";
import {getAnswerPercentScore} from "../../helpers/getAnswerPercentScore";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
    answers,
    section,
    sectionIndex,
}) => {
 
    const [sectionScores, setSectionScore] = useState(0);
    const answerPercentScore = getAnswerPercentScore(sectionScores, section.questions);

    useEffect(() => {
        let sectionScore = 0;
        answers[sectionIndex].forEach((answerIndex, questionIndex) => {
            if (answerIndex || answerIndex === 0) {
                sectionScore = sectionScore + sectionsInfo[sectionIndex].questions[questionIndex].answerOptions[answerIndex].score
            }
        })
        setSectionScore(sectionScore);
    }, [answers, answers[sectionIndex]])

    return (
        <div className={answerPercentScore < 2 || sectionScores < 5 ? "nav-section-active white"
            : (answerPercentScore >= 5 && answerPercentScore < 60) || (sectionScores >= 5 && sectionScores <= 60) ? "nav-section-active red"
            : answerPercentScore >= 60 && answerPercentScore < 100 ? "nav-section-active orange"
            : "nav-section-active green"
        }>
            <div className="navbar-section-title">
                <div className="section-number">
                    section {section.section}
                </div>
                {section.title}
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
            </div>
        </div>
    )
}