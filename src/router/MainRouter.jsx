import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { About } from '../pages/About';
import { Reservas } from '../pages/Reservas';
import { Admin } from '../pages/Admin';

export const MainRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/reservas' element={<Reservas />} />
            <Route path='/admin' element={<Admin />} />

            <Route path='*' element={<h1>Error 404 - Pagina no existe</h1>} />
        </Routes>
    );
};
