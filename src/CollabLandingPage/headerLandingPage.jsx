import React from "react";
import styles from './landingPage.module.css'
import navBackground from './HERO HEADER.png'
import dropDownMenuElement from './dropDownMenu'
import { useState } from 'react';

export default function Header() {
    const [display, setDisplay] = useState('none');

    function handleMouseEnter() {
        setDisplay('block')
    }

    function handleMouseLeave() {
        setTimeout(() => {
            setDisplay('none')
        }, 1000);
    }

    return (
        <div className="navRoot">
            <img src={navBackground} id={styles.background} alt="background"></img>
            <div className={styles.nav}>
                <ul>
                    <li id={styles.logo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" rx="11.4286" fill="white" />
                            <circle cx="12.8569" cy="12.8569" r="5.71429" fill="#5956E9" />
                            <circle cx="12.8569" cy="27.143" r="5.71429" fill="#FFDEE4" />
                            <circle cx="27.143" cy="12.8569" r="5.71429" fill="#FAB8C4" />
                            <circle cx="27.143" cy="27.143" r="5.71429" fill="#5956E9" />
                        </svg>
                        <h1>
                            <span style={{color: '#292930'}}>Collab</span>
                            <span>.</span>
                        </h1>
                    </li>

                    <li className={styles.navItemActivate}>
                        <p>Features</p>
                        <hr></hr>
                    </li>

                    <li className={styles.navItem}>
                        <p>Pricing</p>
                    </li>

                    <li className={styles.navItem}>
                        <p>Tours</p>
                    </li>

                    <li id={styles.exploreMenu} className={styles.navItem} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                        <p>Explore</p>
                        <div className={styles.dropdownmenuctn} style={{display: display}} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                            {dropDownMenuElement()}
                        </div>
                    </li>
                </ul>

                <div className={styles.navCtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11.7673 20.7563C16.7318 20.7563 20.7563 16.7318 20.7563 11.7673C20.7563 6.80283 16.7318 2.77832 11.7673 2.77832C6.80283 2.77832 2.77832 6.80283 2.77832 11.7673C2.77832 16.7318 6.80283 20.7563 11.7673 20.7563Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.0186 18.4854L21.5426 22.0004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <button>Get Started</button>
                </div>
            </div>
            <div className={styles.header}>
                <h1>
                    <span>Create Like</span>
                    <span style={{color: '#5956E9'}}>__ </span>
                    <span>Never Before</span>
                    <span style={{color: '#5956E9'}}>.</span>
                </h1>
                <p>Create, build, collaborate and ship products faster. Good bye code! 👋</p>
                <div className={styles.headerCtn}>
                    <button>Get Started</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_288_4899)">
                            <path d="M14.9997 3.99975H0.99975C0.866336 3.99173 0.732739 4.0121 0.607779 4.05952C0.482819 4.10694 0.369339 4.18032 0.274831 4.27483C0.180323 4.36934 0.106938 4.48282 0.0595197 4.60778C0.0121017 4.73274 -0.00826999 4.86634 -0.000250349 4.99975V14.9997C-0.00826999 15.1332 0.0121017 15.2668 0.0595197 15.3917C0.106938 15.5167 0.180323 15.6302 0.274831 15.7247C0.369339 15.8192 0.482819 15.8926 0.607779 15.94C0.732739 15.9874 0.866336 16.0078 0.99975 15.9997H14.9997C15.1332 16.0078 15.2668 15.9874 15.3917 15.94C15.5167 15.8926 15.6302 15.8192 15.7247 15.7247C15.8192 15.6302 15.8926 15.5167 15.94 15.3917C15.9874 15.2668 16.0078 15.1332 15.9998 14.9997V4.99975C16.0078 4.86634 15.9874 4.73274 15.94 4.60778C15.8926 4.48282 15.8192 4.36934 15.7247 4.27483C15.6302 4.18032 15.5167 4.10694 15.3917 4.05952C15.2668 4.0121 15.1332 3.99173 14.9997 3.99975ZM5.99975 12.9997V6.99975L10.9997 9.99975L5.99975 12.9997Z" fill="#5956E9" />
                            <path d="M3 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1V2H2V1C2 0.734784 2.10536 0.48043 2.29289 0.292893C2.48043 0.105357 2.73478 0 3 0V0Z" fill="#FAB8C4" />
                        </g>
                        <defs>
                            <clipPath id="clip0_288_4899">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>See It In Action!</p>
                </div>

                <div className={styles.scrollDiv}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L12 9" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 5L12 2L15 5" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 22L12 15" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 19L12 22L15 19" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 15L6 15C4.34315 15 3 13.6569 3 12C3 10.3432 4.34314 9 6 9L21 9" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>Scroll to explore</p>
                </div>
            </div>
        </div>
    )
}