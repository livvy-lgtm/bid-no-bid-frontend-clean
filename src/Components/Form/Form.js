import React from "react";

import SideBar from "../SideBar/SideBar";

const Form = ({
  setEndModalVisible,
  answers,
  setFormVisible,
  form,
  setForm,
  handleSafe,
  showMessage,
}) => {
  const handleClick = () => {
    setEndModalVisible(true);
    setFormVisible(false);
  };
  const changeHandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);

  return (
    <div className="form-wrapper">
      <SideBar
        answers={answers}
        handleSafe={handleSafe}
        showMessage={showMessage}
      />
      <div className="form-aligner">
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <div className="form-title">
            Your Information
          </div>
          <div className="form-subtitle">
            It is not compulsory to fill in all the boxes but we use the
            information to add detail to the shareable Bid/No Bid Report, which
            is generated next
          </div>
          <label className="form-section">
            Name
            <input
              type="text"
              name="name"
              onChange={changeHandle}
              placeholder="Type your name"
            />
          </label>
          <label className="form-section">
            Email address
            <input
              name="email"
              type="text"
              onChange={changeHandle}
              placeholder="Type your email"
            />
          </label>
          <label className="form-section">
            Date
            <input
              name="date"
              type="date"
              onChange={changeHandle}
              placeholder="dd.mm.yyyy"
            />
          </label>
          <label className="form-section">
            Deadline
            <input
              type="date"
              name="deadline"
              onChange={changeHandle}
              placeholder="dd.mm.yyyy"
            />
          </label>
          <label className="form-section">
            Customer name
            <input
              type="text"
              name="customerName"
              onChange={changeHandle}
              placeholder="Type customer name"
            />
          </label>
          <label className="form-section">
            Organisation issuing the ITT/RFP
            <input
              name="issue"
              type="text"
              onChange={changeHandle}
              placeholder="Type what organization issuing"
            />
          </label>
          <label className="form-section">
            Bid identification/Title
            <input
              name="title"
              type="text"
              onChange={changeHandle}
              placeholder="Type bid identification or title"
            />
          </label>
          <input
            className="submit-form"
            type="submit"
            value="Submit"
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
