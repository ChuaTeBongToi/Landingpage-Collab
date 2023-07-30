import React from 'react';
import styles from './landingPage.module.css'
import camera from './Camera _.png'

export default function dropDownMenuElement() {
    return (
        <div id={styles.dropdownmenu}>
            <ul id={styles.dropdownlist}>
                <ul className={styles.dropdownitem}>
                    <h1>Features</h1>
                    <li>
                        <img src={camera} />
                        <h2>Collba Assistant</h2>
                        <p>Smart automation system</p>
                    </li>
                    <li>
                        <img src={camera} />
                        <h2>Collba Assistant</h2>
                        <p>Smart automation system</p>
                    </li>
                    <li>
                        <img src={camera} />
                        <h2>Collba Assistant</h2>
                        <p>Smart automation system</p>
                    </li>
                </ul>
            </ul>
        </div>
    )
}