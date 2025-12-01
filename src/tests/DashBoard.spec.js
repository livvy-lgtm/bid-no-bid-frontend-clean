import React from 'react';
import { mount } from 'cypress-react-unit-test';
import {renderer} from 'cypress-react-unit-test';
import {DashBoard} from "../Components/DashBoard/DashBoard";

describe("DashBoard component", () => {
    it("Matches the snapshot", () => {
        mount(<DashBoard />);
    });
});