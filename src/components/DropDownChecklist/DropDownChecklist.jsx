import React, { useCallback, useRef, useEffect, useState } from 'react';
import styles from './DropDownChecklist.css';

const DropDownChecklist = ({ label, items, setItems}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null); //this holds a reference to the menu items

    const openMenu = (event) => {
        if(!isMenuOpen) {
            event.stopPropagation();
            setIsMenuOpen(true);
        }
    }

    const closeMenu = useCallback((event) => {  //using useCallback to memoize the function..
        if (!menuRef.current.contains(event.target)) {  //checking if click is not inside the menu itself
            setIsMenuOpen(false);
        }
    }, []);

    useEffect( () => {
        if (isMenuOpen) {
            document.addEventListener('click', closeMenu);
        } else {
            document.removeEventListener('click', closeMenu); //closeMenu() was memoized so that it can be passed correctly here!
        }
    }, [isMenuOpen]);

    return (
        <div className={styles.container}>
            <div className={styles.header} onClick={(event) => openMenu(event)}>
                <span className={styles.label}>{label}</span>
                <span className={`${styles.symbol} ${(isMenuOpen ? styles.open : styles.closed)}`}>^</span>
            </div>
            {isMenuOpen ?
                (
                    <div className={styles.menu} ref={menuRef}>
                        {items.map( (item, idx) => {
                            return (
                                <label key={idx} className={styles.checkBoxContainer}>{item.label}
                                    <input type="checkbox" name="checkbox" onChange={(e) => {setItems(idx)}} checked={item.value}/>
                                    <span className={styles.checkBox}></span>
                                </label>
                            )
                        })}
                    </div>
                ) : (null)
            }
            
        </div>
    );
}
 
export default DropDownChecklist;