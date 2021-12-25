import React, { Component } from 'react';
import SubmissionForm from './sub-form';
import NewsMedia from './news-media';


export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='main'>
                    <div className='news'>
                        <div className='news-div1'>
                            <NewsMedia />
                            <NewsMedia />
                            <NewsMedia />
                            <NewsMedia />
                            <NewsMedia />
                            <NewsMedia />
                            <NewsMedia />
                            <NewsMedia />
                            <NewsMedia />
                        </div>
                        <SubmissionForm />
                        <div className='news-div2'>
                            <NewsMedia />
                            <NewsMedia />
                            <NewsMedia />
                        </div>
                        <button className='load-more-btn' type='submit'>
                            load more
                        </button>
                    </div>
                    <div className='empty-square'>

                    </div>
                </div>



            </div>
        )
    }
}