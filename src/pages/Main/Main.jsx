import React from 'react';
import styles from './Main.css';
import Filters from '../../components/Filters/Filters';
import RestaurantList from '../../components/RestaurantList/RestaurantList';
 
const Main = () => {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.heading}>Restaurants</h1>
                <div className={styles.description}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <Filters/>
            <RestaurantList/>
            <div className={styles.btnContainer}>
                <button className={styles.btnLoadMore}>
                    LOAD MORE
                </button>
            </div>
        </>
    );
}
 
export default Main;