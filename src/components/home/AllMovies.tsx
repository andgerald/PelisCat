import React from 'react';
import AllMoviesNav from './AllMovies/AllMoviesNav';
import AllMoviesContainer from './AllMovies/AllMoviesContainer';
import './../../styles/components/Home.css';
const AllMovies = () => {
  return (
    <div className="p-3 m-3">
      <AllMoviesNav />
      <div className="p-4">
        <AllMoviesContainer />
      </div>
    </div>
  );
};

export default AllMovies;
