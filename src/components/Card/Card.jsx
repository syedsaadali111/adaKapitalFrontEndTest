import React from 'react';
import styles from './Card.css';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Link} from 'react-router-dom';

const StyledRating = withStyles({
    iconFilled: {
      color: '#002B56'
    },
    root: {
      marginTop: "6px",
    }
})(Rating);

const Card = ( {restaurant: {id, review_count, name, rating, price, categories, is_closed, image_url, coordinates: {latitude, longitude}}}) => {

    return (
        <div className={styles.container}>
            <img src={image_url} className={styles.resImg}/>
            <h3 className={styles.resName}>{name}</h3>
            <StyledRating
                value={rating}
                precision={0.5}
                max={5}
                readOnly
                emptyIcon={<StarBorderIcon  style={{fill: "#002B56"}} fontSize="inherit" />}
            />
            <div className={styles.info}>
                <div className={styles.left}>
                    <span>{categories[0].title} • {price}</span>
                </div>
                <div className={styles.right}>
                    {is_closed ? (
                        <>
                            <span className={`${styles.dotClosed} ${styles.dot}`}></span>
                            <span>CLOSED</span>
                        </>
                    ) : (
                        <>
                            <span className={`${styles.dotOpen} ${styles.dot}`}></span>
                            <span>OPEN NOW</span>
                        </>
                    )} 
                </div>
            </div>

            <Link to={{
                    pathname: `/details/${id}`,
                    state: {
                        name, rating, price, is_closed,
                        category: categories[0].title,
                        latitude, longitude
                    }
                }}>
                <button className={styles.btnLearnMore}>
                    LEARN MORE
                </button>
            </Link>
        </div>
    );
}
 
export default Card;