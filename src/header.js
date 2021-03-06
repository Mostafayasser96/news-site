import React, { Component } from 'react';
import CategoryImage from './images/header-image.png';
import Modal from 'react-bootstrap/Modal';
import OffcanvasSidebar from './sidebar';


// this link is important: https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=//media.sumo.com/e5d23c25e14c6ed59994f237d7e1c6345d73a52504e16afe546f7ea9bafa1ceb&supported=webp,webp.alpha,webp.animation,webp.lossless&hash=0d4b696bb67c90ed69b24fb45d338e63b4e0f56eac740cf6fbeaf6f4a1964dd4&format=webp


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appear: false,
      loading: true,
      
    }

  }
  componentDidMount = () => {
    setTimeout(() =>{
      // this.setState({  })}, 3000
      this.setModalFlag(true)}, 3000);
  }
  setModalFlag = (val) => {
    this.setState({isOpen: val});
    
  }
  HandleSidebarAppear = (e) => {
    this.setState({ appear: !this.state.appear });
    let sidebarElement = document.getElementById('Sidebar');
    console.log('it appears here in the parent component');
    // sidebarElement.addEventListener(this.state.appear,function(e){
    //         sidebarElement.style.transition = '2s';
    // } )
  }
  

 

  render() {
    const x = this.state.appear;
    
    const MailServiceModal = (props) => {
			// const [isOpen, setIsOpen] = React.useState(false);
			return (
			   <>
				<Modal 
					 {...props}
					 size="lg"
					 aria-labelledby='contained-model-title-vcenter'
					 centered
					 show={this.state.isOpen}
					 onHide={() => this.setModalFlag(false)}
				>	
				<div className='mail-div'>
	  
				  {/* ================ note that there is an error here when importing images (the sources contain
									   & that makes an error)
									==============================================  ) */}
				  {/* <img src='./images/mail-service-image.jpeg' alt='mail service image' />
								   
									   <img src='https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=//media.
												 sumo.com/6d206e45926826c534cb181feb8b2e8a65959663eda2a6edfcd4c10ac8
												 6ade95&supported=webp,webp.alpha,webp.animation,webp.lossless&hash
												 =84a3e2365be8a7520a9e99e888d93d0d46aa2f7b72827874f0afd8b6e5f9e914&
												 format=webp' alt='mail service know this' /> */}
				  {/* <div className='mail-service-img'>
									  <img className='cover-img' />
								  </div>
								   <div className='nowthis-img'>
	  
								   </div> */}
				  <div className='col cover-div' >
					<div className='nowthis-img'>
	  
					</div>
					<div>
					  <h3 className='cover-div-h3'>The Biggest Stories</h3>
					  <p className='cover-div-p'>delivered straight to you in our newsletter</p>
					</div>
	  
				  </div>
	  
				  <div className='col form'>
					<i className='f-x-i fas fa-times' onClick={()=>this.setModalFlag(false)}></i>
					<div className='nowthis-logo'>
					  <img className='mail-service-logo'
						src="https://micro-cdn.sumo.com/image-resize/sumo-convert?uri=//media.sumo.com/9815bc8336b7f2c66d36c94cb649b504b7c07ae76aa530dbfc39396fb0dba3c0&supported=webp,webp.alpha,webp.animation,webp.lossless&hash=a09e3b702837ef88a3fb8b258d4c187061411ff22d2efc14d11d956ba1715ede&format=webp"
						alt='nowthis logo'
					  />
					</div>
					<input type='email'
					  placeholder='Enter Your Email'
					  className='row mail-service-email'
					></input>
					<button className='mail-service-btn'
					  type='submit'
					>subscribe now</button>
					<p className='mail-service-terms'>
					  By signing up for the NowThis Newsletter, you agree to our&nbsp;
					  <a className='mail-service-terms-a1'
						href='https://www.groupninemedia.com/legal/tscs'
						target='_blank'
						rel='noopener noreferrer'
					  > Terms of Service </a>&nbsp;and&nbsp;
					  <a className='mail-service-terms-a2'
						href='https://www.groupninemedia.com/legal/privacy'
						target='_blank'
						rel='noopener noreferrer'
					  >Privacy Policy.</a>
					</p>
				  </div>
				</div>
				</Modal>
				</>				
			)
		  }

    return (
      <div className='main-header'>

          <MailServiceModal />
          {x && <OffcanvasSidebar handleSidebarAppear={this.HandleSidebarAppear} />}
          <div className='header'>
            <ul className='header-ul'>
              <li className='header-ul-li1'>
                <a href='https://nowthisnews.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
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
              </li>
              <li>
                <a href='https://www.facebook.com/NowThisNews'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='h-i fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/nowthisnews/'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='h-i fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/nowthisnews'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='h-i fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='https://story.snapchat.com/p/27170b6d-1c82-4faf-af52-b77b28487b8a/3209665382008832'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='h-i fab fa-snapchat-ghost'></i>
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/nowthisnews'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='h-i fab fa-youtube'></i>
                </a>
              </li>
              <li>
                <a href='https://www.tiktok.com/@nowthis?lang=en'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='h-i fab fa-tiktok'></i>

                </a>
              </li>

              <li className='header-sub-btn'>
                <a className='header-subbtn-a'
                  href='https://nowthisnews.com/newsletters'
                  target='_blank'
                  rel='noopener noreferrer'
                >

                  <i className='h-i-env far fa-envelope'></i>
                  <span>subscribe</span>
                </a>

              </li>
              <li>
                <a rel='noopener noreferrer'
                  onClick={this.HandleSidebarAppear}
                >
                  <i className='h-i fas fa-bars'></i>
                </a>

              </li>
            </ul>
            <ul className='header-ul-2'>
              <li>
                <a className='header-ul2-a1'
                  href='https://nowthisnews.com/news'>
                  News
                </a>
              </li>
              <li>
                <a className='header-ul2-a'
                  href='https://nowthisnews.com/politics'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Politics
                </a>
              </li>
              <li>
                <a className='header-ul2-a'
                  href='https://nowthisnews.com/culture'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Culture
                </a>
              </li>
              <li>
                <a className='header-ul2-a'
                  href='https://nowthisnews.com/earth'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Earth
                </a>
              </li>
              <li>
                <a className='header-ul2-a'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  More &#43;
                </a>
              </li>
              <li className='header-ul2-li-6'>
                <a className='header-ul2-li6-a'
                  href='https://nowthisnews.com/podcast'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Podcasts
                </a>
              </li>
            </ul>
            <div className='banner'>
              <div className='page-category'>
                <img className='category'
                  src={CategoryImage} />
              </div>
            </div>
          </div>


        
        
      </div>
    )
  }
}