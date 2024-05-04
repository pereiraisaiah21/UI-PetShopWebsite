import React, { useState } from 'react'

import { PiMagnifyingGlassLight, PiDotsNineBold, PiUserSquareLight } from "react-icons/pi";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="Header">
            <div className="container">
                <div className="Header__content">
                    <div className="Header__logo">
                        <img src="/public/images/Logo.png" alt="Logo" />
                    </div>
                    {isMobileMenuOpen && (
                        <nav className="Header__nav">
                            <ul className="Header__nav-list">
                                <li className="Header__nav-item"><a href="/">Home</a></li>
                                <li className="Header__nav-item"><a href="/produtos">Produtos</a></li>
                                <li className="Header__nav-item"><a href="/carrinho">Carrinho</a></li>
                                <li className="Header__nav-item"><a href="/contato">Contato</a></li>
                            </ul>
                        </nav>
                    )}
                    <div className="Header__search">
                        <input type="text" className="Header__search-input" placeholder="Buscar" />
                        <button className="Header__search-button">
                            <PiMagnifyingGlassLight />
                        </button>
                    </div>
                    <button className="Header__mobile-button">
                        <PiUserSquareLight />
                    </button>
                    <button className="Header__mobile-button" onClick={toggleMobileMenu}>
                        <PiDotsNineBold />
                    </button>
                    <div className="Header__community">
                        <button className="Header__community-button">Junte-se à Comunidade</button>
                    </div>
                    <div className="Header__currency">
                        <select className="Header__currency-select">
                            <option value="dolar">Dólar</option>
                            <option value="real">Real</option>

                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
