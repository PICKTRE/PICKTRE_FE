import classes from "./MyProfile.module.css"

const MyProfile = () => {
    return (
        <div className={classes.profileSection}>
            <div className={classes.profileImg}></div>
            <div className={classes.profileInfoSection}>
                <div className={classes.profile}>
                    <ul className={classes.profileInfo}>
                        <li><div className={classes.name}></div></li>
                        <li>TODAY 리워드<div className={classes.todayReward}></div></li>
                        <li>보유리워드 <div className={classes.totalReward}></div></li>
                    </ul>
                    <div className={classes.profileTier}>
                        <div className={classes.profileTierImg}></div>
                        <div className={classes.profileTierContent}></div>
                    </div>
                </div>
                <button className={classes.verify}>이메일을 인증해주세요</button>
            </div>
        </div>
    )
}

export default MyProfile