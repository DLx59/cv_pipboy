"use client";

import React, {useState} from 'react';

const Header: React.FC = () => {
    const [active, setActive] = useState<string>('stat');

    const handleClick = (section: string) => {
        setActive(section);
    };

    return (
        <header className="container mt-2" style={{ fontFamily: 'Monofonto, sans-serif' }}>
            <nav className="navbar mx-auto flex justify-center">
                <div className="header">
                    <ul className="menu flex">
                        <li className={`nav-item ${active === 'stat' ? 'active' : ''}`} onClick={() => handleClick('stat')}>
                            <a href="#stat">Stat</a>
                        </li>
                        <li className={`nav-item ${active === 'exp' ? 'active' : ''}`} onClick={() => handleClick('exp')}>
                            <a href="#exp">Exp</a>
                        </li>
                        <li className={`nav-item ${active === 'data' ? 'active' : ''}`} onClick={() => handleClick('data')}>
                            <a href="#data">Data</a>
                        </li>
                        <li className={`nav-item ${active === 'map' ? 'active' : ''}`} onClick={() => handleClick('map')}>
                            <a href="#map">Map</a>
                        </li>
                        <li className={`nav-item ${active === 'color' ? 'active' : ''}`} onClick={() => handleClick('color')}>
                            <a href="#color">Color</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
