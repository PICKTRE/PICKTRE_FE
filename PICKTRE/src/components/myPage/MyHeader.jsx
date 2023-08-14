import { BiBell, BiHomeAlt } from "react-icons/bi";
import classes from "./MyHeader.module.css"
import myPageLogo from "../../assets/myPageLogo.png";

const MyHeader = () => {
    return (
        <header className={classes.header}>
            <section className={classes.mainHeader}>
                <div className={classes.mainHeaderContent}>
                    <img src={myPageLogo} alt="마이페이지 로고 입니다." className={classes.myPageLogo}/>
                    <div className={classes.headerIcons}>
                        <li><BiHomeAlt size="27" margin-right="19" /></li>
                        <li><BiBell size="27" /></li>
                    </div>
                </div>
            </section>
            <section className={classes.subHeader}>
                <article className={classes.pageHeader}>
                    My Page
                </article>
            </section>
        </header>
    )
}

export default MyHeader;