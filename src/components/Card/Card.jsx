import React from 'react';
import styles from './Card.css';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const StyledRating = withStyles({
    iconFilled: {
      color: '#002B56'
    },
    root: {
      marginTop: "8px",
    }
})(Rating);

const Card = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.imgContainer}> */}
                <img src="https://picsum.photos/300" className={styles.resImg}/>
            {/* </div> */}
            <h3 className={styles.resName}>Restaurant 1</h3>
            <StyledRating
                value={3}
                max={5}
                readOnly
                emptyIcon={<StarBorderIcon  style={{fill: "#002B56"}} fontSize="inherit" />}
            />
            <div className={styles.info}>
                <div className={styles.left}>
                    <span>Thai • $$$$</span>
                </div>
                <div className={styles.right}>
                    <span className={`${styles.dotOpen} ${styles.dot}`}></span>
                    <span>OPEN NOW</span> 
                </div>
            </div>
            <button className={styles.btnLearnMore}>
                LEARN MORE
            </button>
        </div>
    );
}
 
export default Card;