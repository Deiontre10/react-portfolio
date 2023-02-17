import React, { useState } from 'react';
import Header from './Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <body>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer handlePageChange={handlePageChange} />
        </body>
    );
}