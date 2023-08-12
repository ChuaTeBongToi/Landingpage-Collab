import React from "react";
import bg from './FEATURE BOX.png'
import styles from './landingPage.module.css'
import leftArrow from './Left Arrow1234.png'
import rightArrow from './Right Arrow.png'

export default function frame5() {
    return (
        <div className={styles.frame5}>
            <img src={bg} id={styles.background}></img>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '50px',
                paddingLeft: '30px',
                paddingBottom: '20px',
                width: 'fit-content',
                borderRadius: '24px',
                transform: 'translate(65%,40%)',
                background: '#FFF',
                position: 'relative'
            }}>
                <div className={styles.team}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="#FAB8C4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.16806 14.5548C5.8617 14.0953 5.98588 13.4744 6.44541 13.1681C6.90493 12.8617 7.5258 12.9859 7.83216 13.4454C8.98919 15.181 10.3544 16.0001 12.0001 16.0001C13.6458 16.0001 15.011 15.181 16.1681 13.4454C16.4744 12.9859 17.0953 12.8617 17.5548 13.1681C18.0143 13.4744 18.1385 14.0953 17.8322 14.5548C16.3225 16.8193 14.3544 18.0001 12.0001 18.0001C9.64578 18.0001 7.67769 16.8193 6.16806 14.5548Z" fill="#5956E9" />
                    </svg>
                    <p>Awesome feature</p>
                </div>
                <h1>Ultimate features</h1>
                <p style={{marginBottom: '30px'}}>It’s easy to share designs across the organization, so team collaboration is fast and easy.</p>
                <div className={styles.feature}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <rect width="56" height="56" rx="16" fill="#ECF2F6" />
                        <circle cx="38" cy="38" r="8" fill="#5956E9" />
                        <circle cx="18" cy="38" r="8" fill="#FAB8C4" />
                        <circle cx="38" cy="18" r="8" fill="#FAB8C4" />
                        <circle cx="18" cy="18" r="8" fill="#5956E9" />
                    </svg>
                    <h2>Awesonme website</h2>
                    <svg style={{marginLeft: 'auto' ,right: '20px'}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="black" />
                    </svg>
                </div>
                <div className={styles.feature}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                        <rect width="56" height="56" rx="16" fill="#ECF2F6" />
                        <circle cx="16" cy="40" r="12" fill="#FAB8C4" />
                        <circle cx="40" cy="16" r="12" fill="#5956E9" />
                    </svg>
                    <h2>Stunning interface</h2>
                    <svg style={{marginLeft: 'auto' ,right: '20px'}} xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="black" />
                    </svg>
                </div>
                <div style={{
                    marginTop: '30px',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center'
                }}>
                    <img src={leftArrow} alt="" />
                    <img src={rightArrow} alt="" />
                    <button>Get started</button>
                </div>
            </div>
        </div >
    )
}