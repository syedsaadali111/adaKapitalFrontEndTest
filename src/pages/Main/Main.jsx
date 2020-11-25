import React, {useState} from 'react';
import styles from './Main.css';
import Filters from '../../components/Filters/Filters';
import RestaurantList from '../../components/RestaurantList/RestaurantList';
import useFetchRestaurants from '../../hooks/useFetchRestaurants';
 
const Main = () => {

    const [offset, setOffset] = useState(0);
    const [filters, setFilters] = useState({
        openNow: false,
        prices: [
            {
                'label': 'All',
                'value': false
            },
            {
                'label': '$',
                'value': false
            },
            {
                'label': '$$',
                'value': false
            },
            {
                'label': '$$$',
                'value': false
            },
            {
                'label': '$$$$',
                'value': false
            },
            
        ],
        categories: [
            {
                'label': 'All',
                'value': false
            },
            {
                'label': 'Italian',
                'value': false,
                'alias': 'italian'
            },
            {
                'label': 'Seafood',
                'value': false,
                'alias': 'seafood'
            },
            {
                'label': 'Steakhouse',
                'value': false,
                'alias': 'steak'
            },
            {
                'label': 'American',
                'value': false,
                'alias': 'newamerican'
            },
            {
                'label': 'Mexican',
                'value': false,
                'alias': 'mexican'
            },
            {
                'label': 'Thai',
                'value': false,
                'alias': 'thai'
            }
        ] 
    });
        
    const {restaurants, loading, error} = useFetchRestaurants(offset, filters.categories);

    const loadNextPage = () => {
        setOffset(offset + 20);
    }

    let filteredRestaurants = [...restaurants];

    if(filters.openNow) { //open now filter
        filteredRestaurants = filteredRestaurants.filter(r => r.is_closed !== true)
    }

    let checkedPrices = filters.prices.map( p => {
        if (p.value === true) {
            return p.label;
        }
    });

    checkedPrices = checkedPrices.filter( a => a !== undefined);
    
    if(!checkedPrices.every( p => p===undefined)) { //prices filter
        filteredRestaurants = filteredRestaurants.filter( r => {
            return  checkedPrices.includes(r.price);
        })
    }

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
            <Filters filters={filters} setFilters={setFilters} setOffset={setOffset}/>
            <RestaurantList restaurants={filteredRestaurants}/>
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
                !loading && (
                    <div className={styles.btnContainer}>
                        <button className={styles.btnLoadMore} onClick={loadNextPage}>
                            LOAD MORE
                        </button>
                    </div>
                )
            }
            
        </>
    );
}
 
export default Main;