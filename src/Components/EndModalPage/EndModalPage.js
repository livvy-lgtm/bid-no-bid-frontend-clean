import React from "react";

import { getCumulativeScore } from "../../helpers/getCumulativeScore";
import { Diagram } from "../SideBar/Diagram";
import { Section } from "./Section";
import logo from "../../images/logo.png";

const EndModalPage = ({
  setEndModalVisible,
  answers,
  handleSafe,
  sections,
  currentSectorIndex,
  setCurrentSectorIndex,
  form,
}) => {
  const handleOpenPdf = () => {
    window.print();
  };

  return (
    <div className="end-modal-page-content-wrapper">
      <div className="end-modal-page-content">
        <div className="summary-wrapper">
          <div>
            <div className="summary-title">Summary</div>
            <div className="summary-logo">
              <img className="logo" src={logo} alt="" />
            </div>
            <div className="summary-description">
              This App will produce a result based only upon the information you
              provide. However, under no circumstances will Bid Perfect be held
              liable for any decision you make as a result of using this
              service. The decision you make is your own responsibility.
            </div>
          </div>

          <div className="summary-btn-wrapper">
            <button onClick={handleSafe}>SHARE</button>
            <button onClick={handleOpenPdf}>Download PDF</button>
          </div>
        </div>
        <div className="form-data">
          <div className="form-data-value">
            <div className="text">Name:</div>
            <div>{form.name}</div>
          </div>
          <div className="form-data-value">
            <div className="text">Email addreess:</div>
            <div>{form.email}</div>
          </div>
          <div className="form-data-value">
            <div className="text">Date:</div>
            <div>{form.date}</div>
          </div>
          <div className="form-data-value">
            <div className="text">Deadline:</div>
            <div>{form.deadline}</div>
          </div>
          <div className="form-data-value">
            <div className="text">Customer name:</div>
            <div>{form.customerName}</div>
          </div>
          <div className="form-data-value">
            <div className="text">Organisation issuing the ITT/RFP:</div>
            <div>{form.issue}</div>
          </div>
          <div className="form-data-value">
            <div className="text">Bid identification/Title:</div>
            <div>{form.title}</div>
          </div>
        </div>
        <div className="diagram-wrapper">
          <div className="summary-diagram">
            <Diagram answers={answers} />
          </div>
          <div className="score-wrapper">
            <div className="score-description-wrapper">
              <div className="score">
                <div className="score-number">
                  {getCumulativeScore(answers).max}
                </div>
                <div className="score-title">Maximum Score</div>
              </div>
              <div className="score-description">
                This is the maximum you can score using this app. If you have
                achieved it, you will probably want to start planning your bid
                right now. In our experience, it is unlikely that a ‘perfect’
                result is ever really achievable as there are simply too many
                variables and nuances. However, if you are close to this score,
                it seems likely that you have found an ideal business
                opportunity.
              </div>
            </div>
            <div className="score-description-wrapper ">
              <div className="score">
                <div className="score-number">
                  {getCumulativeScore(answers).value}
                </div>
                <div className="score-title">Your Cumulative Score</div>
              </div>
              <div className="score-description">
                This is your cumulative score based on the answers you have
                provided. If your responses accurately reflect your best
                understanding, then this app will produce a result which is
                consistent with that input.
              </div>
            </div>
            <div className="score-description-wrapper">
              <div className="score">
                <div className="score-number">
                  {getCumulativeScore(answers).percent}%
                </div>
                <div className="score-title">% of Max Score</div>
              </div>
              <div className="score-description">
                You can go back and edit your answers if new information becomes
                available, which may increase your overall score but you should
                avoid ‘tweaking’ a section without good reason. Your first
                answer is usually always the right one.
              </div>
            </div>
          </div>
        </div>
        {getCumulativeScore(answers).percent < 30 && (
          <div className="end-status">
            <div className="end-status-title">No Bid </div>
            This may not be the outcome you were hoping for but that is the
            point of using an app like this – to remove the emotion from the
            decision and work with a simple range of factors. A No Bid decision
            is sometimes painful but will, in the longer term, save you
            investing valuable resources into producing a bid you are, based on
            the evidence, likely to lose. We do realise that, sometimes, it may
            be worth bidding to ‘get your name in the frame’, so to speak. That
            is a decision that goes outside the parameters of this app. Of
            course, you could win it against the odds but that too is a gamble.
          </div>
        )}
        {getCumulativeScore(answers).percent >= 30 &&
          getCumulativeScore(answers).percent <= 65 && (
            <div className="end-status">
              <div className="end-status-title">Bid With Caution </div>
              We have now entered into a realm where decisions are not so clear
              cut and making the correct choice is not obvious. The often used
              term ‘bid or no-bid’ suggests that the choice is a binary one; it
              is either a one or a zero; on or off. In reality, that is of
              course, not the case. The road that runs between and obvious bid
              or no bid decision is a wide one but we have designed this app to
              eliminate as many of the variables as possible. The simple fact is
              that you will have to use your best judgement. If the animated
              needle is more angled toward No Bid, then that should be a
              reasonable guide and vice versa. We simply advise you to have a
              cautious approach and give due consideration to the investment you
              are about to make in producing the bid.
            </div>
          )}
        {getCumulativeScore(answers).percent >= 65 &&
          getCumulativeScore(answers).percent <= 100 && (
            <div className="end-status">
              <div className="end-status-title">Bid</div>
              This is unambiguous. If the app is telling you to bid, it is doing
              so based on a relatively rigorous set of algorithms that have been
              calibrated to only look for the best of your answers. As far this
              app is concerned, you are unlikely to have better opportunities
              and they are worth your investment.
            </div>
          )}
        {sections.map((section, i) => (
          <Section
            section={section}
            sectionIndex={i}
            answers={answers}
            key={"end-modal-section" + i}
            currentSectorIndex={currentSectorIndex}
            setCurrentSectorIndex={setCurrentSectorIndex}
            setEndModalVisible={setEndModalVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default EndModalPage;
