import React from 'react';
// import { AiFillGitHub } from 'react-icons/ai';

function Footer() {
    return (
        <footer className=''>
            <a
                className='footer-link mx-2'
                href='https://github.com/Deiontre10'
                id='GitHub'
                alt='GitHub'
                target={'_blank'}
            >GitHub</a>

            <a
            className='footer-link mx-2'
                href='https://www.linkedin.com/in/travontazlowry/'
                id='LinkedIn'
                alt='LinkedIn'
                target={'_blank'}
            >LinkedIn</a>
        </footer>
    )
};

export default Footer;