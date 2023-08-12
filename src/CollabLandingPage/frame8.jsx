import React from "react";
import style from "./landingPage.module.css"
import calendar from "./Grap13245hic.png"
import timeLine from './TIME-LINE.png'
import { useState } from "react";

export default function Frame8() {
    const [display, setDisplay] = useState(Array.from({ length: 6 }).fill('none'))

    const changeDisplay = (idx) => {
        let t;
        t = [...display];
        for (var i = 0; i < display.length; i++) {
            t[i] = 'none';
            setDisplay(t[i])
        }
        (display[idx] === 'none') ? t[idx] = 'block' : t[idx] = 'none';
        setDisplay(t);
    }

    const plus = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1 8H15" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 1V15" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    const minus = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
        <path d="M1 1H15" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    return (
        <div>
            <div className={style.roadMap}>
                <div>
                    <h2>Roadmap</h2>
                    <h1>
                        <span>All system are a go</span>
                        <span>.</span>
                    </h1>
                    <p>Find out where we are on the path to achieving the ultimate design tool.</p>
                </div>
                <img src={calendar} alt=""></img>
            </div>
            <img src={timeLine} alt="" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}></img>
            <div className={style.listAndToggle}>
                <div className={style.textList}>
                    <h1>Techonological maturity.</h1>
                    <p>Collab is fast. Files are always up to date
                        and ready for production. </p>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="10" fill="#FAB8C4" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.6999 7.28579C14.0944 7.67235 14.1008 8.30548 13.7142 8.69993L8.81423 13.6999C8.61776 13.9004 8.34607 14.0091 8.06553 13.9994C7.78499 13.9897 7.52144 13.8626 7.33925 13.649L5.23925 11.1875C4.88081 10.7673 4.93083 10.1361 5.35099 9.7777C5.77115 9.41925 6.40234 9.46928 6.76078 9.88943L8.15112 11.5191L12.2858 7.30007C12.6724 6.90562 13.3055 6.89923 13.6999 7.28579Z" fill="white" />
                            </svg>
                            <h5>Collab Cloud</h5>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="10" fill="#5956E9" />
                                <path d="M6 10.5385L8.1 13L13 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h5>Collab Design</h5>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="10" fill="#FAB8C4" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.6999 7.28579C14.0944 7.67235 14.1008 8.30548 13.7142 8.69993L8.81423 13.6999C8.61776 13.9004 8.34607 14.0091 8.06553 13.9994C7.78499 13.9897 7.52144 13.8626 7.33925 13.649L5.23925 11.1875C4.88081 10.7673 4.93083 10.1361 5.35099 9.7777C5.77115 9.41925 6.40234 9.46928 6.76078 9.88943L8.15112 11.5191L12.2858 7.30007C12.6724 6.90562 13.3055 6.89923 13.6999 7.28579Z" fill="white" />
                            </svg>
                            <h5>Collab Share</h5>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="10" fill="#5956E9" />
                                <path d="M6 10.5385L8.1 13L13 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h5>Collab Code</h5>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={style.toggle}>
                        <li onClick={() => changeDisplay(0)} className={style.toggleItem} style={{
                            boxShadow: (display[0] === 'block') ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px' : 'none'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                backgroundColor: (display[0] === 'block') ? '#5956E9' : '#FFF',
                                padding: (display[0] === 'block') ? '20px' : '0px',
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <rect width="32" height="32" rx="9.14286" fill="#ECF2F6" />
                                    <circle cx="9.14328" cy="22.8571" r="6.85714" fill="#FAB8C4" />
                                    <circle cx="22.8571" cy="9.14279" r="6.85714" fill="#5956E9" />
                                </svg>
                                <p style={{ color: (display[0] === 'block') ? '#FFF' : '#27272E' }}>In research</p>
                                {(display[0] === 'block') ? minus : plus}
                            </div>
                            <ul style={{display: display[0], marginLeft: '20px' }}>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px', marginTop: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Video uploads</p>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Import from Sketch</p>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Cloud-base component builder with full functionality for teams.</p>
                                </li>
                            </ul>
                        </li>

                        <li onClick={() => changeDisplay(1)} className={style.toggleItem} style={{
                            boxShadow: (display[1] === 'block') ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px' : 'none'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                backgroundColor: (display[1] === 'block') ? '#5956E9' : '#FFF',
                                padding: (display[1] === 'block') ? '20px' : '0px',
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <rect width="32" height="32" rx="9.14286" fill="#ECF2F6" />
                                    <circle cx="9.14328" cy="22.8571" r="6.85714" fill="#FAB8C4" />
                                    <circle cx="22.8571" cy="9.14279" r="6.85714" fill="#5956E9" />
                                </svg>
                                <p style={{ color: (display[1] === 'block') ? '#FFF' : '#27272E' }}>Drafted</p>
                                {(display[1] === 'block') ? minus : plus}
                            </div>
                            <ul style={{ display: display[1], marginLeft: '20px' }}>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px', marginTop: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Video uploads</p>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Import from Sketch</p>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Cloud-base component builder with full functionality for teams.</p>
                                </li>
                            </ul>
                        </li>

                        <li onClick={() => changeDisplay(2)} className={style.toggleItem} style={{
                            boxShadow: (display[2] === 'block') ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px' : 'none'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                backgroundColor: (display[2] === 'block') ? '#5956E9' : '#FFF',
                                padding: (display[2] === 'block') ? '20px' : '0px',
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <rect width="32" height="32" rx="9.14286" fill="#ECF2F6" />
                                    <circle cx="9.14328" cy="22.8571" r="6.85714" fill="#FAB8C4" />
                                    <circle cx="22.8571" cy="9.14279" r="6.85714" fill="#5956E9" />
                                </svg>
                                <p style={{ color: (display[2] === 'block') ? '#FFF' : '#27272E' }}>In development</p>
                                {(display[2] === 'block') ? minus : plus}
                            </div>
                            <ul style={{ display: display[2], marginLeft: '20px' }}>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px', marginTop: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Video uploads</p>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Import from Sketch</p>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Cloud-base component builder with full functionality for teams.</p>
                                </li>
                            </ul>
                        </li>

                        <li onClick={() => changeDisplay(3)} className={style.toggleItem} style={{
                            boxShadow: (display[3] === 'block') ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px' : 'none'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                backgroundColor: (display[3] === 'block') ? '#5956E9' : '#FFF',
                                padding: (display[3] === 'block') ? '20px' : '0px',
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <rect width="32" height="32" rx="9.14286" fill="#ECF2F6" />
                                    <circle cx="9.14328" cy="22.8571" r="6.85714" fill="#FAB8C4" />
                                    <circle cx="22.8571" cy="9.14279" r="6.85714" fill="#5956E9" />
                                </svg>
                                <p style={{ color: (display[3] === 'block') ? '#FFF' : '#27272E' }}>Proposed</p>
                                {(display[3] === 'block') ? minus : plus}
                            </div>
                            <ul style={{ display: display[3], marginLeft: '20px' }}>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px', marginTop: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Video uploads</p>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Import from Sketch</p>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Cloud-base component builder with full functionality for teams.</p>
                                </li>
                            </ul>
                        </li>

                        <li onClick={() => changeDisplay(4)} className={style.toggleItem} style={{
                            boxShadow: (display[4] === 'block') ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px' : 'none'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                backgroundColor: (display[4] === 'block') ? '#5956E9' : '#FFF',
                                padding: (display[4] === 'block') ? '20px' : '0px',
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <rect width="32" height="32" rx="9.14286" fill="#ECF2F6" />
                                    <circle cx="9.14328" cy="22.8571" r="6.85714" fill="#FAB8C4" />
                                    <circle cx="22.8571" cy="9.14279" r="6.85714" fill="#5956E9" />
                                </svg>
                                <p style={{ color: (display[4] === 'block') ? '#FFF' : '#27272E' }}>Completed</p>
                                {(display[4] === 'block') ? minus : plus}
                            </div>
                            <ul style={{ display: display[4], marginLeft: '20px' }}>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px', marginTop: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Video uploads</p>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Import from Sketch</p>
                                </li>
                                <li style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93457 9.67469L10.702 13.647C10.7749 13.6898 10.8513 13.7207 10.9291 13.7403V21.4444L4.41723 17.5264C4.11806 17.3465 3.93457 17.0193 3.93457 16.6659V9.67469ZM19.6723 9.56909V16.6659C19.6723 17.0193 19.4888 17.3465 19.1896 17.5264L12.6777 21.4444V13.6728C12.6936 13.6647 12.7093 13.6562 12.7249 13.647L19.6723 9.56909Z" fill="#5956E9" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.14697 7.74659C4.22964 7.64046 4.33397 7.55077 4.45561 7.4849L11.3409 3.75655C11.6299 3.60003 11.9766 3.60003 12.2656 3.75655L19.1509 7.4849C19.2447 7.53567 19.3281 7.60061 19.3993 7.67631L11.8504 12.1073C11.8008 12.1365 11.755 12.1698 11.7133 12.2066C11.6716 12.1698 11.6258 12.1365 11.5762 12.1073L4.14697 7.74659Z" fill="#FAB8C4" />
                                    </svg>
                                    <p>Cloud-base component builder with full functionality for teams.</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}