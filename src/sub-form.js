import React, { Component } from 'react';


export default class SubmissionForm extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className='sub-form'>
                <div className='media-subform'>
                    <div className='media-empty'></div>
                    <div className='media-body1'>
                        <h2 className='h2'>NowThis In Your Inbox</h2>
                        <p className='p'>Informative and inspiring stories delivered straight to you</p>
                    </div>
                </div>
                <form>
                    <input type='text' 
                           name='name' 
                           placeholder='Enter Email Address'
                           className='input'
                           ></input>
                    <button type='submit' className='sub-bton'>subscribe</button>
                    <div className='subform-terms'>
                        <label className='age-span'>
                            <input className='subform-checkbox-input' type='checkbox'></input>
                            <span>I am 21&#43; years old</span>
                        </label>
                        <span className='subform-terms-links'>By Signing Up&#44; I Agree to the 
                               <a className='subform-terms-a'
                                  href='https://www.groupninemedia.com/legal/tscs' 
                                  target='_blank' 
                                  rel='noopener noreferrer'
                                  > Terms </a> 
                            and  
                               <a className='subform-terms-a'
                                  href='https://www.groupninemedia.com/legal/privacy' 
                                  target='_blank' 
                                  rel='noopener noreferrer'
                                  > Privacy Policy</a>&#46;</span>
                    </div>
                </form>
            </div>
        )
    }
    
}