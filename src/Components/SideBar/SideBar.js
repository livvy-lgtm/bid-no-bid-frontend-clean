import React from "react";

import {getCumulativeScore} from "../../helpers/getCumulativeScore";
import {Diagram} from "./Diagram";
import {SuccessMessage} from "./SuccessMessage";

const SideBar = ({
    answers,
    showMessage,
    handleSafe
    }) => {

    return (
        <>
            <div className="side-bar">
                <div className="top-sidebar">
                    <div>Overall</div>
                    <button onClick={handleSafe}>Share</button>
                </div>
                <Diagram
                    answers={answers}
                />
                <div className="side-bar-cumulative-score">
                    <div className="cumulative-score">
                        <div className="cumulative-score-value">{getCumulativeScore(answers).max}</div>
                        <div className="cumulative-score-text">Cumulative Max Score</div>
                    </div>
                    <div className="cumulative-score">
                        <div className="cumulative-score-value">{getCumulativeScore(answers).value}</div>
                        <div className="cumulative-score-text">Cumulative Score</div>
                    </div>
                    <div className="cumulative-score">
                        <div className="cumulative-score-value">{getCumulativeScore(answers).percent}%</div>
                        <div className="cumulative-score-text">% of Max Score</div>
                    </div>
                </div>
            </div>
            { showMessage &&
            <SuccessMessage />
            }
        </>
    );
}

export default SideBar;
