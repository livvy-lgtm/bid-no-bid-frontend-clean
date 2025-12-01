import React, {useState, useEffect, useCallback} from "react";
import {AnswerOption} from "./AnswerOption";
import * as _ from 'lodash';

export const Question = ({
     question,
     handleAnswer,
     questionIndex,
     sectionIndex,
     answers,
}) => {

    const [answerPercent, setAnswerPercent] = useState(null);

    const selectedAnswer = question.answerOptions[answers[sectionIndex][questionIndex]];
    const answerMaxScore = _.maxBy(question.answerOptions, (option)=> (option.score)).score;

    const getMaxScorePercent = useCallback(() => {
        return (selectedAnswer.score / answerMaxScore * 100).toFixed();
    }, [selectedAnswer, answerMaxScore]);

    useEffect(() => {
        if (selectedAnswer && selectedAnswer.score)
            setAnswerPercent(getMaxScorePercent());
    }, [selectedAnswer, getMaxScorePercent])

    return (
        <div className="question-block">
            <div className="question">
                {question.title}
                    <div className="answer-option-value">
                        <div className="score-value">
                            <div>{answerMaxScore}</div>
                            <div className="score-title">max score</div>
                        </div>
                        <div className="score-value">
                            {selectedAnswer && selectedAnswer.score &&
                            <div>{selectedAnswer.score}</div>
                            }
                            <div className="score-title">your score</div>
                        </div>
                        <div className="score-value">
                            {selectedAnswer && selectedAnswer.score &&
                            <div>{answerPercent}%</div>
                            }
                            <div className="score-title">of max score</div>
                        </div>
                        <div/>
                    </div>
            </div>
            <div className="answer">
                {question.answerOptions.map((answerOption, i)=> (
                   <AnswerOption
                       key={"question" + i}
                       answerOption={answerOption}
                       answerIndex={i}
                       questionIndex={questionIndex}
                       sectionIndex={sectionIndex}
                       handleAnswer={handleAnswer}
                       selectedAnswer={selectedAnswer}
                       answers={answers}
                   />
                ))}
            </div>
        </div>
    )
}