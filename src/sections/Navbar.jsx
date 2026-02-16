// src/sections/Navbar.jsx
import { useState } from 'react';
import { navLinks } from '../constants/index.js';

const HEADER_OFFSET = 90; // set to your navbar height (px)

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigateTo = (href) => {
        setIsOpen(false);

        // supports "#home" AND "/#home"
        const hash = href?.includes('#') ? `#${href.split('#')[1]}` : href;
        if (!hash || hash === '#') return;

        // if you ever add routing, this still works from other paths
        if (window.location.pathname !== '/') {
            window.location.href = `/${hash}`;
            return;
        }

        const el = document.querySelector(hash);

        // update URL either way
        window.history.pushState(null, '', hash);

        if (!el) return;

        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const NavItems = () => (
        <ul className="nav-ul">
            {navLinks.map((item) => (
                <li key={item.id} className="nav-li">
                    <a
                        href={item.href}
                        className="nav-li_a"
                        onClick={(e) => {
                            e.preventDefault();
                            navigateTo(item.href);
                        }}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">

                    <a
                        href="/#home"
                        className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            navigateTo('/#home');
                        }}
                    >
                        Vivan Desai
                    </a>

                    <button
                        onClick={() => setIsOpen((v) => !v)}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu"
                    >
                        <img
                            src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
                            alt="toggle"
                            className="w-6 h-6"
                        />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>


            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
