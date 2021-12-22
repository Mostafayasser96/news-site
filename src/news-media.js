import React, { Component } from 'react';


export default class NewsMedia extends Component{
    constructor(props){
        super(props);
    }
    
     render(){
        const mediaData = {
             src: 'https://media.gettyimages.com/videos/male-anchor-presenting-breaking-news-about-lockdown-restricton-video-id1271576933?s=640x640',
             alt: 'news image',
             newsType: 'news',
             date: '12/12/2012',
             h2: 'this is the main headline of the news',
             p: "WASHINGTON (AP) - The Food and Drug Administration on Thursday permanently removed a major obstacle for women seeking abortion pills, eliminating a long, standing requirement that they pick up the medication in person."
        }
        const mediaStyle = {
            marginTop: '4px',
            marginBottom: '16px'
        }
        const imgStyle = {
            width: '17%',
            float: 'left',
            paddingTop: '1%'
        }
        const typedateStyle = {
            marginRight: '60%',
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: '2%'
        }
        const newstypeStyle = {
            fontSize: '12px',
            lineHeight: '12px',
            marginRight: '0px !important',
            textTransform: 'uppercase',
            fontWeight: '700'
        }
        const dateStyle = {
            fontSize: '12px',
            lineHeight: '12px',
            color: 'gray',
            fontWeight: '700',
            paddingRight: '25%'
        }
        const headingStyle = {
            marginLeft: '19%',
            fontSize: '31px',
            lineHeight: '35px',
            textAlign: 'left',
            color: 'rgb(0, 0, 0)',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontFamily: 'Open Sans',
            backgroundColor: 'initial',
        }
        const paragraphStyle = {
            fontSize: '15px',
            lineHeight: '25px',
            textAlign: 'left',
            fontStyle: 'normal',
            fontWeight: '400',
            fontFamily: "Source Sans Pro",
            backgroundColor: 'initial',
            textTransform: 'none',
            color: 'rgb(117, 117, 117)',
            marginTop: '4px',
            paddingLeft: '2%'
        }
         return(
             <div className='media' style={mediaStyle}>
                 <img src={mediaData.src}
                      className ='align-self-start mr3' 
                      alt={mediaData.alt}
                      style={imgStyle}
                      />
                 <div className='media-body'>
                  <div className='type-date' style={typedateStyle}>
                       <span  style={newstypeStyle} >{mediaData.newsType}</span>
                        <span style={dateStyle}>{mediaData.date}</span>
                    </div>   
                   <h2 className='row' style={headingStyle}>{mediaData.h2}</h2>
                   <p className='row' style={paragraphStyle}>{mediaData.p}</p>
                 </div>
             </div>
         )
     }
}