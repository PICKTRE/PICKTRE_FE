import classes from "./MyHeader.module.css"
import Header from "../common/Header";

const MyHeader = () => {
    return (
        <header className={classes.header}>
            <Header />
            <section className={classes.subHeader}>
                <article className={classes.pageHeader}>
                    My Page
                </article>
            </section>
        </header>
    )
}

export default MyHeader;