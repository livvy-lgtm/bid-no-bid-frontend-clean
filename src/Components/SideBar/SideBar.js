import React from "react";

import { getCumulativeScore } from "../../helpers/getCumulativeScore";
import { Diagram } from "./Diagram";
import { SuccessMessage } from "./SuccessMessage";

const SideBar = ({
    answers,
    showMessage,
    handleSafe
}) => {

    const handleShare = async () => {
        const shareUrl = "https://bidperfect.dreamhosters.com/bid-no-bid-app";
        const subject = "Bid / No Bid App – A Useful Assessment Tool";

        const body = `
Hi,

Sharing this in case it’s useful – it’s a quick Bid / No Bid app that helps teams decide whether an opportunity is worth the time and effort. It takes a couple of minutes and gives a simple traffic-light recommendation.

Here’s the link:
${shareUrl}

I’ve found it helpful when reviewing early opportunities.
        `.trim();

        // 1) Try native share (mobile / modern browsers)
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Bid / No Bid App",
                    text: body,
                    url: shareUrl,
                });
                return;
            } catch (err) {
                console.error("Web Share failed:", err);
                // fall through to email
            }
        }

        // 2) Fallback – open email
        const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    };

    return (
        <>
            <div className="side-bar">
                <div className="top-sidebar">
                    <div>Overall</div>
                    <button onClick={handleShare}>Share this app</button>
                </div>
                <Diagram
                    answers={answers}
                />
                <div className="side-bar-cumulative-score">
                    <div className="cumulative-score">
                        <div className="cumulative-score-value">
                            {getCumulativeScore(answers).max}
                        </div>
                        <div className="cumulative-score-text">
                            Cumulative Max Score
                        </div>
                    </div>
                    <div className="cumulative-score">
                        <div className="cumulative-score-value">
                            {getCumulativeScore(answers).value}
                        </div>
                        <div className="cumulative-score-text">
                            Cumulative Score
                        </div>
                    </div>
                    <div className="cumulative-score">
                        <div className="cumulative-score-value">
                            {getCumulativeScore(answers).percent}%
                        </div>
                        <div className="cumulative-score-text">
                            % of Max Score
                        </div>
                    </div>
                </div>
            </div>
            {showMessage && <SuccessMessage />}
        </>
    );
};

export default SideBar;
