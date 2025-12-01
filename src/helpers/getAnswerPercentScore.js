import {getAnswerMaxScore} from "./getAnswerMaxScore";

export const getAnswerPercentScore = (sectionScore, question) => {
    return (sectionScore / getAnswerMaxScore(question) * 100).toFixed();
}