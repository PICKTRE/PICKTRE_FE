import StoreHeader from "./storeHeader";
import Footer from "../common/Footer";
import { motion } from "framer-motion";
import classes from "./store.module.css";
import { IoIosArrowDown } from "react-icons/io";

const store = () => {

    const contentVariants = {
        hidden: {
            opacity: 0.3,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.3, duration: 0.1 },
        },
    };

    return (
        <>
            <StoreHeader />
            <motion.main
                className={classes.main}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
            >
                <section className={classes.searchingSection}>
                    <div className={classes.searching}>
                        <div className={classes.searchingTitle}>
                            <input type="text" className={classes.searchEngine} />
                        </div>
                        <div className={classes.searchingBar}>
                            추천 인기 제품
                            <IoIosArrowDown size="14" color="#ffffff" />
                            1. PICKTRE SPRING NOTE
                        </div>
                    </div>
                    <div className={classes.currentPoint}>
                        픽트리님,<br />현재 보유포인트<br />
                        <p>8,900P</p>
                    </div>
                </section>
                <section className={classes.popularSection}>인기세션</section>
                <section className={classes.otherSection}>다른세션</section>
            </motion.main>
            <Footer />
        </>
    )
};

export default store;