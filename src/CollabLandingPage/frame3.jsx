import React from 'react';
import './landingPage.module.css'
import styles from './landingPage.module.css'
import frame2 from './SIGN UP.png'
import graphic from './Graphic.png'
import prototype from './PROTOTYPE.png'
import { useState } from 'react';

export default function Frame3() {
    const [checkbox, setCheckBox] = useState(false)

    return (
        <div id={styles.frame3root}>
            <div id={styles.frame3content}>
                <div id={styles.frame3text}>
                    <h4>Auto adaptive layouts</h4>
                    <h1>
                        <span>Responsive DNA</span>
                        <span style={{ color: "#5956E9" }}>.</span>
                    </h1>
                    <p>Easily create truly responsive components while deploying production-ready code.</p>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                                <rect y="0.300781" width="56" height="56" rx="16" fill="#ECF2F6" />
                                <circle cx="18" cy="18.3008" r="8" fill="#5956E9" />
                                <circle cx="18" cy="38.3008" r="8" fill="#FAB8C4" />
                                <circle cx="38" cy="18.3008" r="8" fill="#FAB8C4" />
                                <circle cx="38" cy="38.3008" r="8" fill="#5956E9" />
                            </svg>
                            <h2>Advanced pinning</h2>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                                <rect y="0.300781" width="56" height="56" rx="16" fill="#5956E9" />
                                <circle cx="28" cy="28.3008" r="16" fill="#FAB8C4" />
                            </svg>
                            <h2>Relative positioning with containers</h2>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
                                <rect y="0.300781" width="56" height="56" rx="16" fill="#ECF2F6" />
                                <circle cx="16" cy="40.3008" r="12" fill="#FAB8C4" />
                                <circle cx="40" cy="16.3008" r="12" fill="#5956E9" />
                            </svg>
                            <h2>Percentage-based geometry</h2>
                        </li>
                    </ul>
                </div>
                <img src={graphic} alt='igm'></img>
            </div>
            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={prototype} alt='img'></img>
            <div id={styles.frame3plan}>
                <h2 id={styles.frame3h2}>Join The Revolution</h2>
                <h1 id={styles.frame3h1}>
                    <span>Find the</span>
                    <span style={{ color: '#5956E9' }}> Right Plan.</span>
                </h1>
                <p id={styles.frame3p}>Flexible pricing options for freelancers and design teams.</p>

                <div style={{ display: 'flex', marginBottom: '40px', alignItems: 'center', justifyContent: 'center' }}>
                    <p className={checkbox ? styles.switchTextOff : styles.switchTextOn}>Billed yearly</p>
                    <input type='checkbox' className={styles.switchCheckBox} id={`react-switch-new`} />
                    <label onClick={() => { checkbox ? setCheckBox(false) : setCheckBox(true) }} className={styles.switchLabel} htmlFor={`react-switch-new`}>
                        <svg className={styles.switchButton} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="white" />
                        </svg>
                    </label>
                    <p className={checkbox ? styles.switchTextOn : styles.switchTextOff}>Billed monthly</p>
                </div>

                <ul id={styles.pricingList}>
                    <li className={styles.pricingListItem}>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect opacity="0.5" x="2" y="2" width="20" height="20" rx="10" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.16806 14.5548C5.8617 14.0953 5.98588 13.4744 6.44541 13.1681C6.90493 12.8617 7.5258 12.9859 7.83216 13.4454C8.98919 15.181 10.3544 16.0001 12.0001 16.0001C13.6458 16.0001 15.011 15.181 16.1681 13.4454C16.4744 12.9859 17.0953 12.8617 17.5548 13.1681C18.0143 13.4744 18.1385 14.0953 17.8322 14.5548C16.3225 16.8193 14.3544 18.0001 12.0001 18.0001C9.64578 18.0001 7.67769 16.8193 6.16806 14.5548Z" fill="#FFDC60" />
                            </svg><span>Individual</span>
                        </p>
                        <h1>Professional</h1>
                        <h2>
                            <span>$19.99  </span>
                            <span id={styles.month}> /month</span>
                        </h2>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67494L10.702 13.6473C10.7749 13.69 10.8513 13.7209 10.9291 13.7405V21.4447L4.41723 17.5267C4.11806 17.3467 3.93457 17.0195 3.93457 16.6661V9.67494ZM19.6723 9.56934V16.6661C19.6723 17.0195 19.4888 17.3467 19.1896 17.5267L12.6777 21.4447V13.673C12.6936 13.665 12.7093 13.6564 12.7249 13.6473L19.6723 9.56934Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.14746 7.74659C4.23012 7.64046 4.33446 7.55077 4.4561 7.4849L11.3413 3.75655C11.6304 3.60003 11.9771 3.60003 12.2661 3.75655L19.1514 7.4849C19.2451 7.53567 19.3286 7.60061 19.3998 7.67631L11.8509 12.1073C11.8013 12.1365 11.7555 12.1698 11.7138 12.2066C11.6721 12.1698 11.6263 12.1365 11.5767 12.1073L4.14746 7.74659Z" fill="#FAB8C4" />
                                </svg>
                                <h3>1 user</h3>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67494L10.702 13.6473C10.7749 13.69 10.8513 13.7209 10.9291 13.7405V21.4447L4.41723 17.5267C4.11806 17.3467 3.93457 17.0195 3.93457 16.6661V9.67494ZM19.6723 9.56934V16.6661C19.6723 17.0195 19.4888 17.3467 19.1896 17.5267L12.6777 21.4447V13.673C12.6936 13.665 12.7093 13.6564 12.7249 13.6473L19.6723 9.56934Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.14746 7.74659C4.23012 7.64046 4.33446 7.55077 4.4561 7.4849L11.3413 3.75655C11.6304 3.60003 11.9771 3.60003 12.2661 3.75655L19.1514 7.4849C19.2451 7.53567 19.3286 7.60061 19.3998 7.67631L11.8509 12.1073C11.8013 12.1365 11.7555 12.1698 11.7138 12.2066C11.6721 12.1698 11.6263 12.1365 11.5767 12.1073L4.14746 7.74659Z" fill="#FAB8C4" />
                                </svg>
                                <h3>2 TB of secure storage</h3>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67494L10.702 13.6473C10.7749 13.69 10.8513 13.7209 10.9291 13.7405V21.4447L4.41723 17.5267C4.11806 17.3467 3.93457 17.0195 3.93457 16.6661V9.67494ZM19.6723 9.56934V16.6661C19.6723 17.0195 19.4888 17.3467 19.1896 17.5267L12.6777 21.4447V13.673C12.6936 13.665 12.7093 13.6564 12.7249 13.6473L19.6723 9.56934Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.14746 7.74659C4.23012 7.64046 4.33446 7.55077 4.4561 7.4849L11.3413 3.75655C11.6304 3.60003 11.9771 3.60003 12.2661 3.75655L19.1514 7.4849C19.2451 7.53567 19.3286 7.60061 19.3998 7.67631L11.8509 12.1073C11.8013 12.1365 11.7555 12.1698 11.7138 12.2066C11.6721 12.1698 11.6263 12.1365 11.5767 12.1073L4.14746 7.74659Z" fill="#FAB8C4" />
                                </svg>
                                <h3>Premium productivity features and simple, secure file sharing</h3>
                            </li>
                        </ul>
                        <button>Try free for 30 days</button>
                    </li>
                    <li className={styles.pricingListItem}>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect opacity="0.5" x="2" y="2" width="20" height="20" rx="10" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.16806 14.5548C5.8617 14.0953 5.98588 13.4744 6.44541 13.1681C6.90493 12.8617 7.5258 12.9859 7.83216 13.4454C8.98919 15.181 10.3544 16.0001 12.0001 16.0001C13.6458 16.0001 15.011 15.181 16.1681 13.4454C16.4744 12.9859 17.0953 12.8617 17.5548 13.1681C18.0143 13.4744 18.1385 14.0953 17.8322 14.5548C16.3225 16.8193 14.3544 18.0001 12.0001 18.0001C9.64578 18.0001 7.67769 16.8193 6.16806 14.5548Z" fill="#FFDC60" />
                            </svg><span>Individual</span>
                        </p>
                        <h1>Professional</h1>
                        <h2>
                            <span>$19.99  </span>
                            <span id={styles.month}> /month</span>
                        </h2>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67494L10.702 13.6473C10.7749 13.69 10.8513 13.7209 10.9291 13.7405V21.4447L4.41723 17.5267C4.11806 17.3467 3.93457 17.0195 3.93457 16.6661V9.67494ZM19.6723 9.56934V16.6661C19.6723 17.0195 19.4888 17.3467 19.1896 17.5267L12.6777 21.4447V13.673C12.6936 13.665 12.7093 13.6564 12.7249 13.6473L19.6723 9.56934Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.14746 7.74659C4.23012 7.64046 4.33446 7.55077 4.4561 7.4849L11.3413 3.75655C11.6304 3.60003 11.9771 3.60003 12.2661 3.75655L19.1514 7.4849C19.2451 7.53567 19.3286 7.60061 19.3998 7.67631L11.8509 12.1073C11.8013 12.1365 11.7555 12.1698 11.7138 12.2066C11.6721 12.1698 11.6263 12.1365 11.5767 12.1073L4.14746 7.74659Z" fill="#FAB8C4" />
                                </svg>
                                <h3>1 user</h3>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67494L10.702 13.6473C10.7749 13.69 10.8513 13.7209 10.9291 13.7405V21.4447L4.41723 17.5267C4.11806 17.3467 3.93457 17.0195 3.93457 16.6661V9.67494ZM19.6723 9.56934V16.6661C19.6723 17.0195 19.4888 17.3467 19.1896 17.5267L12.6777 21.4447V13.673C12.6936 13.665 12.7093 13.6564 12.7249 13.6473L19.6723 9.56934Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.14746 7.74659C4.23012 7.64046 4.33446 7.55077 4.4561 7.4849L11.3413 3.75655C11.6304 3.60003 11.9771 3.60003 12.2661 3.75655L19.1514 7.4849C19.2451 7.53567 19.3286 7.60061 19.3998 7.67631L11.8509 12.1073C11.8013 12.1365 11.7555 12.1698 11.7138 12.2066C11.6721 12.1698 11.6263 12.1365 11.5767 12.1073L4.14746 7.74659Z" fill="#FAB8C4" />
                                </svg>
                                <h3>2 TB of secure storage</h3>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67494L10.702 13.6473C10.7749 13.69 10.8513 13.7209 10.9291 13.7405V21.4447L4.41723 17.5267C4.11806 17.3467 3.93457 17.0195 3.93457 16.6661V9.67494ZM19.6723 9.56934V16.6661C19.6723 17.0195 19.4888 17.3467 19.1896 17.5267L12.6777 21.4447V13.673C12.6936 13.665 12.7093 13.6564 12.7249 13.6473L19.6723 9.56934Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.14746 7.74659C4.23012 7.64046 4.33446 7.55077 4.4561 7.4849L11.3413 3.75655C11.6304 3.60003 11.9771 3.60003 12.2661 3.75655L19.1514 7.4849C19.2451 7.53567 19.3286 7.60061 19.3998 7.67631L11.8509 12.1073C11.8013 12.1365 11.7555 12.1698 11.7138 12.2066C11.6721 12.1698 11.6263 12.1365 11.5767 12.1073L4.14746 7.74659Z" fill="#FAB8C4" />
                                </svg>
                                <h3>Premium productivity features and simple, secure file sharing</h3>
                            </li>
                        </ul>
                        <button>Try free for 30 days</button>
                    </li>
                    <li className={styles.pricingListItem}>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect opacity="0.5" x="2" y="2" width="20" height="20" rx="10" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.16806 14.5548C5.8617 14.0953 5.98588 13.4744 6.44541 13.1681C6.90493 12.8617 7.5258 12.9859 7.83216 13.4454C8.98919 15.181 10.3544 16.0001 12.0001 16.0001C13.6458 16.0001 15.011 15.181 16.1681 13.4454C16.4744 12.9859 17.0953 12.8617 17.5548 13.1681C18.0143 13.4744 18.1385 14.0953 17.8322 14.5548C16.3225 16.8193 14.3544 18.0001 12.0001 18.0001C9.64578 18.0001 7.67769 16.8193 6.16806 14.5548Z" fill="#FFDC60" />
                            </svg><span>Individual</span>
                        </p>
                        <h1>Professional</h1>
                        <h2>
                            <span>$19.99  </span>
                            <span id={styles.month}> /month</span>
                        </h2>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67494L10.702 13.6473C10.7749 13.69 10.8513 13.7209 10.9291 13.7405V21.4447L4.41723 17.5267C4.11806 17.3467 3.93457 17.0195 3.93457 16.6661V9.67494ZM19.6723 9.56934V16.6661C19.6723 17.0195 19.4888 17.3467 19.1896 17.5267L12.6777 21.4447V13.673C12.6936 13.665 12.7093 13.6564 12.7249 13.6473L19.6723 9.56934Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.14746 7.74659C4.23012 7.64046 4.33446 7.55077 4.4561 7.4849L11.3413 3.75655C11.6304 3.60003 11.9771 3.60003 12.2661 3.75655L19.1514 7.4849C19.2451 7.53567 19.3286 7.60061 19.3998 7.67631L11.8509 12.1073C11.8013 12.1365 11.7555 12.1698 11.7138 12.2066C11.6721 12.1698 11.6263 12.1365 11.5767 12.1073L4.14746 7.74659Z" fill="#FAB8C4" />
                                </svg>
                                <h3>1 user</h3>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67494L10.702 13.6473C10.7749 13.69 10.8513 13.7209 10.9291 13.7405V21.4447L4.41723 17.5267C4.11806 17.3467 3.93457 17.0195 3.93457 16.6661V9.67494ZM19.6723 9.56934V16.6661C19.6723 17.0195 19.4888 17.3467 19.1896 17.5267L12.6777 21.4447V13.673C12.6936 13.665 12.7093 13.6564 12.7249 13.6473L19.6723 9.56934Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.14746 7.74659C4.23012 7.64046 4.33446 7.55077 4.4561 7.4849L11.3413 3.75655C11.6304 3.60003 11.9771 3.60003 12.2661 3.75655L19.1514 7.4849C19.2451 7.53567 19.3286 7.60061 19.3998 7.67631L11.8509 12.1073C11.8013 12.1365 11.7555 12.1698 11.7138 12.2066C11.6721 12.1698 11.6263 12.1365 11.5767 12.1073L4.14746 7.74659Z" fill="#FAB8C4" />
                                </svg>
                                <h3>2 TB of secure storage</h3>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67494L10.702 13.6473C10.7749 13.69 10.8513 13.7209 10.9291 13.7405V21.4447L4.41723 17.5267C4.11806 17.3467 3.93457 17.0195 3.93457 16.6661V9.67494ZM19.6723 9.56934V16.6661C19.6723 17.0195 19.4888 17.3467 19.1896 17.5267L12.6777 21.4447V13.673C12.6936 13.665 12.7093 13.6564 12.7249 13.6473L19.6723 9.56934Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.14746 7.74659C4.23012 7.64046 4.33446 7.55077 4.4561 7.4849L11.3413 3.75655C11.6304 3.60003 11.9771 3.60003 12.2661 3.75655L19.1514 7.4849C19.2451 7.53567 19.3286 7.60061 19.3998 7.67631L11.8509 12.1073C11.8013 12.1365 11.7555 12.1698 11.7138 12.2066C11.6721 12.1698 11.6263 12.1365 11.5767 12.1073L4.14746 7.74659Z" fill="#FAB8C4" />
                                </svg>
                                <h3>Premium productivity features and simple, secure file sharing</h3>
                            </li>
                        </ul>
                        <button>Try free for 30 days</button>
                    </li>
                </ul>
            </div>
        </div>
    )
} 