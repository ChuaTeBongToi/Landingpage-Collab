import React from 'react';
import './index.css'


function myNav() {
    return (
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
    )
}

export default myNav