import React from 'react';
import header from './headerLandingPage';
import frame1 from './frame1';
import frame3 from './frame3';
import frame4 from './frame4';
import frame5 from './frame5';
import frame6 from './frame6';
import frame7 from './frame7';
import frame8 from './frame8';
import frame9 from './frame9';
import frame10 from './frame10';
import footer from './footer';

export default function landingPage() {
    return (
        <div>
            {header()}
            {frame1()}
            {frame3()}
            {frame4()}
            {frame5()}
            {frame6()}
            {frame7()}
            {frame8()}
            {frame9()}
            {frame10()}
            {footer()}
        </div>
    )
}