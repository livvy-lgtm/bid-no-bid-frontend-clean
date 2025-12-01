import React from "react";

import Section from "./Section"

const NavBar = ({
    sections,
    answers
}) => {

    return (
        <>
            <div className="footer">
                <div className="nav-bar">
                    {sections.map((section, i) => (
                        <Section
                            section={section}
                            sectionIndex={i}
                            answers={answers}
                            key={"nav-bar-section" + i}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default NavBar;
