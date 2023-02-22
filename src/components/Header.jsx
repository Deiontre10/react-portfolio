import React from 'react'
import NavTabs from './NavTabs'
export default function Header({ currentPage, handlePageChange }) {

    return (
        <header>
            <div>
                <h1>Travontaz Lowry</h1>
            </div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}