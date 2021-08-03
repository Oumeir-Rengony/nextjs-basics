import React from "react";
import MainHeader from "./main-header";
import classes from "./styles/main-header.module.css";

const Layout = ({children}) => {
    return(
        <>
            <MainHeader />
            <main>
                {children}
            </main>
        </>
    )
};

export default Layout;