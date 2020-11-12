import React from 'react';
import { connect } from 'react-redux';
import { getMovieslist } from './actions';



const Functional = ({movies, getMovieslist}) => {
    console.log(movies);
    return(
        <>
        <div>
            functional component
        </div>
        <button onClick={() => {getMovieslist()}}>
            Get movies
        </button>
        </>
    );
};

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = {getMovieslist};

export default connect(mapStateToProps, mapDispatchToProps)(Functional);