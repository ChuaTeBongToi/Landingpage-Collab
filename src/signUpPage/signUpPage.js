import React from 'react';
import './signUpPage.css'

export default function signUpPage() {
    return (
        <div>
            <div id='sign-up-ctn'>
                <h1>Get in touch</h1>
                <p>Enter your detail below</p>
                <form>
                    <div className='input-ctn'>
                        <h2>Name</h2>
                        <input type='text' id='username'></input>
                    </div>
                    <div className='input-ctn'>
                        <h2>Password</h2>
                        <input type='password' id='password'></input>
                    </div>
                    <div className='input-ctn'>
                        <h2>Message</h2>
                        <input type='text' id='message'></input>
                    </div>
                    <button className='submit'>Send now</button>
                </form>
            </div>
        </div>
    )
}
