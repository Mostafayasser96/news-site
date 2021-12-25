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
        
         return(
             <div className='media'>
                 <img src={mediaData.src}
                      className ='media-img align-self-start mr3' 
                      alt={mediaData.alt}
                      />
                 <div className='media-body'>
                  <div className='type-date'>
                       <span  className='news-type'>{mediaData.newsType}</span>
                        <span className='news-date'>{mediaData.date}</span>
                    </div>  
                     {/* note: the anchor here goes to another page  */}
                   <a href='#' className='news-details'>
                   <h2 className='media-h2'>{mediaData.h2}</h2>
                   <p className='media-p'>{mediaData.p}</p>
                   </a>
                  
                 </div>
             </div>
         )
     }
}