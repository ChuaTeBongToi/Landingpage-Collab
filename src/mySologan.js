import React, { useState } from 'react';
import './index.css'
import userData from './userData';

export default function Sologan() {

    /*const AccountInputDiv = <div id='acount-input'>
        <input type='text' id='account' placeholder='WibuYourName'></input>
    </div>

    const passwordInputDiv = <div id='password-input'>
        <input type='password' id='password' placeholder='PassWord'></input>
    </div>

    const ggSignIn = <div id='gg-sign-in'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <g clip-path="url(#clip0_368_7425)">
                <path d="M32.0004 16.6988C32.0004 15.5891 31.9104 14.4735 31.7185 13.3818H16.3213V19.6679H25.1385C24.7726 21.6952 23.597 23.4887 21.8756 24.6283V28.707H27.1359C30.2249 25.8639 32.0004 21.6652 32.0004 16.6988Z" fill="#4285F4" />
                <path d="M16.3208 32.648C20.7235 32.648 24.4363 31.2025 27.1415 28.7073L21.8811 24.6285C20.4176 25.6242 18.5282 26.188 16.3268 26.188C12.0682 26.188 8.4573 23.3149 7.1617 19.4521H1.7334V23.6568C4.50453 29.1691 10.1488 32.648 16.3208 32.648Z" fill="#34A853" />
                <path d="M7.15583 19.4518C6.47205 17.4244 6.47205 15.2291 7.15583 13.2018V8.99707H1.73353C-0.581749 13.6096 -0.581749 19.0439 1.73353 23.6565L7.15583 19.4518Z" fill="#FFDC60" />
                <path d="M16.3208 6.4601C18.6481 6.42412 20.8974 7.29984 22.5829 8.90734L27.2434 4.2468C24.2924 1.47566 20.3756 -0.0478615 16.3208 0.000123486C10.1488 0.000123486 4.50453 3.47904 1.7334 8.99731L7.1557 13.202C8.4453 9.33321 12.0622 6.4601 16.3208 6.4601Z" fill="#EA4335" />
            </g>
            <defs>
                <clipPath id="clip0_368_7425">
                    <rect width="32" height="32.6478" fill="white" />
                </clipPath>
            </defs>
        </svg>
        <p>Sign in with Google</p>
    </div>

    const emailSignIn = <div id='email-sign-in'>
        <p>Sign in with your email</p>
    </div>*/
    const [username, setUserName] = useState('');
    const [password, setPass] = useState('');

    const handleAccountInput = event => {
        setUserName(event.target.value);
    };

    const handlePassInput = event => {
        setPass(event.target.value);
    };

    function handleSignIn() {
        const usersArray = userData.users.usersInfor
        var check = 0
        for (var i = 0; i < usersArray.length; i++) {
            if (usersArray[i].account == username && usersArray[i].password == password) check = 1;
        }
        if (check == 1) alert('Welcom to "World Of Wibu"!')
        else alert('NGU! Co cai mat khau cx nhap sai')
    }

    return (
        <div className='sologan'>
            <div className='left-sologan'>
                <h1>The world most</h1>
                <h1>powerful design tool.</h1>
                <p>Create your own website with the Fastest Page Building Platform.</p>
            </div>
            <div className='right-sologan'>
                <h1>
                    <span>Let the team work in same place</span>
                    <span id="Sologan-dot">.</span>
                </h1>
                <p>Most powerful design tool</p>
                <form>
                    <input autoComplete='off' id='account' type='text' onChange={handleAccountInput}/>
                    <input autoComplete='off' id='password' type='password' onChange={handlePassInput}/>
                </form>
                <button onClick={handleSignIn}>Alo</button>
                <div className='sign-in'>
                    <p id='password-forget'>Forget password?</p>
                </div>
            </div>
        </div>
    )
}