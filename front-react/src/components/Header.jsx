import React from 'react';

import { NavBar } from "./index";

function Header() {
    return(
        <div className="header">
            <div className="header-container">
                <div className="header__logo">
                    <a className="header__logo__link" href="/login">
                        <img className="header__logo__img" src="/Images/logo-icon.svg" alt=""/>
                        <h4 className="header__logo__title">
                            All inclusive car service
                        </h4>
                    </a>
                </div>
                <NavBar/>
            </div>
        </div>
    )
}

export default Header;

