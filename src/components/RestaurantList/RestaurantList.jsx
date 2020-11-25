import React from 'react';
import Card from '../Card/Card';
import styles from './RestaurantList.css';


const RestaurantList = ( {restaurants} ) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>All Restaurants</h1>
            <div className={styles.cardList}>
                {
                    restaurants.map( (r, idx) => {
                        return <Card key={idx} restaurant={r}/>
                    })
                }
            </div>
        </div>
    );
}
 
export default RestaurantList;