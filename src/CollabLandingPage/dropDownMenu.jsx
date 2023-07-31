import React from 'react';
import styles from './landingPage.module.css'
import camera from './Camera _.png'

export default function dropDownMenuElement() {
    return (
        <div id={styles.dropdownmenu}>
            <ul className={styles.dropdownlist}>
                <ul className={styles.dropdownitem}>
                    <h1>Features</h1>
                    <li>
                        <img src={camera} alt='img'/>
                        <div>
                            <h2>Collba Assistant</h2>
                            <p>Smart automation system</p>
                        </div>
                    </li>
                    <li>
                        <img src={camera} alt='img'/>
                        <div>
                            <h2>Advanced Importer</h2>
                            <p>Work with various media formats</p>
                        </div>
                    </li>
                    <li>
                        <img src={camera} alt='img'/>
                        <div>
                            <h2>Product Management</h2>
                            <p>Workspace reimagined</p>
                        </div>
                    </li>
                </ul>
                <hr></hr>
                <ul className={styles.dropdownitem}>
                    <h1>Features</h1>
                    <li>
                        <img src={camera} alt='img'/>
                        <div>
                            <h2>Support</h2>
                            <p>24/7 Live Support</p>
                        </div>
                    </li>
                    <li>
                        <img src={camera} alt='img'/>
                        <div>
                            <h2>Color Picker</h2>
                            <p>Advanced color picker</p>
                        </div>
                    </li>
                </ul>
                <hr></hr>
                <ul className={styles.dropdownitem}>
                    <h1>Company</h1>
                    <li>
                        <img src={camera} alt='img'/>
                        <div>
                            <h2>Collab Team</h2>
                            <p>See who’s behind the magic</p>
                        </div>
                    </li>
                    <li>
                        <img src={camera} alt='img'/>
                        <div>
                            <h2>Collab Design</h2>
                            <p>What we’re working on</p>
                        </div>
                    </li>
                </ul>
            </ul>
        </div>
    )
}