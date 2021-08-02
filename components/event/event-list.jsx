import React from "react";
import EventItem from "./event-item";
import classes from "./styles/event-list.module.css"

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem key={item.id} item={item}></EventItem>
      ))}
    </ul>
  );
};

export default EventList;
