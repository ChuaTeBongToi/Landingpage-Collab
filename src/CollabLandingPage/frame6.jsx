import React from "react";
import style from "./landingPage.module.css"

export default function frame6() {
    return (
        <div className={style.frame6}>
            <div className={style.coupleFeature}>
                <h1>🔥</h1>
                <h4>We offer flexible pricing options for freelancers and design teams.</h4>
                <div style={{display: 'flex', gap: '20px'}}>
                    <div className={style.coupleFeatureItem} style={{
                        borderRadius: '40px',
                        border: '1px solid #E3E6E9',
                        background: 'var(--color-white, #FFF)'
                    }}>
                        <h1>Schedule Product Demo</h1>
                        <p>Still not sure? Schedule a demo to see how Collab can help you get more done.</p>
                        <button>Schedule a Demo</button>
                    </div>

                    <div className={style.coupleFeatureItem} style={{
                        borderRadius: '40px',
                        background: 'var(--color-primary, #5956E9)'
                    }}>
                        <h1 style={{color: '#FFF'}}>Schedule Product Demo</h1>
                        <p style={{color: '#FFF'}}>Still not sure? Schedule a demo to see how Collab can help you get more done.</p>
                        <button style={{backgroundColor: '#FFF', color: '#5956E9', boxShadow: '0px 48px 48px 0px rgba(0, 0, 0, 0.12), 0px 14px 20px 0px rgba(35, 34, 87, 0.40)'}}>Schedule a Demo</button>
                    </div>
                </div>
            </div>
        </div >
    )
}