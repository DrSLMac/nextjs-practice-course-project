import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";
import classes from './event-item.module.css';
import Image from "next/image";

function EventItem({ title, image, date, location, id }) {

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = location.replace(', ', '\n') // \n is a line break

    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <Image 
                src={'/' + image}
                alt={title}
                width={400}
                height={400}
            />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{ title }</h2>
                    <div className={classes.date}>
                    <DateIcon />
                        <time>{ humanReadableDate }</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{ formattedAddress }</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem