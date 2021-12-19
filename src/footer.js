import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const footerStyle = {
            backgroundColor: 'black',
            paddingTop: '40px',
            textAlign: 'center',
            marginTop: '40px'
        }
        const footerulStyle = {
            listStyle: 'none'
        }
        const footerli1Style = {
            marginBottom: '28px',
        }
        const policyulStyle = {
            maxWidth: '54%',
            alignContent: 'center',
            marginLeft: '20%',
            marginBottom: '32px',
            listStyle: 'none'
        }
        const policyulanchorStyle = {
            textDecoration: 'none',
            color: 'white',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '14px',
            cursor: 'pointer'
        }
        const socialStyle = {
            listStyle: 'none',
            maxWidth: '40%',
            marginLeft: '30%',
            marginBottom: '36px'
        }
        const footerli4Style = {
            paddingBottom: '58px'
        }
        const paragraphStyle = {
            maxWidth: '40%',
            fontSize: '11px',
            color: 'white',
            textAlign: 'left',
            marginTop: '10px'
        }
        const iconStyle = {
            color: 'white',
        }
        return (
            <div className='footer' style={footerStyle}>
                <ul className='footer-ul' style={footerulStyle}>
                    <li style={footerli1Style}>
                        <a href='https://nowthisnews.com/'>
                            <svg height="53px" width="137px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 50" enableBackground="new 0 0 104 50" preserveAspectRatio="xMinYMid meet"><defs><filter id="a-g9" filterUnits="userSpaceOnUse" x="0" y="5" width="104" height="40"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask maskUnits="userSpaceOnUse" x="0" y="5" width="104" height="40" id="b-g9"><path d="M20 5c11 0 20 9 20 20s-9 20-20 20c-.8 0-1.6 0-2.3-.1l9.5-15c1-1.4 1.5-3.1 1.5-4.9 0-4.8-3.9-8.7-8.7-8.7-4.8 0-8.7 3.9-8.7 8.7 0 3.9 2.6 7.3 6.3 8.4l-6.2 9.7C4.6 39.8 0 33 0 25 0 14 8.9 5 20 5zm27.2 16.2c.2 1.1 1.2 1.9 2.5 1.9 1.8 0 2.8-.9 2.8-2.9v-.5c-.4.6-1.4 1.3-3.1 1.3-3 0-5.3-2.4-5.3-5.6 0-3 2.2-5.6 5.3-5.6 1.9 0 2.9.8 3.2 1.4V9.9h3.3V20c0 3.3-1.8 6.2-6.1 6.2-3.3 0-5.4-2-5.7-4.1l3.1-.9zm5.3-5.9c0-1.6-1.1-2.5-2.4-2.5-1.3 0-2.5 1-2.5 2.5s1.1 2.5 2.5 2.5c1.4.1 2.4-.9 2.4-2.5zm12.8-1.9c-.4-.1-.7-.1-1.1-.1-1.4 0-2.7.8-2.7 3.1v5H58V9.9h3.4v1.6c.6-1.3 2.1-1.7 3-1.7.3 0 .7 0 .9.1v3.5zm12.4 2.2c0 3.6-2.7 6.1-6.1 6.1-3.4 0-6.1-2.5-6.1-6.1s2.7-6.1 6.1-6.1c3.5.1 6.1 2.6 6.1 6.1zm-3.5 0c0-1.9-1.2-2.8-2.6-2.8-1.3 0-2.6.9-2.6 2.8s1.3 2.9 2.6 2.9c1.4 0 2.6-.9 2.6-2.9zm12.2 4.7c-.6 1-1.9 1.4-3.1 1.4-2.8 0-4.4-2-4.4-4.5V9.9h3.5v6.5c0 1.1.6 2 1.8 2 1.2 0 1.9-.8 1.9-2V9.9h3.5v9.4c0 1 .1 1.9.1 2.1h-3.4c.1-.2.1-.8.1-1.1zm5.5 5.5V9.9h3.4v1.2c.5-.7 1.7-1.5 3.4-1.5 3.3 0 5.3 2.5 5.3 6s-2.3 6-5.5 6c-1.5 0-2.6-.5-3.1-1.2v5.3l-3.5.1zm6-13c-1.4 0-2.6.9-2.6 2.8s1.2 2.9 2.6 2.9c1.4 0 2.6-.9 2.6-2.9s-1.2-2.8-2.6-2.8zM48.4 40.3h-3.5V28.7h3.4V30c.6-1.1 2-1.6 3.2-1.6 2.9 0 4.2 2.1 4.2 4.6v7.2h-3.5v-6.6c0-1.1-.6-2-1.9-2-1.2 0-1.9.9-1.9 2v6.7zm9.3 0V28.7h3.5v11.5l-3.5.1zm1.7-17.1c1.2 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2-.9-2-2.1 0-1.2.9-2.1 2-2.1zm7.5 17.1h-3.5V28.7h3.4V30c.6-1.1 2-1.6 3.2-1.6 2.9 0 4.2 2.1 4.2 4.6v7.2h-3.5v-6.6c0-1.1-.6-2-1.9-2-1.2 0-1.9.9-1.9 2v6.7zm19.7-3.4c-.6 2-2.4 3.7-5.3 3.7-3.2 0-6-2.3-6-6.1 0-3.7 2.7-6.1 5.7-6.1 3.6 0 5.8 2.2 5.8 5.9 0 .5 0 1-.1 1.1h-8c.1 1.3 1.2 2.2 2.6 2.2 1.3 0 2-.6 2.3-1.5.1 0 3 .8 3 .8zm-3.2-3.8c0-.9-.6-1.9-2.3-1.9-1.5 0-2.2 1.1-2.3 1.9h4.6z" fill="#fff" filter="url(#a-g9)"></path></mask><g mask="url(#b-g9)"><path className="g9-logo-main-path" d="M0 5h104v40H0V5z" fillRule="evenodd" clipRule="evenodd" fill="#fff"></path></g></svg>
                        </a>
                    </li>
                    <li className='policy'>
                        <ul className='row policy-ul' style={policyulStyle}>
                            <li className='col'>
                                {/* the anchor element here leads to a div over the page  */}
                                <a href='#'  style={policyulanchorStyle}>
                                    Cookies Settings
                                </a>
                            </li>
                            <li className='col'>
                                <a href='https://nowthisnews.com/newsletters'
                                    style={policyulanchorStyle}
                                    >
                                    Newsletter
                                </a>
                            </li>
                            <li className='col'>
                                <a href='https://www.groupninemedia.com/advertise'
                                    style={policyulanchorStyle}
                                   >
                                    Advertise With Us
                                </a>
                            </li>
                            <li className='col'>
                                <a href='https://www.groupninemedia.com/careers'
                                    style={policyulanchorStyle}
                                   >
                                    Careers
                                </a>
                            </li>
                            <li className='col'>
                                {/* this anchor element here opens a specific window within my computer */}
                                <a href='#'  style={policyulanchorStyle}>
                                    Contact Us
                                </a>
                            </li>
                            <li className='col'>
                                <a href='https://www.groupninemedia.com/legal/cookie-policy'
                                    style={policyulanchorStyle}
                                    >
                                    Coookie Policy
                                </a>
                            </li>
                            <li className='col'>
                                <a href='https://www.groupninemedia.com/legal/ccpa'
                                    style={policyulanchorStyle}
                                    >
                                    Do Not Sell My Personal Information
                                </a>
                            </li>
                            <li className='col'>
                                <a href='https://www.groupninemedia.com/press'
                                    style={policyulanchorStyle}
                                   >
                                    Press
                                </a>
                            </li>
                            <li className='col'>
                                <a href='https://www.groupninemedia.com/legal/privacy'
                                    style={policyulanchorStyle}
                                   >
                                    Privacy
                                </a>
                            </li>
                            <li className='col'>
                                <a href='https://www.groupninemedia.com/legal/tscs'
                                    style={policyulanchorStyle}
                                   >
                                    Terms &#43; Conditions
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className='row' style={socialStyle}>
                            <li className='col'>
                                <a href='https://www.facebook.com/NowThisNews/'>
                        
                                <i className='fab fa-facebook' style={iconStyle}></i>
                                </a>
                            </li>
                            <li className='col'>
                            <a href='https://www.youtube.com/channel/UCn4sPeUomNGIr26bElVdDYg'>
                            
                            <i className='fab fa-youtube' style={iconStyle}></i>
                                </a>
                            </li>
                            <li className='col'>
                            <a href='https://story.snapchat.com/p/27170b6d-1c82-4faf-af52-b77b28487b8a/3209665382008832'>
                            
                            <i className='fab fa-snapchat-ghost' style={iconStyle}></i>
                                </a>
                            </li>
                            <li className='col'>
                            <a href='https://www.instagram.com/nowthisnews/'>
                            
                            <i className='fab fa-instagram' style={iconStyle}></i>
                                </a>
                            </li>
                            <li className='col'>
                            <a href='https://twitter.com/nowthisnews'>
                            
                            <i className='fab fa-twitter' style={iconStyle}></i>
                                </a>
                            </li>
                            <li className='col'>
                            <a href='https://www.tiktok.com/@nowthis?lang=en'>
                            
                            <i className='fab fa-tiktok' style={iconStyle}></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='row d-inline-flex' style={footerli4Style}>
                        <a className='col' href='https://www.groupninemedia.com/'>
                            <svg height="53px" width="137px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 50" enableBackground="new 0 0 104 50" preserveAspectRatio="xMinYMid meet">
                                <defs>
                                    <filter id="a-g9" filterUnits="userSpaceOnUse" x="0" y="5" width="104" height="40">
                                        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0">
                                        </feColorMatrix>
                                    </filter>
                                </defs>
                                <mask maskUnits="userSpaceOnUse" x="0" y="5" width="104" height="40" id="b-g9">
                                    <path d="M20 5c11 0 20 9 20 20s-9 20-20 20c-.8 0-1.6 0-2.3-.1l9.5-15c1-1.4 1.5-3.1 1.5-4.9 0-4.8-3.9-8.7-8.7-8.7-4.8 0-8.7 3.9-8.7 8.7 0 3.9 2.6 7.3 6.3 8.4l-6.2 9.7C4.6 39.8 0 33 0 25 0 14 8.9 5 20 5zm27.2 16.2c.2 1.1 1.2 1.9 2.5 1.9 1.8 0 2.8-.9 2.8-2.9v-.5c-.4.6-1.4 1.3-3.1 1.3-3 0-5.3-2.4-5.3-5.6 0-3 2.2-5.6 5.3-5.6 1.9 0 2.9.8 3.2 1.4V9.9h3.3V20c0 3.3-1.8 6.2-6.1 6.2-3.3 0-5.4-2-5.7-4.1l3.1-.9zm5.3-5.9c0-1.6-1.1-2.5-2.4-2.5-1.3 0-2.5 1-2.5 2.5s1.1 2.5 2.5 2.5c1.4.1 2.4-.9 2.4-2.5zm12.8-1.9c-.4-.1-.7-.1-1.1-.1-1.4 0-2.7.8-2.7 3.1v5H58V9.9h3.4v1.6c.6-1.3 2.1-1.7 3-1.7.3 0 .7 0 .9.1v3.5zm12.4 2.2c0 3.6-2.7 6.1-6.1 6.1-3.4 0-6.1-2.5-6.1-6.1s2.7-6.1 6.1-6.1c3.5.1 6.1 2.6 6.1 6.1zm-3.5 0c0-1.9-1.2-2.8-2.6-2.8-1.3 0-2.6.9-2.6 2.8s1.3 2.9 2.6 2.9c1.4 0 2.6-.9 2.6-2.9zm12.2 4.7c-.6 1-1.9 1.4-3.1 1.4-2.8 0-4.4-2-4.4-4.5V9.9h3.5v6.5c0 1.1.6 2 1.8 2 1.2 0 1.9-.8 1.9-2V9.9h3.5v9.4c0 1 .1 1.9.1 2.1h-3.4c.1-.2.1-.8.1-1.1zm5.5 5.5V9.9h3.4v1.2c.5-.7 1.7-1.5 3.4-1.5 3.3 0 5.3 2.5 5.3 6s-2.3 6-5.5 6c-1.5 0-2.6-.5-3.1-1.2v5.3l-3.5.1zm6-13c-1.4 0-2.6.9-2.6 2.8s1.2 2.9 2.6 2.9c1.4 0 2.6-.9 2.6-2.9s-1.2-2.8-2.6-2.8zM48.4 40.3h-3.5V28.7h3.4V30c.6-1.1 2-1.6 3.2-1.6 2.9 0 4.2 2.1 4.2 4.6v7.2h-3.5v-6.6c0-1.1-.6-2-1.9-2-1.2 0-1.9.9-1.9 2v6.7zm9.3 0V28.7h3.5v11.5l-3.5.1zm1.7-17.1c1.2 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2-.9-2-2.1 0-1.2.9-2.1 2-2.1zm7.5 17.1h-3.5V28.7h3.4V30c.6-1.1 2-1.6 3.2-1.6 2.9 0 4.2 2.1 4.2 4.6v7.2h-3.5v-6.6c0-1.1-.6-2-1.9-2-1.2 0-1.9.9-1.9 2v6.7zm19.7-3.4c-.6 2-2.4 3.7-5.3 3.7-3.2 0-6-2.3-6-6.1 0-3.7 2.7-6.1 5.7-6.1 3.6 0 5.8 2.2 5.8 5.9 0 .5 0 1-.1 1.1h-8c.1 1.3 1.2 2.2 2.6 2.2 1.3 0 2-.6 2.3-1.5.1 0 3 .8 3 .8zm-3.2-3.8c0-.9-.6-1.9-2.3-1.9-1.5 0-2.2 1.1-2.3 1.9h4.6z" fill="#fff" filter="url(#a-g9)">
                                    </path>
                                </mask><g mask="url(#b-g9)">
                                    <path className="g9-logo-main-path" d="M0 5h104v40H0V5z" fillRule="evenodd" clipRule="evenodd" fill="#fff">
                                    </path>
                                </g>
                            </svg>
                        </a>
                        <p className='col' style={paragraphStyle}>&copy; 2021 Group Nine Media Inc&#46; All Rights Reserved&#46;</p>
                    </li>
                    
                </ul>
            </div>
        )
    }
}