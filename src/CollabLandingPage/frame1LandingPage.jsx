import React from 'react';
import './landingPage.module.css'
import background from './DARK FEATURES.png'
import styles from './landingPage.module.css'
import camera from './Camera _.png'
import calendar from './Calendar _.png'
import leftArrow from './Left arrow.png'
import rightArrow from './Right arrow button.png'

export default function frame1() {
    return (
        <div id={styles.frame1root}>
            <img src={background} id={styles.background} style={{ zIndex: -1 }} alt="background"></img>
            <div id={styles.frame1Ctn}>
                <p>Features</p>
                <div>
                    <h1>The world's most powerful design tool.</h1>
                    <h2>Simultaneously design, code and collaborate with your team all from one place.</h2>
                </div>
            </div>
            <ul id={styles.frame1list}>
                <li id={styles.frame1item}>
                    <div>
                        <img src={leftArrow}></img>
                        <img src={rightArrow}></img>
                    </div>
                </li>
                <li>
                    <img src={camera}></img>
                    <h1>Import Photos & Videos</h1>
                    <p>Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
                    <h2>Find out more</h2>
                </li>
                <li>
                    <img src={calendar}></img>
                    <h1>Calendar API Built-In</h1>
                    <p>Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</p>
                    <h2>Find out more</h2>
                </li>
            </ul>
        </div>
    )
}