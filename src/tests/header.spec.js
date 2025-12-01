import React from "react";
import {mount} from 'cypress-react-unit-test';
import {renderer} from 'cypress-react-unit-test';
import Header from "../Components/Header/Header";
import { eq } from "lodash";

describe("Header component", () => {
     it("Should be mounting", () => {
        cy.get('sections-info').contains("header")
         cy
         .get(".header-section")
         .eq(0)
         .should("contain.text", "0")
    //  mount(<Header sections = "[]" currentSectorIndex = "0" />);
    //     cy.get('sections-info').contains("header")
    //     cy.get('div').should('have.length', 1)
    //     cy.get('div').should('have.length', 1)
    })
       
    })
    // it("render correctly date component", () => {
    //     const HeadComponent = renderer.create(<Header />).toJSON();
    //     expect(HeadComponent).toMatchSnapshot();
    // });
   
    
    // it("Matches the snapshot", () => {
    //     const props = {
    //         sections: ["section", "title", "description"],
    //         currentSectorIndex: 0
    //     }
    //     let HeadComponent = mount(<Header {...props}/>);
    //     expect(HeadComponent.props("sections")).toEqual("section")
    // })

    // it("should check correct elem on the page", () => {
    //     cy.get(".header").should("be.visible")
    // })

// describe("Button component", () => {
//     it("Matches the snapshot", (props) => {
//   
// });