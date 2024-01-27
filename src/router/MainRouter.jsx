import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../page/mainpage/MainPage';

function MainRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MainRouter;