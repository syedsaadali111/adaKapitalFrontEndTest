import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetchReviews = ( id ) => {
    
    const BASE_URL = 'http://localhost:3000/' + id + '/reviews';
    const [state, setState] = useState({reviews: [], loading: false});

    useEffect( () => {
        
        setState({...state, loading: true});

        axios.get(BASE_URL, {
        }).then( ( {data} ) => {
            setState({...state, reviews: data.reviews, total: data.total, loading: false});
        }).catch( (e) => {
            setState({...state, loading: false, error: e});
        });

    }, [])
    
    return state;

};

export default useFetchReviews;