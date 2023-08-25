import classes from "./InviteFriends.module.css";
import InviteFriendsHeader from "./InviteFriendsHeader";
import Footer from "../common/Footer";
import { motion } from "framer-motion";
import InviteFriendsButton from "./InviteFriendsButton";

const contentVariants = {
  hidden: {
    opacity: 0.3,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
};

const InviteFriends = () => {
  return (
    <>
      <div>
        <InviteFriendsHeader />
        <motion.main
          className={classes.main}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <InviteFriendsButton />
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default InviteFriends;
