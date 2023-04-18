import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Tokens from './pages/Tokens'
import Pairs from './pages/Pairs'
import Account from './pages/Account'


const App = () => {
    return(
        <>
        <h1>
            HIIII I am everywhere
            TODO: replace this h1 with a sidebar/navbar
        </h1>
        
        <BrowserRouter>
            <Routes>
                <Route path="/cat-project/" element={<Home />} />        
                <Route path="/cat-project/about" element={<About />} />
                <Route path="/cat-project/tokens" element={<Tokens />} />
                <Route path="/cat-project/pairs" element={<Pairs />} />
                <Route path="/cat-project/account" element={<Account />} />
                <Route path="/cat-project/account/:address" element={<Account />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;

