import React from 'react';
import styles from './DetailView.css';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ReviewList from '../ReviewList/ReviewList';

const StyledRating = withStyles({
    iconFilled: {
      color: '#002B56'
    },
    root: {
      marginTop: "8px",
    }
})(Rating);

const DetailView = () => {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.heading}>Restaurant 3</h1>
                <StyledRating
                    value={3}
                    max={5}
                    readOnly
                    size="large"
                    emptyIcon={<StarBorderIcon  style={{fill: "#002B56"}} fontSize="inherit" />}
                />
                <div className={styles.infoBar}>
                    <div className={styles.left}>
                        <span>Thai • $$$$</span>
                    </div>
                    <div className={styles.right}>
                        <span className={`${styles.dotOpen} ${styles.dot}`}></span>
                        <span>Open Now</span> 
                    </div>
                </div>
            </div>
            <ReviewList />
        </>
    );
}
 
export default DetailView;