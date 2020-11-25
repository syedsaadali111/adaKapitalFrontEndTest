import React from 'react';
import styles from './ReviewList.css';
import Review from '../Review/Review';

const ReviewList = ({reviewCount, reviews}) => {
    return (
        <div className={styles.container}>
            <span className={styles.count}>{reviewCount} Reviews</span>
            {
                reviews.map( (r, idx) => {
                    return <Review key={idx} review={r}/>
                })
            }
        </div>
    );
}
 
export default ReviewList;