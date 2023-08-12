import React from "react";
import style from './landingPage.module.css'
import lamp from './- Lamp.png'
import chatbox from './Chatbox.png'
import { useState } from "react";
import showcase from './Showcase.png'
import asset from './3D Assets.png'

export default function Frame10() {
    const [color, setColor] = useState(Array.from({ length: 4 }).fill('#292930'))

    const darkArrow = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
        <path d="M1 1L7 7L1 13" stroke="#292930" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    const aquaArrow = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
        <path d="M1 1L7 7L1 13" stroke="#5956E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    function handleMouseEnter(idx) {
        let t = [...color];
        for (var i = 0; i < color.length; ++i) {
            t[i] = '#292930';
            setColor(t[i])
        }
        t[idx] = '#5956E9'
        setColor(t)
    }

    function handleMouseLeave(idx) {
        let t = [...color];
        t[idx] = '#292930'
        setColor(t)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', marginTop: '20%', justifyContent: 'center' }}>
                <div className={style.type}>
                    <p>Effortless</p>
                    <h1>Go from ideation to design and done.</h1>
                    <h3>Easily create truly responsive components while deploying production-ready code.</h3>
                </div>
                <img alt="" src={lamp}></img>
            </div>

            <div className={style.featureTable}>
                <div className={style.featureTableItem}  onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
                    <img src={chatbox} alt=""></img>
                    <div>
                        <h2>Asseets Library</h2>
                        <p>Get access to huge library of ready-made components and illustrations, free to use on all your projects.</p>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <h4 style={{ color: color[0] }}>Learn more</h4>
                            {color[0] === '#5956E9' ? aquaArrow : darkArrow}
                        </div>
                    </div>
                </div>
                <div className={style.featureTableItem} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                    <img src={chatbox} alt=""></img>
                    <div>
                        <h2>Asseets Library</h2>
                        <p>Get access to huge library of ready-made components and illustrations, free to use on all your projects.</p>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <h4 style={{ color: color[1] }}>Learn more</h4>
                            {color[1] === '#5956E9' ? aquaArrow : darkArrow}
                        </div>
                    </div>
                </div>
                <div className={style.featureTableItem} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                    <img src={chatbox} alt=""></img>
                    <div>
                        <h2>Asseets Library</h2>
                        <p>Get access to huge library of ready-made components and illustrations, free to use on all your projects.</p>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <h4 style={{ color: color[2] }}>Learn more</h4>
                            {color[2] === '#5956E9' ? aquaArrow : darkArrow}
                        </div>
                    </div>
                </div>
                <div className={style.featureTableItem} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseLeave(3)}>
                    <img src={chatbox} alt=""></img>
                    <div>
                        <h2>Asseets Library</h2>
                        <p>Get access to huge library of ready-made components and illustrations, free to use on all your projects.</p>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <h4 style={{ color: color[3] }}>Learn more</h4>
                            {color[3] === '#5956E9' ? aquaArrow : darkArrow}
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.showCase}>
                <div style={{ position: 'absolute', margin: '150px 150px' }}>
                    <p>Showcase</p>
                    <h1>
                        <span>Created with Collab</span>
                        <span>.</span>
                    </h1>
                    <h4>See what designers around the world are building with Collab.</h4>
                    <button>View more Projects</button>
                </div>
                <img src={showcase} alt=""></img>
            </div>

            <div className={style.finalCtn}>
                <div className={style.content}>
                    <h1>Ready to use the smartest design tool?</h1>
                    <p>We offer flexible pricing options for freelancing and design teams</p>
                    <button>Try free for 30 days</button>
                    <img src={asset} alt=""></img>
                </div>
            </div>
        </div>
    )
}