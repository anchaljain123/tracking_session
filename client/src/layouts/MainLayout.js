import React from "react";

import "../styles/main.css";

const MainLayout = ({ children }) => {
    return (
        <div className="main">
            {children}
        </div>
    );
}

export default MainLayout;
