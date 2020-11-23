import React from 'react';
import styles from './ReviewList.css';
import Review from '../Review/Review';

const ReviewList = () => {
    return (
        <div className={styles.container}>
            <span className={styles.count}>321 Reviews</span>
            <Review />
            <Review />
            <Review />
        </div>
    );
}
 
export default ReviewList;