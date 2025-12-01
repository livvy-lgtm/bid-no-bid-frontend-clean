import * as _ from "lodash";

export const getAnswerMaxScore = (arr) => {
    let answerMaxScoreArray = [];
    let sumAnswerMaxScore = 0;
    arr.forEach((question) => {
        answerMaxScoreArray.push(_.maxBy(question.answerOptions, (option)=> (option.score)).score)
    })
    sumAnswerMaxScore = answerMaxScoreArray.reduce((sum, maxScore) => {
        return sum += maxScore
    });

    return sumAnswerMaxScore
};