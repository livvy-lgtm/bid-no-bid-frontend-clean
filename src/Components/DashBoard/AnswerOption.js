import React from "react";

export const AnswerOption = ({
    sectionIndex,
    answerIndex,
    questionIndex,
    answerOption,
    handleAnswer,
    answers,
}) => {

    return (
        <button
            className= { answers[sectionIndex][questionIndex] === answerIndex ? "active-answer-button" : "answer-button" }
            onClick={() => handleAnswer(sectionIndex, questionIndex, answerIndex)}
        >
            {answerOption.title}
        </button>
    )
}