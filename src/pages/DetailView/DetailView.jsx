import React from 'react';
import styles from './DetailView.css';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ReviewList from '../../components/ReviewList/ReviewList';
import {useLocation, useParams} from 'react-router-dom';
import useFetchReviews from '../../hooks/useFetchReviews';

const StyledRating = withStyles({
    iconFilled: {
      color: '#002B56'
    },
    root: {
      marginTop: "8px",
    }
})(Rating);

const DetailView = () => {

    const { id } = useParams();
    const {state: {name, rating, price, category, is_closed, latitude, longitude}} = useLocation();
    const {reviews, loading, error, total} = useFetchReviews(id);

    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.heading}>{name}</h1>
                <StyledRating
                    value={rating}
                    max={5}
                    readOnly
                    size="large"
                    emptyIcon={<StarBorderIcon  style={{fill: "#002B56"}} fontSize="inherit" />}
                />
                <div className={styles.infoBar}>
                    <div className={styles.left}>
                        <span>{category} • {price}</span>
                    </div>
                    <div className={styles.right}>
                        <span className={`${is_closed ? styles.dotClosed : styles.dotOpen} ${styles.dot}`}></span>
                        <span>Open Now</span> 
                    </div>
                </div>
            </div>

            <div className={styles.mapCanvas}>
                <iframe width="100%" height="228px" id="gmap_canvas" src={`https://maps.google.com/maps?q=${latitude}%2C${longitude}&t=&z=20&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>


            {
                loading && (
                    <div className={styles.btnContainer}>
                        <button disabled className={styles.labelLoading}>
                            LOADING...
                        </button>
                    </div>
                )
            }

            {
                !loading && (<ReviewList reviewCount={total} reviews={reviews}/>)
            }
            
        </>
    );
}
 
export default DetailView;