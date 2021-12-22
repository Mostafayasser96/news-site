// note: We have a problem here in side bar (the row element inside an element that is flex displayed )
import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const CookiePolicy = () => {
            const cookieparentStyle = {
                position: 'relative',
                width: '100%',
                height: '100%'
            }
            const cookieShadowStyle = {
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'lightgrey',
                opacity: '.7'

            }
            const cookielistStyle = {
                position: 'relative',
                width: '45%',
                left: '27%',
                top: '25%',
                zIndex: '10',
                listStyle: 'none',
                borderRadius: '3px'

            }
            const li1Style = {
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid white',
                height: '60px',
                padding: '10px 20px 10px 30px',
                backgroundColor: 'black',
                borderRadius: '4px'
            }
            const logodivStyle = {
                backgroundImage: 'url("https://cdn.cookielaw.org/logos/static/ot_logo.png")',
                backgroundSize: '120px 40px',
                width: '125px',
                backgroundRepeat: 'no-repeat'
            }
            const iconxStyle = {
                cursor: 'pointer',
                fontSize: '10px',
                color: 'lightgrey',
                paddingTop: '10px'
            }
            const li2Style = {
                width: '100%',
                padding: '10px 60px 0px 30px',
                height: 'calc(100% - 63px)',
                backgroundColor: 'black',
                overflowY: 'scroll',
            }
            const li2h3Style = {
                margin: '10px 0px 10px 0px',
                textAlign: 'left', 
                fontFamily: 'Times New Roman',
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '24px',
                color: 'white'
            }
            const li2pStyle = {
                textAlign: 'left',
                marginBottom: '25px',
                color: 'rgb(255,255,255)',
                fontFamily: 'Times New Roman',
                fontSize: '13px', 
                fontWeight: '400',
                lineHeight: '20px',
                width: '95%'
            }
            const li2paStyle = {
                color: 'rgb(255, 255, 0)',
                marginLeft: '10px'
            }
            const preferencesdivStyle = {
                marginTop: '10px'
            }
            const preferencesh3Style = {
                textAlign: 'left', 
                fontFamily: 'Times New Roman',
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '24px',
                color: 'white',
                paddingBottom: '10px'
            }
            const preferencesulStyle = {
                listStyle: 'none',
                marginTop: '10px',
                width: '100%',
                paddinLeft: '0px'
            }
            const preferencesbtnStyle = {
                padding: '12px 30px',
                backgroundColor: 'black',
                color: 'rgb(255,255,255)',
                border: '1px solid white',
                width: '100%',
                borderRadius: '3px',
                display: 'flex',
                justifyContent: 'space-between'
            }
            const iconplusStyle = {
                fontSize: '10px',
                color: 'royalblue',
                paddingRight: '7px',
                opacity: '.7'
            }
            const labelbtnStyle = {
                fontSize: '14.5px',
                lineHeight: '14.5px',
                fontFamily: 'Times New Roman'
            }
            const li1spanStyle = {
                fontSize: '14px',
                fontFamily: 'Times New Roman',
                color: 'dodgerblue'
            }
            const li3Style = {
                height: '73px',
                backgroundColor: 'black',
                borderTop: '1px solid white',
                textAlign: 'right'
            }
            const subbtnStyle = {
                margin: '19px 20px 16px 0px',
                padding: '12px 30px',
                width: '42%',
                border: '1px solid rgb(255, 255, 0)',
                fontWeight: '700',
                fontFamily: 'Times New Roman',
                fontSize: '12px',
                backgroundColor: 'rgb(255, 255, 0)',
                borderRadius: '3px',
                color: 'black',
                height: '60%'

            }
            const li4Style = {
                height: '30px',
                width: '100%',
                textAlign: 'right',
                backgroundColor: '#f4f4f4',
                borderRadius: '4px'
            }
            const li4anchorStyle = {
                backgroundImage: 'url("https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg")',
                height: '25px',
                width: 'calc(21% + 3px)',
                textAlign: 'right',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '120px 20px',
                display: 'inline-block',
                margin: '5px 10px 0px 0px'
            }
            
            return (

                <div className='cookie-policy-main' style={cookieparentStyle}>
                    <div className='shadow' style={cookieShadowStyle}></div>
                    <div className='cookie-policy'>
                        <ul style={cookielistStyle}>
                            <li style={li1Style}>
                                <div className='logo' style={logodivStyle}></div>
                                <i className='fas fa-times' style={iconxStyle}></i>
                            </li>
                            <li style={li2Style}>
                                <div>
                                    <h3 style={li2h3Style}>
                                        NowThis News Cookie Settings
                                    </h3>
                                    <p style={li2pStyle}>
                                        You can decide who you will allow to set third-party cookies on your
                                        browser or device by clicking on the button below to visit our consent
                                        management platform. Please note that the cookie settings accessible via
                                        the button below apply to NowThis News only, and not any of the other
                                        Group Nine Media brands. If you wish to change your cookie settings for
                                        any other Group Nine Media brands, you you will need to visit the
                                        separate consent management platform for each brand. For more information
                                        or to adjust your cookie settings for other Group Nine brands,
                                        please see our Privacy Policy and Cookie Policy.
                                        <a href='https://www.groupninemedia.com/legal/privacy'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            style={li2paStyle}
                                            >
                                            Group Nine Media Privacy Policy
                                        </a>
                                    </p>
                                </div>
                                <div style={preferencesdivStyle}>
                                    <h3 style={preferencesh3Style}>Manage Consent Preferences</h3>
                                    <ul style={preferencesulStyle}>
                                        <li >
                                            <button type='text' style={preferencesbtnStyle}>
                                                <span>
                                                <i className='fas fa-plus' style={iconplusStyle}></i>
                                                <label style={labelbtnStyle}>Strictly Necessary Cookies</label>
                                                </span>
                                                
                                                <span style={li1spanStyle}>Always Active</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button type='text' style={preferencesbtnStyle}>
                                                <span>
                                                <i className='fas fa-plus' style={iconplusStyle}></i>
                                                <label style={labelbtnStyle}>Performance Cookies</label>
                                                </span>
                                                
                                                <label className="switch">
                                                   
                                                    <input type="checkbox" checked />
                                                    <span className="slider round"></span>
                                                        
                                                </label>
                                            </button>
                                        </li>
                                        <li>
                                        <button type='text' style={preferencesbtnStyle}>
                                               <span>
                                               <i className='fas fa-plus' style={iconplusStyle}></i>
                                                <label style={labelbtnStyle}>Functional Cookies</label>
                                               </span>
                                                
                                                <label className="switch">
                                                    <input type="checkbox" checked />
                                                        <span className="slider round"></span>
                                                </label>
                                            </button>
                                        </li>
                                        <li>
                                        <button type='text' style={preferencesbtnStyle}>
                                            <span>
                                            <i className='fas fa-plus' style={iconplusStyle}></i>
                                                <label style={labelbtnStyle}>Targeting Cookies</label>
                                            </span>
                                               
                                                <label className="switch">
                                                    <input type="checkbox" checked />
                                                        <span className="slider round"></span>
                                                </label>
                                            </button>
                                        </li>
                                        <li>
                                        <button type='text' style={preferencesbtnStyle}>
                                            <span>
                                                <i className='fas fa-plus' style={iconplusStyle}></i>
                                                <label style={labelbtnStyle}>Social Media Cookies</label>
                                            </span>
                                               
                                                <label className="switch">
                                                    <input type="checkbox" checked />
                                                        <span className="slider round"></span>
                                                </label>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li style={li3Style}>
                                <button type='submit' style={subbtnStyle}>Confirm My Choices</button>
                            </li>
                            <li style={li4Style}>  
                                <a href='https://onetrust.com/poweredbyonetrust' 
                                   target='_blank'
                                   rel='noopener noreferrer'
                                   style={li4anchorStyle}
                                   ></a>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
        const footerStyle = {
            backgroundColor: 'black',
            paddingTop: '40px',
            textAlign: 'center',
            marginTop: '60px'
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
            maxWidth: '27%',
            marginLeft: '34%',
            marginBottom: '36px',
            display: 'flex',
            justifyContent: 'space-evenly'
        }
        const footerli4Style = {
            paddingBottom: '58px',
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '28%',
            marginLeft: '36%'
        }
        const paragraphStyle = {
            maxWidth: '40%',
            fontSize: '11px',
            color: 'white',
            textAlign: 'left',
            marginTop: '10px',
            paddingBottom: '30px'
        }
        const iconStyle = {
            color: 'white',
        }
        return (
            <div className='footer-main'>
                <div className='footer' style={footerStyle}>
                    <ul className='footer-ul' style={footerulStyle}>
                        <li style={footerli1Style}>
                            <a href='https://nowthisnews.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <svg height="53px" width="137px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 50" enableBackground="new 0 0 104 50" preserveAspectRatio="xMinYMid meet"><defs><filter id="a-g9" filterUnits="userSpaceOnUse" x="0" y="5" width="104" height="40"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask maskUnits="userSpaceOnUse" x="0" y="5" width="104" height="40" id="b-g9"><path d="M20 5c11 0 20 9 20 20s-9 20-20 20c-.8 0-1.6 0-2.3-.1l9.5-15c1-1.4 1.5-3.1 1.5-4.9 0-4.8-3.9-8.7-8.7-8.7-4.8 0-8.7 3.9-8.7 8.7 0 3.9 2.6 7.3 6.3 8.4l-6.2 9.7C4.6 39.8 0 33 0 25 0 14 8.9 5 20 5zm27.2 16.2c.2 1.1 1.2 1.9 2.5 1.9 1.8 0 2.8-.9 2.8-2.9v-.5c-.4.6-1.4 1.3-3.1 1.3-3 0-5.3-2.4-5.3-5.6 0-3 2.2-5.6 5.3-5.6 1.9 0 2.9.8 3.2 1.4V9.9h3.3V20c0 3.3-1.8 6.2-6.1 6.2-3.3 0-5.4-2-5.7-4.1l3.1-.9zm5.3-5.9c0-1.6-1.1-2.5-2.4-2.5-1.3 0-2.5 1-2.5 2.5s1.1 2.5 2.5 2.5c1.4.1 2.4-.9 2.4-2.5zm12.8-1.9c-.4-.1-.7-.1-1.1-.1-1.4 0-2.7.8-2.7 3.1v5H58V9.9h3.4v1.6c.6-1.3 2.1-1.7 3-1.7.3 0 .7 0 .9.1v3.5zm12.4 2.2c0 3.6-2.7 6.1-6.1 6.1-3.4 0-6.1-2.5-6.1-6.1s2.7-6.1 6.1-6.1c3.5.1 6.1 2.6 6.1 6.1zm-3.5 0c0-1.9-1.2-2.8-2.6-2.8-1.3 0-2.6.9-2.6 2.8s1.3 2.9 2.6 2.9c1.4 0 2.6-.9 2.6-2.9zm12.2 4.7c-.6 1-1.9 1.4-3.1 1.4-2.8 0-4.4-2-4.4-4.5V9.9h3.5v6.5c0 1.1.6 2 1.8 2 1.2 0 1.9-.8 1.9-2V9.9h3.5v9.4c0 1 .1 1.9.1 2.1h-3.4c.1-.2.1-.8.1-1.1zm5.5 5.5V9.9h3.4v1.2c.5-.7 1.7-1.5 3.4-1.5 3.3 0 5.3 2.5 5.3 6s-2.3 6-5.5 6c-1.5 0-2.6-.5-3.1-1.2v5.3l-3.5.1zm6-13c-1.4 0-2.6.9-2.6 2.8s1.2 2.9 2.6 2.9c1.4 0 2.6-.9 2.6-2.9s-1.2-2.8-2.6-2.8zM48.4 40.3h-3.5V28.7h3.4V30c.6-1.1 2-1.6 3.2-1.6 2.9 0 4.2 2.1 4.2 4.6v7.2h-3.5v-6.6c0-1.1-.6-2-1.9-2-1.2 0-1.9.9-1.9 2v6.7zm9.3 0V28.7h3.5v11.5l-3.5.1zm1.7-17.1c1.2 0 2.1.9 2.1 2.1 0 1.1-.9 2.1-2.1 2.1-1.1 0-2-.9-2-2.1 0-1.2.9-2.1 2-2.1zm7.5 17.1h-3.5V28.7h3.4V30c.6-1.1 2-1.6 3.2-1.6 2.9 0 4.2 2.1 4.2 4.6v7.2h-3.5v-6.6c0-1.1-.6-2-1.9-2-1.2 0-1.9.9-1.9 2v6.7zm19.7-3.4c-.6 2-2.4 3.7-5.3 3.7-3.2 0-6-2.3-6-6.1 0-3.7 2.7-6.1 5.7-6.1 3.6 0 5.8 2.2 5.8 5.9 0 .5 0 1-.1 1.1h-8c.1 1.3 1.2 2.2 2.6 2.2 1.3 0 2-.6 2.3-1.5.1 0 3 .8 3 .8zm-3.2-3.8c0-.9-.6-1.9-2.3-1.9-1.5 0-2.2 1.1-2.3 1.9h4.6z" fill="#fff" filter="url(#a-g9)"></path></mask><g mask="url(#b-g9)"><path className="g9-logo-main-path" d="M0 5h104v40H0V5z" fillRule="evenodd" clipRule="evenodd" fill="#fff"></path></g></svg>
                            </a>
                        </li>
                        <li className='policy'>
                            <ul className='row policy-ul' style={policyulStyle}>
                                <li className='col'>
                                    {/* the anchor element here leads to a div over the page  */}
                                    <a href='#'
                                        style={policyulanchorStyle}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Cookies Settings
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://nowthisnews.com/newsletters'
                                        style={policyulanchorStyle}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Newsletter
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://www.groupninemedia.com/advertise'
                                        style={policyulanchorStyle}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Advertise With Us
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://www.groupninemedia.com/careers'
                                        style={policyulanchorStyle}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li className='col'>
                                    {/* this anchor element here opens a specific window within my computer */}
                                    <a href='#'
                                        style={policyulanchorStyle}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://www.groupninemedia.com/legal/cookie-policy'
                                        style={policyulanchorStyle}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Coookie Policy
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://www.groupninemedia.com/legal/ccpa'
                                        style={policyulanchorStyle}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Do Not Sell My Personal Information
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://www.groupninemedia.com/press'
                                        style={policyulanchorStyle}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Press
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://www.groupninemedia.com/legal/privacy'
                                        style={policyulanchorStyle}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Privacy
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://www.groupninemedia.com/legal/tscs'
                                        style={policyulanchorStyle}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Terms &#43; Conditions
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul style={socialStyle}>
                                <li>
                                    <a href='https://www.facebook.com/NowThisNews/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >

                                        <i className='fab fa-facebook' style={iconStyle}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.youtube.com/channel/UCn4sPeUomNGIr26bElVdDYg'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >

                                        <i className='fab fa-youtube' style={iconStyle}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://story.snapchat.com/p/27170b6d-1c82-4faf-af52-b77b28487b8a/3209665382008832'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >

                                        <i className='fab fa-snapchat-ghost' style={iconStyle}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.instagram.com/nowthisnews/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >

                                        <i className='fab fa-instagram' style={iconStyle}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://twitter.com/nowthisnews'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >

                                        <i className='fab fa-twitter' style={iconStyle}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.tiktok.com/@nowthis?lang=en'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >

                                        <i className='fab fa-tiktok' style={iconStyle}></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li style={footerli4Style}>
                            <a href='https://www.groupninemedia.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
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
                            <p style={paragraphStyle}>&copy; 2021 Group Nine Media Inc&#46; All Rights Reserved&#46;</p>
                        </li>

                    </ul>

                </div>
                <CookiePolicy />
            </div>
        )
    }
}