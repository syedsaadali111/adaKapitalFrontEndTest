import {useEffect, useState} from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/search';

const useFetchRestaurants = ( offset, categories ) => {
    
    const [state, setState] = useState({restaurants: [], loading: false});

    useEffect( () => {

        if (offset === 0) {
            setState({...state, restaurants: [], loading: true});
        } else {
            setState({...state, loading: true});
        }

        const categoryAliases = getCategoryAliases(categories);
        
        const cancelToken1 = axios.CancelToken.source();
        axios.get(BASE_URL, {
            cancelToken: cancelToken1.token,
            params: {
                location: 'Las Vegas',
                offset: offset,
                categories: categoryAliases.join()
            },
        }).then( ( {data} ) => {    
            if (offset === 0) {
                setState({...state, restaurants: data.businesses, loading: false});
            } else {
                setState({...state, restaurants: [...state.restaurants, ...data.businesses], loading: false});
            }
        }).catch( (e) => {
            setState({...state, loading: false, error: e});
        });

        return () => {  //returned function runs everytime dependencies change, for clean-up
            cancelToken1.cancel();
        };
    }, [offset, categories])
    

    return state;

};

const getCategoryAliases = (categories)=>{

    const aliases = categories.map( (c) => {
        if(c.value) {
            return c.alias; 
        }
    });

    const filteredAliases = aliases.filter( a => a !== undefined);
    return filteredAliases;
}

export default useFetchRestaurants;
