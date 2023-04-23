import { Routes, Route } from 'react-router-dom';

import { CreateMovie } from "../pages/CreateMovie";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { User } from "../pages/User";

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/newMovie' element={<CreateMovie />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/profile' element={<User />} />
        </Routes>
    );
};