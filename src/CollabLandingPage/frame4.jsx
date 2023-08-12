import React from "react";
import styles from './landingPage.module.css'
import leftArrow from './Left Arrow1234.png'
import rightArrow from './Right Arrow.png'
import avatar from './Image.png'
import graphic from './Graphic.png'
import bg from './FEATURE BOX.png'

export default function frame4() {
    return (
        <div className={styles.frame4}>
            <div>
                <h6>Team Collaboration Redefined</h6>
                <h1>
                    <span>Helping world-class teams design faster together</span>
                    <span style={{ color: '#5956E9' }}>.</span>
                </h1>
            </div>
            <div style={{ display: 'flex' }}>
                <div>
                    <h2 style={{
                        marginBottom: '30px',
                        width: '230px',
                        color: '#292930',
                        fontFamily: 'DM Sans',
                        fontSize: '40px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: '100%',
                        letterSpacing: '-1.8px',
                    }}>What others are saying</h2>
                    <img alt="qwerqwre" src={leftArrow} style={{ marginRight: '10px' }}></img>
                    <img alt="qwerqwre" src={rightArrow}></img>
                </div>
                <div className={styles.commentListCtn}>
                    <div className={styles.commentList}>
                        <p className={styles.username} style={{ color: '#C75C6F' }}>UI8</p>
                        <h3 className={styles.comment}>“ Collab is fast. Files are always up to date.It’s easy to share designs across the organization, so collaboration is easy ”</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <img src={avatar} alt="qwerqwre"></img>
                            <div>
                                <p className={styles.nickname}>Dash</p>
                                <p className={styles.founder}>Founder @UI8</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.commentList}>
                        <p className={styles.username} style={{ color: '#C75C6F' }}>UI8</p>
                        <h3 className={styles.comment}>“ Collab is fast. Files are always up to date.It’s easy to share designs across the organization, so collaboration is easy ”</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <img src={avatar} alt="qwerqwre"></img>
                            <div>
                                <p className={styles.nickname}>Dash</p>
                                <p className={styles.founder}>Founder @UI8</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.commentList}>
                        <p className={styles.username} style={{ color: '#C75C6F' }}>UI8</p>
                        <h3 className={styles.comment}>“ Collab is fast. Files are always up to date.It’s easy to share designs across the organization, so collaboration is easy ”</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <img src={avatar} alt="qwerqwre"></img>
                            <div>
                                <p className={styles.nickname}>Dash</p>
                                <p className={styles.founder}>Founder @UI8</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.commentList}>
                        <p className={styles.username} style={{ color: '#C75C6F' }}>UI8</p>
                        <h3 className={styles.comment}>“ Collab is fast. Files are always up to date.It’s easy to share designs across the organization, so collaboration is easy ”</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <img src={avatar} alt="qwerqwre"></img>
                            <div>
                                <p className={styles.nickname}>Dash</p>
                                <p className={styles.founder}>Founder @UI8</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', gap: '200px' }}>
                <div className={styles.fast}>
                    <p>Collab is fast, super fast</p>
                    <h2>
                        <span>Speed up your workflow</span>
                        <span style={{color: '#5956E9'}}>.</span>
                    </h2>
                    <h5>Essentially no lag, no matter the size of the file, even on mobile devices.
                    </h5>
                    <h1 style={{width: 'auto'}}>
                        <span>8.1</span>
                        <span style={{fontSize: '80px'}}> x</span>
                    </h1>
                </div>
                <img src={graphic} alt="qwe234"></img>
            </div>
        </div>
    )
}