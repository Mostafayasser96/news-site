import React, { Component } from 'react';
import SubmissionForm from './sub-form';
import NewsMedia from './news-media';


export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const emptydivStyle = {
            width: '33%',

        }
        const newsdivStyle = {
            width: '68%',
        }
        const loadmorebtnStyle = {
            marginTop: '5%',
            border: 'none',
            backgroundColor: 'rgb(255, 255, 0)',
            textTransform: 'uppercase',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '20px',
            padding: '12px 20px',
            cursor: 'pointer',
            marginLeft: '46%'
        }
        const maindivStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '33%'
        }
        return (
            <div className='container'>
                <div className='main' style={maindivStyle}>
                    <div className='news' style={newsdivStyle}>
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
                        <button type='submit' style={loadmorebtnStyle}>
                            load more
                        </button>
                    </div>
                    <div className='empty-square' style={emptydivStyle}>

                    </div>
                </div>



            </div>
        )
    }
}