import React, {useEffect, useState} from "react";

import orangeEllipse from "../../images/diagram/Ellipse orange (Stroke).svg"
import redEllipse from "../../images/diagram/Ellipse red (Stroke).svg"
import greenEllipse from "../../images/diagram/EllipseGreen.svg"
import arrow from "../../images/diagram/arrow.svg"
import bidText from "../../images/diagram/Text(bid).svg"
import noBidText from "../../images/diagram/Text(Nobid).svg"
import bidWithText from "../../images/diagram/Text(Bid with caution).svg"
import {getCumulativeScore} from "../../helpers/getCumulativeScore";

//import diagram from "../../images/diagram.svg"

export const Diagram = ({
    answers
}) => {

    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        setRotation(160* getCumulativeScore(answers).value / getCumulativeScore(answers).max)
    }, [getCumulativeScore(answers).value])

    return (
        <div className="diagram-body"> 
            <img className="red-ellipse" src={redEllipse} alt="" />
            <img className="orange-ellipse" src={orangeEllipse} alt="" />
            <img className="green-ellipse" src={greenEllipse} alt="" />
            <img className="arrow" src={arrow}
                 alt=""
                 style={{transform: `rotate(${rotation}deg)`}}
            />
            <img className="text-bid" src={bidText} alt="" />
            <img className="text-with" src={bidWithText} alt="" />
            <img className="text-noBid" src={noBidText} alt="" />
            <div className={(rotation <= 40 || rotation >= 116) ? "status" : "status-replace"}>
                <div> {
                    (rotation <= 50)
                        ? (<div className="status-title red-title">No bid</div>)
                        : (rotation > 50 && rotation <= 105)
                        ? (<div className="status-title orange-title">Bid with caution </div>)
                        : (rotation > 105 && rotation <= 160)
                        ? (<div className="status-title green-title">Bid</div>)
                        : (<div> </div>)
                } <span className="your-status">your status</span>
                </div>
            </div>
        </div>
    )
}