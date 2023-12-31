import React from "react";
import style from './landingPage.module.css'

export default function footer() {
    return (
        <div className={style.footer}>
            <ul>
                <li>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" rx="11.4286" fill="#5956E9" />
                            <circle opacity="0.5" cx="12.8569" cy="12.8569" r="5.71429" fill="white" />
                            <circle cx="12.8569" cy="27.143" r="5.71429" fill="#FFDC60" />
                            <circle cx="27.143" cy="12.8569" r="5.71429" fill="#FAB8C4" />
                            <circle opacity="0.5" cx="27.143" cy="27.143" r="5.71429" fill="white" />
                        </svg>
                        <h1 style={{cursor: 'pointer'}}>
                            <span>Collab</span>
                            <span style={{ color: '#5956E9' }}>.</span>
                        </h1>
                    </div>
                </li>
                <ul>
                    <p>Company</p>
                    <li>
                        <h5>About us</h5>
                        <h5>Jobs</h5>
                        <h5>Press</h5>
                        <h5>Blog</h5>
                    </li>
                </ul>
                <ul>
                    <p>Support</p>
                    <h5>Contact us</h5>
                    <h5>Cookies</h5>
                    <h5>Privacy & terms</h5>
                    <h5>Sitemap</h5>
                </ul>
                <ul>
                    <p>Community</p>
                    <h5>Developers</h5>
                    <h5>Designers</h5>
                    <h5>Forum</h5>
                    <h5>UI8</h5>
                </ul>
            </ul>
            <div className={style.bottomCtn}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="39" viewBox="0 0 44 39" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8463 1.13826C16.8127 0.0684967 19.1873 0.0684965 21.1537 1.13826L32.5537 7.34005C34.6778 8.49558 36 10.7203 36 13.1385V24.8758C36 27.2941 34.6778 29.5188 32.5537 30.6743L21.1537 36.8761C19.1873 37.9459 16.8127 37.9459 14.8463 36.8761L3.44631 30.6743C1.32223 29.5188 0 27.2941 0 24.8758V13.1385C0 10.7203 1.32223 8.49558 3.44631 7.34005L14.8463 1.13826Z" fill="#27272E" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0376 14.4603V19.0185C21.0376 23.0337 18.8844 25.0034 15.4826 25.0034C12.0809 25.0034 10 23.0148 10 19.1132V14.4603C10 13.6459 10.6152 13.002 11.3933 13.002C12.1713 13.002 12.7865 13.6459 12.7865 14.4603V19.0374C12.7865 21.1966 13.8179 22.314 15.5188 22.314C17.2197 22.314 18.2511 21.2344 18.2511 19.1321V14.4603C18.2511 13.6459 18.8663 13.002 19.6443 13.002C20.4224 13.002 21.0376 13.6459 21.0376 14.4603ZM24.6067 24.9087C23.8287 24.9087 23.2135 24.2648 23.2135 23.4504V14.4603C23.2135 13.6459 23.8287 13.002 24.6067 13.002C25.3848 13.002 26 13.6459 26 14.4603V23.4504C26 24.2648 25.3848 24.9087 24.6067 24.9087Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4976 17.2129C40.1907 17.2129 43.9952 13.3597 43.9952 8.60644C43.9952 3.85324 40.1907 0 35.4976 0C30.8045 0 27 3.85324 27 8.60644C27 13.3597 30.8045 17.2129 35.4976 17.2129Z" fill="#2D68FF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 12.0018C36.9352 12.0018 38 11.2629 38 9.99882V9.97937C38 9.17233 37.6111 8.73478 36.9537 8.37501C37.4537 8.05413 37.7778 7.61658 37.7778 6.88732V6.86788C37.7778 5.81775 36.8704 5.00098 35.5 5.00098C34.1296 5.00098 33.2222 5.82747 33.2222 6.86788V6.88732C33.2222 7.61658 33.5463 8.05413 34.0463 8.37501C33.3611 8.7056 33 9.19178 33 10.0183V10.0377C33 11.224 34.0648 12.0018 35.5 12.0018ZM35.5 7.87911C34.9352 7.87911 34.5741 7.51935 34.5741 7.0429V7.02345C34.5741 6.60534 34.9167 6.23585 35.5 6.23585C36.0833 6.23585 36.4259 6.61507 36.4259 7.03317V7.05262C36.4259 7.52907 36.0648 7.87911 35.5 7.87911ZM34.3796 9.92103C34.3796 10.3878 34.7963 10.767 35.5 10.767C36.2037 10.767 36.6204 10.3975 36.6204 9.92103V9.90159C36.6204 9.37652 36.1481 9.06537 35.5 9.06537C34.8519 9.06537 34.3796 9.37652 34.3796 9.90159V9.92103Z" fill="white" />
                    </svg>
                    <h2>© 2020, UI8 LLC.</h2>
                </div>
                <div style={{cursor: 'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L12 9" stroke="#292930" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 5L12 2L15 5" stroke="#292930" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 22L12 15" stroke="#292930" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 19L12 22L15 19" stroke="#292930" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 15L6 15C4.34315 15 3 13.6569 3 12C3 10.3432 4.34314 9 6 9L21 9" stroke="#292930" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h2>Back to top</h2>
                </div>
            </div>
        </div>
    )
}