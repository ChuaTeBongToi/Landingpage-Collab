import React from 'react';
import './landingPage.module.css'
import Header from './HeaderLandingPage';
import frame1 from './frame1LandingPage';

export default function landingPage() {
    return (
         <div>
            {Header()}
            {frame1()}
         </div>
    )
}