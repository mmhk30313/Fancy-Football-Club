import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className="my-2">
            <footer className="text-center text-warning">
                <p class="">Copyright © {date} mahadi</p>
            </footer>
        </div>
    );
};

export default Footer;