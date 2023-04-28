import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Tokens from './pages/Tokens'
import Pairs from './pages/Pairs'
import Account from './pages/Account'
import NavBar from './components/NavBar';
import { getNavigationsValue } from '@ijl/cli';

import { ConfigProvider, theme } from 'antd';

const App = () => {
    return(
        <ConfigProvider theme={{
            token: {
              colorPrimary: '#E66201',
            },
          }}>
            <BrowserRouter>
                <NavBar/>

                <Routes>
                    <Route path={getNavigationsValue("cat.main")} element={<Home />} />        
                    <Route path={getNavigationsValue("cat.about")} element={<About />} />
                    <Route path={getNavigationsValue("cat.tokens")} element={<Tokens />} />
                    <Route path={getNavigationsValue("cat.pairs")} element={<Pairs />} />
                    <Route path={getNavigationsValue("cat.accounts")} element={<Account />} />
                    <Route path={getNavigationsValue("cat.accounts.address")} element={<Account />} />
                </Routes>
            </BrowserRouter>

            <style>
                {`
                    body {
                        background-color: #f5eddf;
                    }
                `}
            </style>
            
        </ConfigProvider>
    )
}

export default App;

