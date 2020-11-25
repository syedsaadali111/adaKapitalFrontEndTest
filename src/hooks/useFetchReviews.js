import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetchReviews = ( id ) => {
    
    const BASE_URL = 'http://localhost:3000/' + id + '/reviews';
    const [state, setState] = useState({reviews: [], loading: false});

    useEffect( () => {
        
        setState({...state, loading: true});

        // const cancelToken1 = axios.CancelToken.source();
        axios.get(BASE_URL, {
            // cancelToken: cancelToken1.token,
        }).then( ( {data} ) => {
            setState({...state, reviews: data.reviews, total: data.total, loading: false});
        }).catch( (e) => {
            setState({...state, loading: false, error: e});
        });

        // return () => {  //returned function runs everytime dependencies change, for clean-up
        //     cancelToken1.cancel();
        // };
    }, [])
    
    return state;

};

export default useFetchReviews;