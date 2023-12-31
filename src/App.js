import React, { useState } from 'react';
import signUpPage from './signUpPage/signUpPage.js'
import SignIn from './signInPage.js';
import landingPage from './CollabLandingPage/landingPage.js';
import { BrowserRouter, Routes, Route, Router, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index='landingpage' element={landingPage()} />
        <Route path='SignIn' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}
