import React, { useState } from 'react';
import styles from './Filters.css';
import DropDownChecklist from '../DropDownChecklist/DropDownChecklist';

const Filters = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [categories, setCategories] = useState([
        "All",
        "Italian",
        "Seafood",
        "Steakhouse",
        "Japanese",
        "American",
        "Mexican",
        "Thai"
    ]);
    const prices = [
        "All",
        "$",
        "$$",
        "$$$",
        "$$$$"
    ];
    const [selected, setSelected] = useState([]);
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.label}>
                    <span>Filter By:</span>
                </div>
                <div className={styles.filterItem}>
                    <label className={styles.openContainer}>Open Now
                        <input type="checkbox" name="radio" checked={isOpen} onChange={() => setIsOpen(!isOpen)}/>
                        <span className={styles.radioButton}></span>
                    </label>
                </div>
                <div className={styles.filterItem}>
                    <DropDownChecklist label="Price" items={prices}/>
                </div>
                <div className={styles.filterItem}>
                    <DropDownChecklist label="Categories" items={categories}/>
                </div>
            </div>
            <div className={styles.right}>
                <button className={styles.btnClear}>CLEAR ALL</button>
            </div>
        </div>
    );
}
 
export default Filters;