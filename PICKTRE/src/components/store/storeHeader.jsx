import classes from "./storeHeader.module.css"
import Header from "../common/Header";

const storeHeader = () => {
    return (
        <header className={classes.header}>
            <Header />
            <section className={classes.subHeader}>
                <article className={classes.pageHeader}>
                    Store
                </article>
            </section>
        </header>
    )
}

export default storeHeader;