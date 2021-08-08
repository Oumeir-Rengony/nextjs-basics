import React, { useContext } from "react";
import MainHeader from "./main-header";
import Notification from "../notification/notification";
import NotificationContext from "../../store/notification-context";

const Layout = ({children}) => {

    const notificationContext = useContext(NotificationContext);

    const activeNotification= notificationContext.notification;

    return(
        <>
            <MainHeader />
            <main>{children}</main>
            {
                activeNotification && (
                    <Notification 
                        title={activeNotification.title} 
                        message={activeNotification.message} 
                        status={activeNotification.status}/>
                )
            }
            
        </>
    )
};

export default Layout;