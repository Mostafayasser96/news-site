import React, { Component } from 'react';


export default class Footer2 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const CookiesPolicy = () => {
            const PerformanceCookiesP = () => {
                return(
                  <div className='performance-cookies-p'>
                        <p className='p'>
                        These cookies allow us to count visits and traffic sources so we can measure and 
                        improve the performance of our site. They help us to know which pages are the most 
                        and least popular and see how visitors move around the site. All information these 
                        cookies collect is aggregated and therefore anonymous. If you do not allow these 
                        cookies we will not know when you have visited our site, and will not be able to 
                        monitor its performance.
                        </p>
                    </div>
                )
            }
            const FunctionalCookiesP = () => {
                
                return(
                    <div className='functional-cookies-p'>
                        <p className='p'>
                        These cookies enable the website to provide enhanced functionality and personalisation.
                        They may be set by us or by third party providers whose services we have added to our 
                        pages. If you do not allow these cookies then some or all of these services may not 
                        function properly.
                        </p>
                    </div>
                )
            }
            const TargetingCookiesP = () => {
                
                return(
                    <div className='targeting-cookies-p'>
                        <p className='p'>
                        These cookies may be set through our site by our advertising partners. They may be 
                        used by those companies to build a profile of your interests and show you relevant 
                        adverts on other sites. They do not store directly personal information, but are 
                        based on uniquely identifying your browser and internet device. If you do not allow 
                        these cookies, you will experience less targeted advertising.
                        </p>
                    </div>
                )
            }
            const SocialMediaCookiesP = () => {
                
                return(
                    <div className='social-media-cookies-p'>
                        <p className='p'>
                        These cookies are set by a range of social media services that we have added to the 
                        site to enable you to share our content with your friends and networks. They are 
                        capable of tracking your browser across other sites and building up a profile of 
                        your interests. This may impact the content and messages you see on other websites 
                        you visit. If you do not allow these cookies you may not be able to use or see these 
                        sharing tools.
                        </p>
                    </div>
                )
            }
            return(
                <div className='cookie-policy-main'>
                <div className='shadow'></div>
                <div className='cookie-policy'>
                    <ul className='cookies-ul' id='id-cookies-ul'>
                        <li className='cookies-ul-li1'>
                            <div className='logo'></div>
                            <i className='icon-x fas fa-times'></i>
                        </li>
                        <li className='cookies-ul-li2' 
                            // onScroll={this.props.updateListSelection} 
                            id='cookies-li'>
                            <div>
                                <h3 className='ul-li2-h3'>
                                    NowThis News Cookie Settings
                                </h3>
                                <p className='ul-li2-p'>
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
                                        className='ul-li2-p-a'
                                    >
                                        Group Nine Media Privacy Policy
                                    </a>
                                </p>
                            </div>
                            <div className='preferences-div'>
                                <h3 className='preferences-h3'>Manage Consent Preferences</h3>
                                <ul  className='preferences-ul'>
                                    <li>
                                        <button type='text' 
                                                className='preferences-btn' 
                                                >
                                                <span className='preferences-btn-parent-span'
                                                      >
                                                <span className='preferences-btn-span'
                                                      >
                                                    <i className='icon-plus fas fa-plus' 
                                                       ></i>
                                                    <label className='btn-label'
                                                          >Strictly Necessary Cookies</label>
                                                    
                                                </span>
                                                <span className='span-li1' 
                                                         >Always Active</span>
                                                
                                            {/* <StrictlyNecessaryP /> */}
                                                </span>
                                               
                                        </button>
                                    </li>
                                    <li>
                                        <button type='text' className='preferences-btn'>
                                            <span className='preferences-btn-parent-span'>
                                            <span className='preferences-btn-span'>
                                                <i className='icon-plus fas fa-plus'></i>
                                                <label className='btn-label'>Performance Cookies</label>
                                                
                                            </span>
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                              </label>
                                              {/* <PerformanceCookiesP /> */}
                                            </span>
                                           

                                            
                                        </button>
                                    </li>
                                    <li>
                                        <button type='text' className='preferences-btn'>
                                            <span className='preferences-btn-parent-span'>
                                            <span className='preferences-btn-span'>
                                                <i className='icon-plus fas fa-plus'></i>
                                                <label className='btn-label'>Functional Cookies</label>
                                                
                                            </span>

                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                            {/* <FunctionalCookiesP /> */}
                                            </span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type='text' className='preferences-btn'>
                                            <span className='preferences-btn-parent-span'>
                                            <span className='preferences-btn-span'>
                                                <i className='icon-plus fas fa-plus'></i>
                                                <label className='btn-label'>Targeting Cookies</label>
                                                
                                            </span>
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                            
                                            {/* <TargetingCookiesP /> */}
                                            </span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type='text' className='preferences-btn'>
                                            <span className='preferences-btn-parent-span'>
                                            <span className='preferences-btn-span'>
                                                <i className='icon-plus fas fa-plus'></i>
                                                <label className='btn-label'>Social Media Cookies</label>
                                                
                                            </span>

                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                            {/* <SocialMediaCookiesP /> */}
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='ul-li3'>
                            <button type='submit' className='sub-btn'>Confirm My Choices</button>
                        </li>
                        <li className='ul-li4'>
                            <a href='https://onetrust.com/poweredbyonetrust'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='ul-li4-a'
                            ></a>
                        </li>
                    </ul>
                </div>
            </div>
            )
        }



        return(
            <div className='footer-main'>
            <div className='footer'>
                                    <ul className='footer-ul'>
                                        <li className='footer-li'>
                                            <a href='https://nowthisnews.com/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <svg height="56px" width="99px" className="footer__logo NT" viewBox="0 0 701 745.768" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid meet">
                                                    <path d="M651.403 48.597V309.42H48.597V48.597h602.806M700 0H0v358.016h700V0zM651.403 436.348v260.823H48.597V436.348h602.806M700 387.752H0v358.016h700V387.752z" fill="#fff">
                                                    </path>
                                                    <g fill="#fff">
                                                        <path d="M233.547 247.411h-28.434L148.9 168.888v78.523h-33.902V113.113h32.809l51.838 73.929v-73.929h33.902v134.298zM326.941 249.597c-38.715 0-65.399-29.308-65.399-69.336 0-40.246 26.684-69.336 65.399-69.336 38.934 0 65.837 29.09 65.837 69.336 0 40.028-26.904 69.336-65.837 69.336zm0-107.831c-18.154 0-29.965 15.31-29.965 38.495s11.811 38.496 29.965 38.496c18.155 0 30.403-15.311 30.403-38.496s-12.249-38.495-30.403-38.495zM510.015 113.113l20.56 78.96 18.591-78.96H584.6L549.166 247.41h-32.153l-20.779-78.742-20.998 78.742h-32.152L407.87 113.113h35.87l18.811 78.96 20.779-78.96h26.685z">
                                                        </path>
                                                    </g>
                                                    <g fill="#fff">
                                                        <path d="M106.452 501.877h118.112v30.184h-41.558v104.113h-35.215V532.06h-41.34v-30.183zM374.389 501.877v134.297h-35.215v-53.151h-51.838v53.151h-35.215V501.877h35.215v50.963h51.838v-50.963h35.215zM442.631 636.174h-35.215V501.877h35.215v134.297zM504.965 596.365c2.844 9.187 10.718 13.78 21.654 13.78 10.718 0 18.155-4.594 18.155-12.905 0-6.344-4.157-9.187-12.687-11.155l-25.81-5.468c-19.685-4.375-34.557-14.655-34.557-37.402 0-26.247 21.873-43.527 51.618-43.527 32.809 0 51.401 17.936 55.119 41.121h-34.34c-2.843-7.437-8.967-13.124-20.56-13.124-10.062 0-16.842 4.375-16.842 11.812 0 5.905 4.156 9.187 11.155 10.717l26.246 6.124c22.966 5.468 35.653 17.936 35.653 38.715 0 27.559-23.185 43.307-52.494 43.307-32.152 0-54.025-15.529-58.838-41.995h36.528z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li className='policy'>
                                            <ul className='policy-ul'>
                                                <li>
                                                    {/* the anchor element here leads to a div over the page  */}
                                                    <a href='#'
                                                       className='policy-ul-a'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        Cookies Settings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://nowthisnews.com/newsletters'
                                                        className='policy-ul-a'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        Newsletter
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.groupninemedia.com/advertise'
                                                        className='policy-ul-a'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        Advertise With Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.groupninemedia.com/careers'
                                                        className='policy-ul-a'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        Careers
                                                    </a>
                                                </li>
                                                <li>
                                                    {/* this anchor element here opens a specific window within my computer */}
                                                    <a href='#'
                                                        className='policy-ul-a'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        Contact Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.groupninemedia.com/legal/cookie-policy'
                                                        className='policy-ul-a'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        Coookie Policy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.groupninemedia.com/legal/ccpa'
                                                        className='policy-ul-a'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        Do Not Sell My Personal Information
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.groupninemedia.com/press'
                                                        className='policy-ul-a'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        Press
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.groupninemedia.com/legal/privacy'
                                                        className='policy-ul-a'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        Privacy
                                                    </a>
                                                </li>
                                            </ul>
                        
                        
                                        </li>
                                        <li className='policy-li-last'>
                                            <a href='https://www.groupninemedia.com/legal/tscs'
                                               className='policy-ul-a'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                Terms &#43; Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <ul className='social'>
                                                <li>
                                                    <a href='https://www.facebook.com/NowThisNews/'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                        
                                                        <i className='social-i fab fa-facebook'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.youtube.com/channel/UCn4sPeUomNGIr26bElVdDYg'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                        
                                                        <i className='social-i fab fa-youtube'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://story.snapchat.com/p/27170b6d-1c82-4faf-af52-b77b28487b8a/3209665382008832'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                        
                                                        <i className='social-i fab fa-snapchat-ghost'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.instagram.com/nowthisnews/'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                        
                                                        <i className='social-i fab fa-instagram'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://twitter.com/nowthisnews'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                        
                                                        <i className='social-i fab fa-twitter'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.tiktok.com/@nowthis?lang=en'
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                        
                                                        <i className='social-i fab fa-tiktok'></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='footer-li4'>
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
                                            <p className='footer-p'>&copy; 2021 Group Nine Media Inc&#46; All Rights Reserved&#46;</p>
                                        </li>
                        
                                    </ul>
                                  
                                    </div>
                                  <CookiesPolicy />
                                </div>
        )
    }
}