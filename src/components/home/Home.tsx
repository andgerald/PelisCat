import MostRecentMovie from './MostRecentMovie';
import AllMovies from './AllMovies';

import '../../styles/components/Home.css';

export const Home = () => {
  return (
    <div className="homeContainer">
      <MostRecentMovie />
      <AllMovies />
    </div>
  );
};
