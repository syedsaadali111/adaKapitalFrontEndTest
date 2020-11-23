import React from 'react';
import Card from '../Card/Card';
import styles from './RestaurantList.css';


const RestaurantList = () => {
    return (
        <div className={styles.container}>
            {/* TODO: Make Heading Dynamic maybe */}
            <h1 className={styles.heading}>All Restaurants</h1>
            <div className={styles.cardList}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
}
 
export default RestaurantList;