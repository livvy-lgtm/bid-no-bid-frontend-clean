import React, { useEffect, useState } from "react";
import * as _ from "lodash";

import sectionsInfo from "../../section.json";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import Section from "./Section";
import ModalPage from "../ModalPage/ModalPage";
import EndModalPage from "../EndModalPage/EndModalPage";
import Form from "../Form/Form";

export const DashBoard = () => {
  const [currentSectorIndex, setCurrentSectorIndex] = useState(0);
  const [answers, setAnswers] = useState(sectionsInfo.map(() => []));
  const [startModalVisible, setStartModalVisible] = useState(true);
  const [endModalVisible, setEndModalVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [checkStatus, setCheckStatus] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    deadline: "",
    customerName: "",
    issue: "",
    title: "",
  });

  const handleAnswer = (sectionIndex, questionIndex, answerIndex) => {
    answers[sectionIndex][questionIndex] = answerIndex;
    setAnswers(_.cloneDeep(answers));
  };

  const getPagePath = () => {
    let uri = document.baseURI;
    let paramsPosition = uri.indexOf("?");
    if (paramsPosition >= 0) {
      uri = uri.substring(0, paramsPosition);
    }
    return uri;
  }

  const getURISearch = () => {
    let uri = document.baseURI;
    let paramsPosition = uri.indexOf("?");
    if (paramsPosition >= 0) {
      return uri.substring(paramsPosition);
    }
    return "";
  }

  const handleSafe = () => {
    let uri =
      getPagePath() +
      "?answers=" +
      encodeURIComponent(JSON.stringify(answers));
    navigator.clipboard
      .writeText(uri)
      .then(() => {
        setShowMessage(true);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  let queryParam = decodeURIComponent(getURISearch());
  useEffect(() => {
    if (queryParam) {
      let uri = queryParam.split("=");
      setAnswers(JSON.parse(uri[1]));
    }
  }, []);

  return (
    <>
      {startModalVisible ? (
        <ModalPage
          modalVisible={startModalVisible}
          setModalVisible={setStartModalVisible}
          checkStatus={checkStatus}
          setCheckStatus={setCheckStatus}
          queryParam={queryParam}
        />
      ) : checkStatus && !endModalVisible && !formVisible ? (
        <div className="sector-root">
          <Section
            sections={sectionsInfo}
            answers={answers}
            handleAnswer={handleAnswer}
            currentSectorIndex={currentSectorIndex}
            setCurrentSectorIndex={setCurrentSectorIndex}
            setEndModalVisible={setEndModalVisible}
            setFormVisible={setFormVisible}
          />
          <SideBar
            answers={answers}
            handleSafe={handleSafe}
            showMessage={showMessage}
          />
        </div>
      ) : (
        <></>
      )}
      {!startModalVisible && checkStatus && !endModalVisible && !formVisible ? (
        <NavBar answers={answers} sections={sectionsInfo}/>
      ) : (
        <></>
      )}
      {endModalVisible ? (
        <EndModalPage
          setEndModalVisible={setEndModalVisible}
          answers={answers}
          setAnswers={setAnswers}
          sections={sectionsInfo}
          sectionIndex={currentSectorIndex}
          handleSafe={handleSafe}
          setShowMessage={setShowMessage}
          currentSectorIndex={currentSectorIndex}
          setCurrentSectorIndex={setCurrentSectorIndex}
          form={form}
        />
      ) : (
        <> </>
      )}
      {formVisible ? (
        <Form
          setEndModalVisible={setEndModalVisible}
          answers={answers}
          setAnswers={setAnswers}
          sections={sectionsInfo}
          sectionIndex={currentSectorIndex}
          handleSafe={handleSafe}
          setShowMessage={setShowMessage}
          currentSectorIndex={currentSectorIndex}
          setCurrentSectorIndex={setCurrentSectorIndex}
          setFormVisible={setFormVisible}
          form={form}
          setForm={setForm}
          showMessage={showMessage}
        />
      ) : (
        <> </>
      )}
    </>
  );
};
