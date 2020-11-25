import React, { useState, useCallback } from 'react';
import styles from './Filters.css';
import DropDownChecklist from '../DropDownChecklist/DropDownChecklist';

const Filters = ( {filters, setFilters, setOffset} ) => {

    const toggleOpenNow = () => {
        setFilters({...filters, openNow: !filters.openNow});
    }

    const setPrices = (itemIndex) => {
        let newPrices = [...filters.prices];
        newPrices = changeChecklistState(itemIndex, newPrices);
        setFilters({...filters, prices: newPrices});
    }

    const setCategories = (itemIndex) => {
        let newCategories = [...filters.categories];
        newCategories = changeChecklistState(itemIndex, newCategories);
        setFilters({...filters, categories: newCategories});
        setOffset(0);
    }

    const changeChecklistState = useCallback((itemIndex, newArray) => {
        if(itemIndex !== 0) {
            newArray[itemIndex] = {...newArray[itemIndex], value: !newArray[itemIndex].value};

            let allTrue = true;
            for (let i = 1; i < newArray.length; i++) {
                if(!newArray[i].value) {
                    allTrue = false;
                }
            }

            newArray[0].value = allTrue;

        } else {

            newArray[0] = {...newArray[0], value: !newArray[0].value};
            for (let i = 1; i < newArray.length; i++) {
                newArray[i] = {...newArray[i], value: newArray[0].value};
            }
        }

        return newArray;
    }, []);

    const clearFilters = () => {
        const newPrices = [...filters.prices];
        for(let i=0; i < newPrices.length; i++) {
            newPrices[i].value = false;
        }

        const newCategories = [...filters.categories];
        for(let i=0; i < newCategories.length; i++) {
            newCategories[i].value = false;
        }

        setFilters({...filters, openNow: false, categories: newCategories, prices: newPrices} );
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.label}>
                    <span>Filter By:</span>
                </div>
                <div className={styles.filterItem}>
                    <label className={styles.openContainer}>Open Now
                        <input type="checkbox" name="radio" checked={filters.openNow} onChange={toggleOpenNow}/>
                        <span className={styles.radioButton}></span>
                    </label>
                </div>
                <div className={styles.filterItem}>
                    <DropDownChecklist label="Price" items={filters.prices} setItems={setPrices}/>
                </div>
                <div className={styles.filterItem}>
                    <DropDownChecklist label="Categories" items={filters.categories} setItems={setCategories}/>
                </div>
            </div>
            <div className={styles.right}>
                <button className={styles.btnClear} onClick={clearFilters}>CLEAR ALL</button>
            </div>
        </div>
    );
}
 
export default Filters;