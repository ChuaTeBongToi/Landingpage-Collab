import React from "react";
import bg from './CLIENTS.png'
import style from './landingPage.module.css'
import logo1 from './logo 1.png'
import logo2 from './logo 2.png'
import logo3 from './logo 3.png'
import logo4 from './logo 4.png'
import logo5 from './logo 5.png'
import logo6 from './logo 6.png'
import logo7 from './logo 7.png'
import logo8 from './logo 8.png'

export default function frame9() {
    return (
        <div>
            <div className={style.cilents}>
                <img src={bg} id={style.background} alt=""></img>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <p>Clients</p>
                    <div style={{ marginLeft: '30%' }}>
                        <h1>More than 68,219 designers use Collab.</h1>
                        <h5>Design anything from simple icons to fully featured websites and applications</h5>
                    </div>
                </div>
                <ul className={style.logoList}>
                    <li className={style.logo}>
                        <img src={logo1} alt=""></img>
                    </li>
                    <li className={style.logo}>
                        <img src={logo2} alt=""></img>
                    </li>
                    <li className={style.logo}>
                        <img src={logo3} alt=""></img>
                    </li>
                    <li className={style.logo}>
                        <img src={logo4} alt=""></img>
                    </li>
                    <li className={style.logo}>
                        <img src={logo5} alt=""></img>
                    </li>
                    <li className={style.logo}>
                        <img src={logo6} alt=""></img>
                    </li>
                    <li className={style.logo}>
                        <img src={logo7} alt=""></img>
                    </li>
                    <li className={style.logo}>
                        <img src={logo8} alt=""></img>
                    </li>
                </ul>
            </div>
        </div>
    )
}       