import React from "react";
import Link from "next/link"
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
            <img src={`/${image}`} alt="event image" />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h1>{title}</h1>
                    <div className={classes.date}>
                        <time>{readableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <address>{fomrattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>

    )
};


export default EventItem;