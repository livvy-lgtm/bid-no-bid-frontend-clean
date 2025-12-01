import React from "react";

const Header = ({
    sections,
    currentSectorIndex
}) => {

    return (
            <header className="header">
                    <div className="header-section">
                        SECTION {sections[currentSectorIndex].section}
                    </div>
                    <div className="header-title">
                        {sections[currentSectorIndex].title}
                    </div>
                    <div className="header-description">
                        {sections[currentSectorIndex].description}
                    </div>
            </header>
    );
}

export default Header;
