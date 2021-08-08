import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationData) => {},
  hideNotification: (notificationData) => {},
});

export const NotificationContextProvider = ({ children }) => {
  const [activeNoification, setActiveNotification] = useState();

  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData);

    if (notificationData.status === "error" || notificationData.status === "success") {
      setTimeout(() => {
        hideNotificationHandler();
      }, 2500);
    }
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNoification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
