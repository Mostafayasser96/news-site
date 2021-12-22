// note1: We have a problem here in side bar (the row element inside an element that is flex displayed ), adding
// that the svg isn't showing
// note2: the image import problem in header's mail service
// note3: the width problems in the categories of sidebar(ul and li aren't taking the width of parent)
// note4: the scroll overflow in cookie policy in footer file 
import React, { Component } from 'react';


export default class SideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const SectionsCats = () => {
            const sectionsulStyle = {
                listStyle: 'none',
                width: '100%',
                backgroundColor: 'rgb(245, 245, 245)',
                paddingLeft: '0px'
            }
            const catdivspanStyle = {
                width: '100%'
            }
            const sectionsliStyle = {
                width: '100%'
            }
            const sectionscatStyle = {
                display: 'inline-block',
                color: 'black',
                textDecoration: 'none',
                fontFamily: "Open Sans",
                fontWeight: '400',
                fontSize: '15px',
                lineHeight: '17px',
                width: '100%',
                padding: '12px 11px 12px 11px'
            }
              return(
                  <ul style={sectionsulStyle}>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/news' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                                 News
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/politics' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                                 Politics
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/culture' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                              Culture   
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/earth' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                              Earth   
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/identity' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                              Identity   
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/money' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                              Money   
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/series/nowthis-opinions' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                              Opinions   
                            </a>
                      </li>
                  </ul>
              )
        }
        const TopicsCats = () => {
            const sectionsulStyle = {
                listStyle: 'none',
                width: '100%',
                backgroundColor: 'rgb(245, 245, 245)',
                paddingLeft: '0px'
            }
            const catdivspanStyle = {
                width: '100%'
            }
            const sectionsliStyle = {
                width: '100%'
            }
            const sectionscatStyle = {
                display: 'inline-block',
                color: 'black',
                textDecoration: 'none',
                fontFamily: "Open Sans",
                fontWeight: '400',
                fontSize: '15px',
                lineHeight: '17px',
                width: '100%',
                padding: '12px 11px 12px 11px'
            }
            return(
                <ul style={sectionsulStyle}>
                       <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/topic/lgbtq' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                                 LGBTQ&#43;
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/topic/sustainability' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                                 Sustainability
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/topic/health' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                              Health   
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/topic/feel-good' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                              Feel Good  
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/topic/justice' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                              Justice  
                            </a>
                      </li>
                </ul>
            )
        }
        const FeaturesCats = () => {
            const sectionsulStyle = {
                listStyle: 'none',
                width: '100%',
                backgroundColor: 'rgb(245, 245, 245)',
                paddingLeft: '0px'
            }
            const catdivspanStyle = {
                width: '100%'
            }
            const sectionsliStyle = {
                width: '100%'
            }
            const sectionscatStyle = {
                display: 'inline-block',
                color: 'black',
                textDecoration: 'none',
                fontFamily: "Open Sans",
                fontWeight: '400',
                fontSize: '15px',
                lineHeight: '17px',
                width: '100%',
                padding: '12px 11px 12px 11px'
            }
            return(
                <ul style={sectionsulStyle}>
                    <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/topic/common-good' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                                 Command Good 
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/series/seen' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                                 SEEN
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/series/one-small-step' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                              One Small Step  
                            </a>
                      </li>
                      <li style={sectionsliStyle}>
                          <a href='https://nowthisnews.com/topic/in-this-together' 
                             target='_blank'
                             rel='noopener noreferrer'
                             style={sectionscatStyle}
                             >
                             In This Together
                            </a>
                      </li>
                </ul>
            )
        }
        const sidebarmainStyle = {
            height: '100%',
            width: '100%',
            position: 'relative'
        }
        const shadowStyle = {
            backgroundColor: 'grey',
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: '.6'
        }
        const sidebarStyle = {
            
           
        }
        const sidebarulStyle = {
            listStyle: 'none',
            backgroundColor: 'white',
            width: '25%',
            position: 'relative',
            zIndex: '10',
            left: '75%',
            overflowY: 'scroll'
        }
        const sidebarliStyle = {
            marginBottom: '20px',

        }
        const sidebarli2Style = {
            borderBottom: '1px solid lightgrey',
            marginRight: '9px',
            marginTop: '40px'
        }

        const sidebarullineStyle = {
            marginBottom: '20px',
            height: '1px',
            width: '93%',
            border: '.5px solid lightgrey',
        }
        const sidebarlisocialStyle = {
            marginBottom: '0px'
        }
        const termslinksStyle = {
            color: 'rgb(51, 51, 51)',
            fontFamily: "Source Sans Pro",
            fontSize: '13px',
            fontWeight: '400',
            paddingRight: '23px',
            textAlign: 'left'
        }
        const termsAnchorStyle = {
            textStyle: 'none',
            color: 'rgb(51, 51, 51)',
            fontFamily: "Source Sans Pro",
            fontSize: '13px',
            fontWeight: '400',
        }
        const socialStyle = {
            listStyle: 'none',
            maxWidth: '60%',
            paddingLeft: '0px',
            display: 'flex',
            justifyContent: 'space-between'
        }
        const logoStyle = {
            maxWidth: '40%'
        }
        const iconStyle = {
            color: 'black',
            fontSize: '12px'
        }
        const iconxStyle = {
            color: 'black',
            marginRight: '25px',
            fontSize: '25px',
            paddingTop: '10px',
            cursor: 'pointer'
        }
        const iconsearchStyle = {
            color: 'black',
            fontSize: '20px',
            cursor: 'pointer'
        }
        const sidebarinput1Style = {
            height: '100%',
            width: '100%',
            fontSize: '13px',
            lineHeight: '28px',
            textAlign: 'left',
            border: 'none',
            paddingBottom: '20px',
            color: 'lightgrey',
            opacity: '.6'
        }
        const catStyle = {
            listStyle: 'none',
            marginBottom: '30px',
            paddingLeft: '0px'
        }
        const catliStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '16px 0px 16px 0px',
            cursor: 'pointer'
        }
        const lispanStyle = {
            fontWeight: '600',
            fontSize: '17px',
            lineHeight: '19px',
            fontFamily: 'Open Sans',
            marginBottom: '7%',
        }
        const iconplusStyle = {
            paddingTop: '6px'
        }
        const termsulStyle = {
            listStyle: 'none',
            marginBottom: '44px',
            textAlign: 'left',
            textDecoration: 'none',
            color: 'black',
            paddingLeft: '0',
        }
        const termsliStyle = {
            margin: '20px 0px 20px'
        }
        const termsanchorStyle = {
            color: 'black',
            textDecoration: 'none',
            padding: '9px 0px',
            lineHeight: '18px',
            fontWeight: '400',
            fontSize: '14px',
        }
        const forminputStyle = {
            height: '32px',
            paddingLeft: '12px',
            backgroundColor: 'rgb(245, 245, 245)',
            color: 'rgb(34, 34, 34)',
            fontSize: '14px',
            lineHeight: '20px',
            textAlign: 'left',
            border: 'none',
            width: '61%'
        }
        const formbtnStyle = {
            color: 'black',
            fontSize: '15px',
            height: '32px',
            border: 'none',
            backgroundColor: 'rgb(255, 255, 0)',
            fontFamily: 'Open Sans',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            padding: '7px 16px',
            lineHeight: '17px',
            textAlign: 'left',
            width: '38%'
        }
        const formlabelStyle = {
            marginTop: '10px'
        }
        const checkboxtStyle = {
            marginTop: '1px',
            marginRight: '10px',
            marginLeft: '2px'
        }
        const checkboxlabelStyle = {
            fontSize: '13px',
            lineHeight: '16px',
            textAlign: 'left',
            fontStyle: 'normal',
            fontWeight: '400',
            fontFamily: "Source Sans Pro",
            backgroundColor: 'initial',
            color: 'rgb(51, 51, 51)'
        }
        const copyrightsStyle = {
            fontSize: '12px',
            lineHeight: '16px',
            fontStyle: 'normal',
            fontWeight: '400',
            fontFamily: 'Open Sans',
            margin: '0px 16px',
            textAlign: 'center',
            color: 'rgb(0, 0, 0)',
            paddingBottom: '30px'
        }
       
        const agespanStyle = {
            height: '15px'
        }
        const catdivStyle = {
            width: '100%',

        }
        const catdivspanStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
        }
        return (
            <div className='sidebar-main' style={sidebarmainStyle}>
                <div className='shadow' style={shadowStyle}></div>
                <div className='sidebar' style={sidebarStyle}>
                    <ul className='sidebar-ul' style={sidebarulStyle}>
                        <li className='d-flex justify-content-between' style={sidebarliStyle}>
                            <a href='https://nowthisnews.com/'>
                                <svg height="36px" width="137px"
                                    className="nav-header-logo"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 473.8 102.4">
                                    <path d="M222.9 100.8h-16.1l-46.2-65.1v65.1H141V3.1h19.1l43.1 61.8V3.1h19.6v97.7zm79.6-23.2c-2.5 15.1-13.7 24.8-31.5 24.8-20.7 0-34.5-15.1-34.5-37.1 0-21.5 14.3-37.2 34.2-37.2 20.8 0 32.3 14.5 32.3 35.3v6h-47.4c.6 10.7 6.7 17 15.4 17 6.7 0 11.6-2.9 13.2-8.9h18.3zM256 57.5h27.5c-.2-7.5-4.6-13.4-12.7-13.4-7.6.1-13 4.7-14.8 13.4zm120 17.6l12.7-45.4h19.1l-21.6 71.1h-18.1l-11.6-43.6-11.6 43.6h-18.1L305 29.7h19.7l12.7 45.4L349 29.7h15.1L376 75.1zm56.5 4.6c1.6 5.1 6 7.8 11.9 7.8 6 0 10-2.4 10-7 0-3.2-2.2-4.8-7.2-6L433 71.2c-10.8-2.5-18.5-8.1-18.5-20.1 0-13.8 12.4-23.1 28.3-23.1 18 0 27.9 8.6 30.2 22h-18.8c-1.3-4-4.6-7-11.1-7-4.8 0-9.4 2.2-9.4 6.7 0 2.9 1.9 4.5 6.4 5.6l14.6 3.3c12.4 3 18.9 9.9 18.9 20.7 0 14.5-12.6 23.1-29.1 23.1-17.3 0-29.6-8.3-31.7-22.8h19.7z">
                                    </path>
                                    <path fill="#ff0" d="M6.6 59.6H89v35.6H6.6z">
                                    </path>
                                    <path d="M89.5 95.8H6.1V59.1h83.4v36.7zm-82.4-1h81.4V60.1H7.1v34.7z" fill="#231f20">
                                    </path>
                                    <path d="M89 59.6v35.6H6.6V59.6H89m6.7-6.6H0v48.9h95.7V53z">
                                    </path>
                                    <path d="M14.5 68.6h16.1v4.1H25v14.2h-4.8V72.7h-5.6v-4.1zm36.7 0V87h-4.8v-7.3h-7.1V87h-4.8V68.6h4.8v7h7.1v-7h4.8zm9.3 18.3h-4.8V68.6h4.8v18.3zm8.5-5.4c.4 1.3 1.5 1.9 3 1.9s2.5-.6 2.5-1.8c0-.9-.6-1.3-1.7-1.5l-3.5-.7c-2.7-.6-4.7-2-4.7-5.1 0-3.6 3-5.9 7.1-5.9 4.5 0 7 2.5 7.5 5.6h-4.7c-.4-1-1.2-1.8-2.8-1.8-1.4 0-2.3.6-2.3 1.6 0 .8.6 1.3 1.5 1.5l3.6.8c3.1.7 4.9 2.5 4.9 5.3 0 3.8-3.2 5.9-7.2 5.9-4.4 0-7.4-2.1-8-5.7H69zM89 6.6v35.6H6.6V6.6H89M95.7 0H0v48.9h95.7V0z">
                                    </path>
                                    <path d="M31.9 33.8H28l-7.7-10.7v10.7h-4.6V15.5h4.5l7.1 10.1V15.5h4.6v18.3zm12.8.3c-5.3 0-8.9-4-8.9-9.5s3.6-9.5 8.9-9.5c5.3 0 9 4 9 9.5s-3.7 9.5-9 9.5zm0-14.7c-2.5 0-4.1 2.1-4.1 5.3s1.6 5.3 4.1 5.3c2.5 0 4.2-2.1 4.2-5.3s-1.7-5.3-4.2-5.3zm25-3.9l2.8 10.8L75 15.5h4.8L75 33.9h-4.4l-2.8-10.8L65 33.8h-4.4l-4.8-18.4h4.9l2.6 10.8 2.8-10.8h3.6z">
                                    </path>
                                </svg>
                            </a>

                            <i className='fas fa-times' style={iconxStyle}></i>
                        </li>
                        <li className='d-flex justify-content-between' style={sidebarli2Style}>
                            <input type='text'
                                placeholder='What are you looking for?'
                                style={sidebarinput1Style}>
                            </input>

                            <i className='fas fa-search' style={iconsearchStyle}></i>
                        </li>
                        <li style={sidebarliStyle}>
                            <ul style={catStyle}>
                                <li style={catliStyle}>
                                    <div style={catdivStyle}>
                                     <span style={catdivspanStyle}>
                                       <span style={lispanStyle}>Sections</span>
                                       <i className='fas fa-plus' style={iconplusStyle}></i>
                                     </span>
                                     <SectionsCats />
                                     </div>
                                </li>
                                <li style={catliStyle}>
                                   <div style={catdivStyle}>
                                       <span style={catdivspanStyle}>
                                         <span style={lispanStyle}>Topics</span>
                                         <i className='fas fa-plus' style={iconplusStyle}></i>
                                       </span>
                                       <TopicsCats />
                                   </div>
                                   
                                </li>
                                <li style={catliStyle}>
                                <div style={catdivStyle}>
                                       <span style={catdivspanStyle}>
                                          <span style={lispanStyle}>Features</span>
                                          <i className='fas fa-plus' style={iconplusStyle}></i>
                                       </span>
                                       <FeaturesCats />
                                   </div>
                                   
                                </li>
                                <li style={catliStyle}>
                                    <span style={lispanStyle}>Podcasts</span>
                                </li>
                            </ul>
                        </li>
                        <li className='line' style={sidebarullineStyle}></li>
                        <li style={sidebarliStyle}>
                            <ul style={termsulStyle}>
                                <li style={termsliStyle}>
                                    <a href='https://www.groupninemedia.com/advertise'
                                        style={termsanchorStyle}
                                        
                                    >
                                        Advertise With Us
                                    </a>
                                </li>
                                <li style={termsliStyle}>
                                    <a href='https://www.groupninemedia.com/careers'
                                        style={termsanchorStyle}

                                    >
                                        Careers
                                    </a>
                                </li>
                                <li style={termsliStyle}>
                                    {/* this anchor here leads to a specific icon in the user's computer */}
                                    <a href='#' style={termsanchorStyle}>
                                        Contact Us
                                    </a>
                                </li>
                                <li style={termsliStyle}>
                                    <a href='https://www.groupninemedia.com/legal/cookie-policy'
                                        style={termsanchorStyle}
                                    >
                                        Cookie Policy
                                    </a>
                                </li>
                                <li style={termsliStyle}>
                                    <a href='https://www.groupninemedia.com/legal/ccpa'
                                        style={termsanchorStyle}
                                    >
                                        Do Not Sell My Personal Information
                                    </a>
                                </li>
                                <li style={termsliStyle}>
                                    <a href='https://www.groupninemedia.com/press'
                                        style={termsanchorStyle}
                                    >
                                        Press
                                    </a>
                                </li>
                                <li style={termsliStyle}>
                                    <a href='https://www.groupninemedia.com/legal/privacy'
                                        style={termsanchorStyle}
                                    >
                                        Privacy
                                    </a>
                                </li>
                                <li style={termsliStyle}>
                                    <a href='https://www.groupninemedia.com/legal/tscs'
                                        style={termsanchorStyle}
                                    >
                                        Terms &#43; Conditions
                                    </a>
                                </li>

                            </ul>
                        </li>
                        <li style={sidebarliStyle} className='form'>
                            <input type='email'
                                placeholder='Your Email Address'
                                style={forminputStyle}
                            ></input>
                            <button type='submit' style={formbtnStyle}>subscribe</button>
                            <label style={formlabelStyle}>
                                <span style={agespanStyle} className='d-flex justify-content-left'>
                                    <input type='checkbox' style={checkboxtStyle}></input>
                                    <p style={checkboxlabelStyle}>I am 21&#43; years old</p>
                                </span>

                                <p style={termslinksStyle} className='row'>
                                    <span>
                                        By Signing Up&#44; I Agree to the
                                        <a href='https://www.groupninemedia.com/legal/tscs' 
                                           style={termsAnchorStyle}
                                           target='_blank' 
                                           rel='noopener noreferrer'
                                           > Terms </a>
                                        and
                                    </span>

                                    <a href='https://www.groupninemedia.com/legal/privacy'
                                        style={termsAnchorStyle}
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                    > Privacy Policy</a>&#46;
                                </p>
                            </label>

                        </li>
                        <li style={sidebarlisocialStyle} className='row'>
                            {/* the svg here isn't showing*/}
                            <a href='https://www.groupninemedia.com/'
                               target='_blank' 
                               rel='noopener noreferrer'
                               style={logoStyle}
                               className='col'
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
                            <ul className='col' style={socialStyle}>
                                <li className='col'>
                                    <a href='https://www.facebook.com/NowThisNews/'
                                       target='_blank' 
                                       rel='noopener noreferrer'
                                      >

                                        <i className='fab fa-facebook' style={iconStyle}></i>
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://www.youtube.com/channel/UCn4sPeUomNGIr26bElVdDYg'
                                       target='_blank' 
                                       rel='noopener noreferrer'
                                      >

                                        <i className='fab fa-youtube' style={iconStyle}></i>
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://story.snapchat.com/p/27170b6d-1c82-4faf-af52-b77b28487b8a/3209665382008832'
                                       target='_blank' 
                                       rel='noopener noreferrer'
                                      >

                                        <i className='fab fa-snapchat-ghost' style={iconStyle}></i>
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://www.instagram.com/nowthisnews/'
                                       target='_blank' 
                                       rel='noopener noreferrer'
                                    >

                                        <i className='fab fa-instagram' style={iconStyle}></i>
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://twitter.com/nowthisnews'
                                       target='_blank' 
                                       rel='noopener noreferrer'
                                      >

                                        <i className='fab fa-twitter' style={iconStyle}></i>
                                    </a>
                                </li>
                                <li className='col'>
                                    <a href='https://www.tiktok.com/@nowthis?lang=en'
                                       target='_blank' 
                                       rel='noopener noreferrer'
                                    >

                                        <i className='fab fa-tiktok' style={iconStyle}></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li style={sidebarliStyle}>
                            <p style={copyrightsStyle}>2021 Group Nine Media Inc&#46;</p>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}