import React, { useRef } from "react";
import Button from "../button/button";
import classes from "./styles/event-search.module.css";

const EventSearch = ({onSearch}) => {

  const yearInputRef = useRef();
  const monthInputRef = useRef()


  const submitHandler = (e) => {
    e.preventDefault();

    const selectedYear = yearInputRef.current.value
    const selectedMonth = monthInputRef.current.value

    onSearch(selectedYear, selectedMonth);
  };

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label></label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            {MONTHS.map((month, index) => (
              <option key={index} value={index + 1}>{month}</option>
            ))}
          </select>
        </div>
      </div>
      <Button onClick={submitHandler}>Find Events</Button>
    </form>
  );
};

export default EventSearch;
