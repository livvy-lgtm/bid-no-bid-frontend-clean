import sectionsInfo from "../section.json";
import * as _ from "lodash";

let maxSectionsScore = 0;
const answerMaxScoreArray = [];
sectionsInfo.forEach((section) => {
     section.questions.forEach((question) => {
         return answerMaxScoreArray.push(_.maxBy(question.answerOptions, (option)=> (option.score)).score)
        })
     maxSectionsScore = answerMaxScoreArray.reduce((sum, maxScore) => {
        return sum += maxScore
     })
    return maxSectionsScore
   });

export const getCumulativeScore = (answers) => {
    let allSectionScore = 0;
    answers.forEach((section, sectionIndex) => {
        section.forEach((answerIndex, questionIndex) => {
            if(answerIndex || answerIndex === 0) {
                allSectionScore = allSectionScore + sectionsInfo[sectionIndex].questions[questionIndex].answerOptions[answerIndex].score
            }
        })
    })

    return {
        value: allSectionScore,
        max: maxSectionsScore,
        percent:((allSectionScore / maxSectionsScore) * 100).toFixed()
    }
}





