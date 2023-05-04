import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { MovieDetails } from './components/movieDetails/MovieDetails';

const Main = () => {
return (         
    <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/movie' element={<MovieDetails/>} />

    </Routes>
);
}
export default Main;