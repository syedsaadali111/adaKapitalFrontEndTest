import React from 'react';
import styles from './App.css';
import Filters from '../Filters/Filters';
import RestaurantList from '../RestaurantList/RestaurantList';
 
const App = () => {
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
 
export default App;