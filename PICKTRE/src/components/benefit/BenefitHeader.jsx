import classes from "./BenefitHeader.module.css"
import Header from "../common/Header";

const MyHeader = () => {
    return (
        <header className={classes.header}>
            <Header />
            <section className={classes.subHeader}>
                <article className={classes.pageHeader}>
                    Benefits by grade
                </article>
            </section>
        </header>
    )
}

export default MyHeader;