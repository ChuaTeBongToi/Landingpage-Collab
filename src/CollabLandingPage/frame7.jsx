import React from "react";
import style from './landingPage.module.css'
import hand from './HAND.png'
import leftArrow from './Left arrow12345.png'
import rightArrow from './1234Right arrow button.png'
import group from './Group 286.png'
import graphic from './1234Graphic.png'
import calendar from './Grap13245hic.png'

export default function frame7() {
    return (
        <div className={style.frame7}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className={style.typography}>
                    <p>Design Techonology</p>
                    <h1>Enrich your desgin workflow.</h1>
                    <h2>Design anything from simple icons to fully featured websites and applications</h2>
                </div>
                <img src={hand} alt=""></img>
            </div>
            <div>
                <div style={{ display: 'flex', marginLeft: '15%' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L12 9" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 5L12 2L15 5" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 22L12 15" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 19L12 22L15 19" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 15L6 15C4.34315 15 3 13.6569 3 12C3 10.3432 4.34314 9 6 9L21 9" stroke="#27272E" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p style={{
                        color: 'var(--text-grey, #999FAE)',
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        letterSpacing: '-0.64px',
                        marginLeft: '15px'
                    }}>Using Collab</p>
                    <div style={{ display: 'flex', position: 'relative', gap: '10px', marginLeft: 'auto', right: '15%' }}>
                        <img style={{ cursor: 'pointer' }} src={leftArrow} alt=""></img>
                        <img style={{ cursor: 'pointer' }} src={rightArrow} alt=""></img>
                    </div>
                </div>
            </div>
            <div>
                <ul style={{ marginTop: '50px', display: 'flex', gap: '100px', justifyContent: 'center' }}>
                    <li className={style.featureCard}>
                        <div style={{ marginBottom: '50px' }}>
                            <svg style={{ position: 'relative', zIndex: '0' }} xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220" fill="none">
                                <circle cx="110" cy="110" r="110" fill="#5956E9" />
                            </svg>
                            <img style={{ width: '127px', height: '109px', position: 'absolute', zIndex: '2', transform: 'translate(-130%, 50%)' }} src={group} alt=""></img>
                        </div>
                        <div className={style.featureCardCtn}>
                            <p>Design</p>
                            <h1>Automation Color Picker</h1>
                            <h2>Use the smart color picker to easilly select and apply colors</h2>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <h3>Get started</h3>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="arrow" d="M1 1L7 7L1 13" stroke="#27272E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li className={style.featureCard}>
                        <div style={{ marginBottom: '50px' }}>
                            <svg style={{ position: 'relative', zIndex: '0' }} xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220" fill="none">
                                <circle cx="110" cy="110" r="110" fill="#5956E9" />
                            </svg>
                            <img style={{ width: '127px', height: '109px', position: 'absolute', zIndex: '2', transform: 'translate(-130%, 50%)' }} src={group} alt=""></img>
                        </div>
                        <div className={style.featureCardCtn}>
                            <p>Design</p>
                            <h1>Automation Color Picker</h1>
                            <h2>Use the smart color picker to easilly select and apply colors</h2>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <h3>Get started</h3>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="arrow" d="M1 1L7 7L1 13" stroke="#27272E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li className={style.featureCard}>
                        <div style={{ marginBottom: '50px' }}>
                            <svg style={{ position: 'relative', zIndex: '0' }} xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220" fill="none">
                                <circle cx="110" cy="110" r="110" fill="#5956E9" />
                            </svg>
                            <img style={{ width: '127px', height: '109px', position: 'absolute', zIndex: '2', transform: 'translate(-130%, 50%)' }} src={group} alt=""></img>
                        </div>
                        <div className={style.featureCardCtn}>
                            <p>Design</p>
                            <h1>Automation Color Picker</h1>
                            <h2>Use the smart color picker to easilly select and apply colors</h2>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <h3>Get started</h3>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="arrow" d="M1 1L7 7L1 13" stroke="#27272E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className={style.research}>
                    <h1>Research & background, summary</h1>
                    <p>Collab is fast. Files are always up to date and ready for production</p>
                    <div className={style.researchContent}>
                        <div style={{marginLeft: '15%'}}>
                            <h1>
                                <span>16</span>
                                <span style={{ fontSize: '80px' }}> m</span>
                            </h1>
                            <p>It’s easy to share designs across the organization, so collaboration is easy.</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px'}}>
                                <button>Play</button>
                                <hr></hr>
                                <h2>Find out more</h2>
                            </div>
                        </div>
                        <img src={graphic} alt=""></img>
                    </div>
                </div>
                <div className={style.researchCtn}>
                    <h1>Ready to use the smartest desgin tool?</h1>
                    <p>We offer flexible pricin options for freelancers and design teams</p>
                    <button>Try free for 30 days</button>
                </div>
            </div>
        </div>
    )
}