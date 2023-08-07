import classes from "./MyPage.module.css"
import { BiBell } from "react-icons/bi";

const MyPage = () => {
    return (
        <div className={classes.container}>
            <header className={classes.header}>
                <section className={classes.mainHeader}>
                    <div className={classes.mainHeaderContent}>
                        <h1>PICKTRE</h1>
                        <BiBell size="27" />
                    </div>
                </section>
                <section className={classes.subHeader}>
                    <article className={classes.pageHeader}>
                        My Page
                    </article>
                </section>
            </header>
            <main className={classes.main}>
                <section className={classes.profileSection}>프로필 섹션입니다.</section>
                <section className={classes.mainPostSection}>
                    <div className={classes.mainSubPost}>포스트 섹션입니다.</div>
                    <div className={classes.mainPost}>
                        <div className={classes.mainPostContent}>포스트 섹션입니다.</div>
                    </div>
                </section>
                <section className={classes.lastPostSection}>마지막 포스트 섹션입니다.</section>
            </main>
            <footer className={classes.footer}>푸터 섹션입니다.</footer>
        </div>
    )
}

export default MyPage;