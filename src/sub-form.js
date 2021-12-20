import React, { Component } from 'react';


export default class SubmissionForm extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const subformStyle = {
            backgroundColor: 'rgb(245, 245, 245)',
            padding: '24px 16px',
            marginBottom: '28px',
            marginTop: '8%'
        }
        const mediaemptyStyle = {
            width: '10%',
            height: '70px',
            float: 'left'
        }
        const mediabodyStyle = {
            width: '90%',
        }
        const mediah2Style = {
            fontSize: '31px',
            lineHeight: '35px',
            textAlign: 'left',
            color: 'rgb(51, 51, 51)',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontFamily: 'Open Sans',
            backgroundColor: 'initial',
            textTransform: 'none',
            whiteSpace: 'normal'
        }
        const mediaparagraphStyle = {
            fontSize: '17px',
            lineHeight: '28px',
            textAlign: 'left',
            color: 'rgb(51, 51, 51)',
            fontWeight: '400',
            fontFamily: "Source Sans Pro",
            backgroundColor: 'initial',
            textTransform: 'none',
            fontStyle: 'normal'
        }
        const forminputStyle = {
            textAlign: 'left',
            paddingLeft: '12px',
            color: 'rgb(100, 100, 100)',
            lineHeight: '20px',
            backgroundColor: 'white',
            border: 'none',
            height: '40px',
            width: '80%',
            fontSize: '14px'
        }
        const formbtnStyle = {
            backgroundColor: 'rgb(255, 255, 0)',
            height: '40px',
            padding: '0px 16px',
            border: 'none',
            textTransform: 'uppercase',
            fontSize: '13px',
            fontWeight: '700'
        }
        const termsStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '15px'
        }
        const agespanStyle = {
            fontSize: '13px',
            fontWeight: '400',
            lineHeight: '16px',
            textAlign: 'left',
            paddingLeft: '20px'
        }
        const checkboxStyle = {
            width: '14px',
            height: '14px',
            backgroundColor: 'rgb(245, 245, 245)',
            marginRight: '10px',
            marginTop: '3px'
        }
        const termslinksStyle = {
            color: 'rgb(51, 51, 51)',
            fontFamily: "Source Sans Pro",
            fontSize: '13px',
            fontWeight: '400',
            paddingRight: '23px'
        }
        const termsAnchorStyle = {
            textStyle: 'none',
            color: 'rgb(51, 51, 51)',
            fontFamily: "Source Sans Pro",
            fontSize: '13px',
            fontWeight: '400',
           

        }
        return(
            <div className='sub-form' style={subformStyle}>
                <div className='media'>
                    <div className='media-empty' style={mediaemptyStyle}></div>
                    <div className='media-body' style={mediabodyStyle}>
                        <h2 style={mediah2Style}>NowThis In Your Inbox</h2>
                        <p style={mediaparagraphStyle}>Informative and inspiring stories delivered straight to you</p>
                    </div>
                </div>
                <form>
                    <input type='text' 
                           name='name' 
                           placeholder='Enter Email Address'
                           style={forminputStyle}></input>
                    <button type='submit' style={formbtnStyle}>subscribe</button>
                    <div className='terms' style={termsStyle}>
                        <label style={agespanStyle}>
                            <input type='checkbox' style={checkboxStyle}></input>
                            <span>I am 21&#43; years old</span>
                        </label>
                        <span style={termslinksStyle}>By Signing Up&#44; I Agree to the 
                               <a href='https://www.groupninemedia.com/legal/tscs' 
                                  style={termsAnchorStyle}
                                  target='_blank' 
                                  rel='noopener noreferrer'
                                  > Terms </a> 
                            and  
                               <a href='https://www.groupninemedia.com/legal/privacy' 
                                  style={termsAnchorStyle}
                                  target='_blank' 
                                  rel='noopener noreferrer'
                                  > Privacy Policy</a>&#46;</span>
                    </div>
                </form>
            </div>
        )
    }
    
}