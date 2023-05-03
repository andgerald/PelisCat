import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';

const Main = () => {
return (         
    <Routes>
        <Route path='/home' element={<Home/>} />
    </Routes>
);
}
export default Main;