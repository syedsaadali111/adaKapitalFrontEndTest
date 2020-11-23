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

const Review = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src="https://picsum.photos/300" className={styles.profileImg}/>
                <span className={styles.name}>Brain B.</span><br></br>
                <span className={styles.date}>10/9/2018</span>
            </div>
            <div className={styles.right}>
                <StyledRating
                    value={3}
                    max={5}
                    readOnly
                    emptyIcon={<StarBorderIcon  style={{fill: "#002B56"}} fontSize="inherit" />}
                />
                <div className={styles.reviewText}>
                    <p>
                    Don't be fooled by the French name, this place oozes with Californian flair.
                    Their space is phenomenal: bright, warm colors yet clean and inviting.
                    I've been twice for brunch and both times have been incredible! On our next trip to LA, I should really check out dinner since they seem to do more classic French preparations at that time.
                    For brunch, drool over the cast-iron pots of shakshouka, perfectly jiggly eggs over kimchi fried rice, marvel at their artful breakfast toasts and do good by ordering a fresh squeezed green juice. You'll need it to feel less guilty when you devour their sweet sticky bun or their creamy delicious Hazelnut puffs. OMG. I'm still dreaming about those cream puffs right now ...
                    Calories be damned.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Review;