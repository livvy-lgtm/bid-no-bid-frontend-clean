import React from "react";
import {mount} from 'cypress-react-unit-test'
import {ModalPage} from "../Components/ModalPage/ModalPage";

describe("ModalPage component", () => {
    it("Matches the snapshot", () => {
        mount(<ModalPage />);
    })
})