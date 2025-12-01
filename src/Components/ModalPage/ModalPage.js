import React from "react";

const ModalPage = ({
   modalVisible,
   setModalVisible,
   checkStatus,
   setCheckStatus,
   queryParam
}) => {

    const openModal = () => {
        if(checkStatus)
        setModalVisible(false)
    }
    const handleStatus = () => {
        setCheckStatus(!checkStatus)
    }

    return (
        <div className="modal-page-wrapper">
            <div className="modal-page">
                <div className="calc-title">
                    <div>The Bid/No Bid App</div>
                    <button className="close-btn"> </button>
                </div>

                <div className="calc-info">
                    Bid Perfect provides this Bid/No Bid App as an aide to deciding whether to invest resources in planning and writing a bid.
                </div>
                <div className="disclaimer">
                    <div className="disclaimer-title">Disclaimer</div>
                    <p>This calculator will produce a result based only upon the information you provide. However, under no
                        circumstances will Bid Perfect be held liable for any decision you make as a result of using this service.
                    </p>
                    <div // className={ modalVisible && !checkStatus ? "check-box-container" : "check-box-container-wrong"}//
                    >
                        <label>
                            <input
                                className="check-box"
                                type="checkbox"
                                defaultChecked={checkStatus}
                                onChange={handleStatus}
                            />
                            Please tick this box to agree before proceeding.
                        </label>
                    </div>
                </div>
                <div>
                    <div className="disclaimer-title">General Guidance</div>
                    <p>
                        Please consider each question and range of answers carefully and select the option that is the closest match to your understanding. Remember to be honest with yourself at all times.
                    </p>

                    <p>
                        You should try to answer every question because an unanswered question will automatically default to the
                        lowest available score.
                        Some of the questions may appear similar but be assured that the answers you give have an effect on the scoring algorithms.
                    </p>
                    <div className="get-started-btn-wrapper">
                        <button>
                            <div onClick={openModal}>Let's get started</div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ModalPage;
