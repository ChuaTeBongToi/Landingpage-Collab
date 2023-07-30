import React from 'react';
import './landingPage.module.css'
import header from './headerLandingPage';
import frame1 from './frame1LandingPage';

export default function landingPage() {
    return (
         <div>
            {header()}
            {frame1()}
         </div>
    )
}