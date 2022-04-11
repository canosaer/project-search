import React, { useState, useEffect } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen ] = useState(false);
    const [toggleBars, setToggleBars ] = useState([]);

    const sidebarStyles = menuOpen ? 'menu menu_open' : 'menu'
    const dimmerStyles = menuOpen ? 'dimmer dimmer_open' : 'dimmer'

    const lockScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop)
        }
    }

    const unlockScroll = () => {
        window.onscroll = function() {}
    }

    useEffect(() => {
        let toggleArray = ['','','']
        toggleArray.fill('toggle__bar')

        if(menuOpen){
            window.scrollTo(0,0)
            lockScroll()
            for(let i=0;i<3; i++){
                toggleArray[i] = toggleArray[i] + ` toggle__bar_${i} toggle__bar_open`
            }
            setToggleBars(toggleArray)
        }
        else{
            unlockScroll()
            for(let i=0;i<3; i++){
                toggleArray[i] = toggleArray[i] + ` toggle__bar_${i}`
            }
            setToggleBars(toggleArray)
        } 

    }, [menuOpen]);

    return(
        <header className="header">

            <h1 className="header__heading">Eric Canosa</h1>
            <div className={dimmerStyles}></div>
            <button className="toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {toggleBars.map((bar, i) => {
                    const key = `bar--${i}`

                    return(
                        <div key={key} className={bar}></div>
                    )
                })}
            </button>

            <nav className={sidebarStyles}>
                <ul className="menu__list">
                    <li className="menu__item"><a href="#projects" onClick={() => menuOpen ? setMenuOpen(!menuOpen) : null} className="menu__link">Projects</a></li>
                    <li className="menu__item"><a href="mailto:canosaer@gmail.com" onClick={() => menuOpen ? setMenuOpen(!menuOpen) : null} className="menu__link">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}