import MostRecentMovie from './MostRecentMovie';
import AllMovies from './AllMovies';

import '../../styles/components/Home.css';

export const Home = () => {
  return (
    <>
      <div className="navProvisorio p-4">AQUI VA EL NAV</div>
      <div className="homeContainer pt-4">
        <MostRecentMovie />
        <AllMovies />
      </div>
    </>
  );
};
