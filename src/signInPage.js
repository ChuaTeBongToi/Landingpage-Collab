import React, { useState } from 'react';
import './signInPage.css'
import userData from './userData';
import { useNavigate, useNavigation, useLocation, useActionData, Form } from "react-router-dom"
import landingPage from './CollabLandingPage/landingPage';
import background from './Login - Step 1.png'

export default function SignIn() {
    const [username, setUserName] = useState('');
    const [password, setPass] = useState('');
    const usersArray = userData.users.usersInfor
    const navigate = useNavigate()

    const handleAccountInput = event => {
        setUserName(event.target.value);
    };

    const handlePassInput = event => {
        setPass(event.target.value);
    };

    const [show, setShow] = useState(false);

    var check = 0;

    function handleSignIn() {
        for (var i = 0; i < usersArray.length; i++) {
            if (usersArray[i].account === username && usersArray[i].password === password) check = true;
        }
        check === true ? navigate('/landingPage') : setShow(1);
    }

    return (
        <div>
            <img src={background} id='background' alt='background'></img>
            <div className='nav'>
                <div className='logo'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon">
                            <rect id="Rectangle 272" width="40" height="40" rx="11.4286" fill="white" />
                            <g id="Group 142">
                                <circle id="Ellipse 755" cx="12.8569" cy="12.8569" r="5.71429" fill="#5956E9" />
                                <circle id="Ellipse 757" cx="12.8569" cy="27.143" r="5.71429" fill="#FFDEE4" />
                                <circle id="Ellipse 756" cx="27.143" cy="12.8569" r="5.71429" fill="#FAB8C4" />
                                <circle id="Ellipse 758" cx="27.143" cy="27.143" r="5.71429" fill="#5956E9" />
                            </g>
                        </g>
                    </svg>
                    <h1>
                        <span id='Collab'>Collab</span>
                        <span id='Collab-dot'>.</span>
                    </h1>
                </div>

                <div className='sign-up-ctn'>
                    <p>Not a member?</p>
                    <button>Sign up now</button>
                </div>
            </div>
            <div className='sologan'>
                <div className='left-sologan'>
                    <h1>The world most</h1>
                    <h1>powerful design tool.</h1>
                    <p>Create your own website with the Fastest Page Building Platform.</p>
                </div>
                <div className='right-sologan'>
                    <h1>
                        <span>Sign in to Collab</span>
                        <span id="Sologan-dot">.</span>
                    </h1>
                    <p>Enter your detail below</p>

                    <div className={show ? 'wrongInput' : 'block'}>
                        <p>Incorret password or username</p>
                    </div>

                    <div className='sign-in'>
                        <form autoComplete='off'>
                            <h2 className='form-p'>Username or email</h2>
                            <div className='input-ctn'>
                                <span className='input-form'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M3 6C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H5C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6H3ZM0 12C0 11.4477 0.447715 11 1 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H1C0.447715 13 0 12.5523 0 12ZM3 17C3 16.4477 3.44772 16 4 16H5C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18H4C3.44772 18 3 17.5523 3 17Z" fill="black" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 6C8.89543 6 8 6.89543 8 8V16C8 17.1046 8.89543 18 10 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H10ZM21.9257 8.31565C21.7632 8.02389 21.3868 7.91473 21.0849 8.07183L16 10.7186L10.9151 8.07183C10.6132 7.91473 10.2368 8.02389 10.0743 8.31565C9.91179 8.6074 10.0247 8.97127 10.3265 9.12837L15.7057 11.9283C15.8894 12.0239 16.1106 12.0239 16.2943 11.9283L21.6735 9.12837C21.9753 8.97127 22.0882 8.6074 21.9257 8.31565Z" fill="#5956E9" />
                                    </svg>
                                    <input autoComplete='off' id='account' type='text' onChange={handleAccountInput} placeholder='abcdexyz@gmail.com' />
                                </span>
                            </div>
                            <h2 className='form-p'>
                                <span>Password</span>
                                <span id='password-forget'>Forget password?</span>
                            </h2>
                            <div className='input-ctn'>
                                <span className='input-form'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10H18C19.1046 10 20 10.8954 20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V12C4 10.8954 4.89543 10 6 10H7V8ZM12 5C10.3431 5 9 6.34315 9 8V10H15V8C15 6.34315 13.6569 5 12 5Z" fill="#292930" />
                                    </svg>
                                    <input autoComplete="off" id='password' type='password' onChange={handlePassInput} placeholder='Password' />
                                </span>
                            </div>
                        </form>
                        <button id='signin-btn' onClick={handleSignIn}>Sign In</button>
                    </div>
                </div>
            </div>
            <div className='copyLeft'>
                <p>A product by</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="35" viewBox="0 0 39 35" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1967 1.23466C14.9446 0.283759 17.0554 0.283759 18.8033 1.23466L28.9366 6.74736C30.8247 7.7745 32 9.752 32 11.9016V22.3347C32 24.4843 30.8247 26.4618 28.9366 27.4889L18.8033 33.0016C17.0554 33.9525 14.9446 33.9525 13.1967 33.0016L3.06339 27.4889C1.17532 26.4618 0 24.4843 0 22.3347V11.9016C0 9.752 1.17532 7.7745 3.06338 6.74736L13.1967 1.23466Z" fill="#2B3036" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.6999 13.0756V17.1273C18.6999 20.6964 16.7859 22.4473 13.7621 22.4473C10.7383 22.4473 8.88867 20.6796 8.88867 17.2115V13.0756C8.88867 12.3517 9.43553 11.7793 10.1271 11.7793C10.8187 11.7793 11.3656 12.3517 11.3656 13.0756V17.1442C11.3656 19.0634 12.2824 20.0567 13.7943 20.0567C15.3062 20.0567 16.2229 19.0971 16.2229 17.2283V13.0756C16.2229 12.3517 16.7698 11.7793 17.4614 11.7793C18.153 11.7793 18.6999 12.3517 18.6999 13.0756ZM21.8724 22.3631C21.1808 22.3631 20.634 21.7907 20.634 21.0668V13.0756C20.634 12.3517 21.1808 11.7793 21.8724 11.7793C22.564 11.7793 23.1109 12.3517 23.1109 13.0756V21.0668C23.1109 21.7907 22.564 22.3631 21.8724 22.3631Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M31.5534 15.523C35.725 15.523 39.1068 12.0979 39.1068 7.87283C39.1068 3.64775 35.725 0.222656 31.5534 0.222656C27.3818 0.222656 24 3.64775 24 7.87283C24 12.0979 27.3818 15.523 31.5534 15.523Z" fill="#2D68FF" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M31.5552 10.89C32.831 10.89 33.7775 10.2331 33.7775 9.10952V9.09223C33.7775 8.37486 33.4318 7.98592 32.8474 7.66613C33.2919 7.38091 33.5799 6.99197 33.5799 6.34374V6.32646C33.5799 5.39301 32.7733 4.66699 31.5552 4.66699C30.3371 4.66699 29.5305 5.40165 29.5305 6.32646V6.34374C29.5305 6.99197 29.8186 7.38091 30.263 7.66613C29.654 7.95999 29.333 8.39215 29.333 9.12681V9.14409C29.333 10.1985 30.2795 10.89 31.5552 10.89ZM31.5552 7.22534C31.0532 7.22534 30.7322 6.90554 30.7322 6.48203V6.46475C30.7322 6.0931 31.0367 5.76466 31.5552 5.76466C32.0737 5.76466 32.3783 6.10174 32.3783 6.47339V6.49068C32.3783 6.91419 32.0573 7.22534 31.5552 7.22534ZM30.5593 9.04038C30.5593 9.45524 30.9297 9.79232 31.5552 9.79232C32.1807 9.79232 32.5511 9.46389 32.5511 9.04038V9.02309C32.5511 8.55636 32.1314 8.27979 31.5552 8.27979C30.9791 8.27979 30.5593 8.55636 30.5593 9.02309V9.04038Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}