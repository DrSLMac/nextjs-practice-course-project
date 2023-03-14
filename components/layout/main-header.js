import Link from "next/link"
import classes from './main-header.module.css'

function MainHeader() {
    return <header className={classes.header}>
        <div className={classes.logo}>
            <Link href='/'>NextEvents</Link>
        </div>
        <na className={classes.navigation}>
            <li>
                <Link href='/events'>Browse All Events</Link>
            </li>
        </na>
    </header>
}

export default MainHeader