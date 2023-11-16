import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../page/mainpage/MainPage';
import AboutMe from '../page/AboutMe';
import Portfolio from '../page/Portfolio';

function MainRouter() {
    return (
        <><BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default MainRouter;