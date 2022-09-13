import {
    BrowserRouter, Route, Routes
} from 'react-router-dom';

import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';
import Nav from './components/Nav';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/:name"
                    element={<PokemonDetail />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
