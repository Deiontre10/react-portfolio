import React from 'react';
// import { AiFillGitHub } from 'react-icons/ai';

function Footer() {
    return (
        <footer className=''>
            <a
                className='btn btn-primary m-1'
                href='https://github.com/Deiontre10'
                id='GitHub'
                alt='GitHub'
                target={'_blank'}
            >GitHub</a>

            <a
            className='btn btn-primary m-1'
                href='https://www.linkedin.com/in/travontazlowry/'
                id='LinkedIn'
                alt='LinkedIn'
                target={'_blank'}
            >LinkedIn</a>
        </footer>
    )
};

export default Footer;