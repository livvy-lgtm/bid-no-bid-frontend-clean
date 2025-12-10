import React from "react";

import {getCumulativeScore} from "../../helpers/getCumulativeScore";
import {Diagram} from "./Diagram";
import {SuccessMessage} from "./SuccessMessage";

const SideBar = ({
    answers,
    showMessage,
    handleSafe
    }) => {

    const handleShare = async () => {
        const shareUrl = window.location.href;
        const title = "Bid / No Bid Result";
        const text = "Here’s my Bid / No Bid outcome.";

        // 1) Try native share (mobile / modern browsers)
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text,
                    url: shareUrl,
                });
                return;
            } catch (err) {
                console.error("Web Share failed:", err);
                // if it fails, drop through to email
            }
        }

        // 2) Default / desktop behaviour – open email
        const mailto = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
            `${text}\n\n${shareUrl}`
        )}`;
        window.location.href = mailto;
    };

    return (
        <>
            <div className="side-bar">
                <div className="top-sidebar">
                    <div>Overall</div>
                    <button onClick={handleShare}>Share</button>
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
};

export default SideBar;
