import classes from "./MySubPost.module.css"

const MySubPost = () => {
    return (
        <div className={classes.subButton}>
            <div className={classes.ranking}>랭킹</div>
            <div className={classes.store}>스토어</div>
            <div className={classes.mission}>미션</div>
        </div>
    )
}

export default MySubPost;