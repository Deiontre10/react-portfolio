import React from 'react'

export default function NavTabs({ currentPage, handlePageChange }) {
    <nav>
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <a href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
            </li>
        </ul>
    </nav>
}