import React from "react";
import Image from "next/image";
import Button from "../button/button";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import AddressIcon from "../icons/address-icon";

import classes from "./styles/event-item.module.css"

const EventItem = ({ item }) => {

    const { title, image, date, location, id } = item;

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const fomrattedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;
    
    return(
        <li className={classes.item}>
            <div className={classes.img__container}>
                <img src={'/'+image} />
            </div>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{readableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{fomrattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>

    )
};


export default EventItem;