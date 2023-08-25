import classes from "./InviteFriendsButton.module.css";
import { motion } from "framer-motion";

const handleCopyClipBoard = async () => {
  try {
    await navigator.clipboard.writeText("https://picktre.netlify.app");
    console.log("복사에 성공했습니다.");
  } catch (e) {
    console.log("복사에 실패했습니다.");
  }
};

const InviteFriendsButton = () => {
  return (
    <>
      <div className={classes.container} onClick={handleCopyClipBoard}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <span className={classes.mainText}>
            버튼을 클릭해 링크를 복사하세요!
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default InviteFriendsButton;
