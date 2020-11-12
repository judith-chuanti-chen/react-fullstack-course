import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieslist } from './actions';
const Hooks = () => {
    // equivalent to mapStateToProps
    const movies = useSelector(state => state.movies);
    // equivalent to mapDispathToProps
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieslist());
    }, [dispatch]);
    return (
        <>
            <div>
                Hooks component
                <button onClick={ () => dispatch(getMovieslist())}>
                    GetMovies
                </button>
            </div>
        </>
    );
};

export default Hooks;