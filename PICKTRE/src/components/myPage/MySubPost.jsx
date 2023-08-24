import classes from "./MySubPost.module.css"
import { useNavigate } from "react-router-dom";

const MySubPost = () => {
    const navigate = useNavigate();
    const onClickStore = () => {
        navigate("/store");
    }

    return (
        <div className={classes.subButton}>
            <div className={classes.ranking}>랭킹</div>
            <div className={classes.store} onClick={onClickStore}>스토어</div>
            <div className={classes.mission}>미션</div>
        </div>
    )
}

export default MySubPost;