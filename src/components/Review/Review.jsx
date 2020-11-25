import React from 'react';
import styles from './Review.css';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const StyledRating = withStyles({
    iconFilled: {
      color: '#002B56'
    },
    root: {
      marginTop: "4px",
    }
})(Rating);

const Review = ({ review: {text, rating, time_created, user: {image_url, name}}}) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={image_url} className={styles.profileImg}/>
                <span className={styles.name}>{name}</span><br></br>
                <span className={styles.date}>{time_created}</span>
            </div>
            <div className={styles.right}>
                <StyledRating
                    value={rating}
                    precision={0.5}
                    max={5}
                    readOnly
                    emptyIcon={<StarBorderIcon  style={{fill: "#002B56"}} fontSize="inherit" />}
                />
                <div className={styles.reviewText}>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Review;