import React, { useState } from 'react';
import Header from "./Header";

function NavBar() {
    return (
        <nav className="header-container__menu">
            <ul className="header-container__menu__list">
                <li className="header-container__menu__list__item">
                    <a className="header-container__menu__list__item-link" href="/user">
                        Создать объявление
                    </a>
                </li>

                <li className="header-container__menu__list__item">
                    <a className="header-container__menu__list__item-link" href="/user">
                        Создать объявление
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;