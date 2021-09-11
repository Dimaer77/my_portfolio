import React from "react";
import style from './Nav.module.css';


export function Nav() {
    return (
        <div className={style.container}>
            <div className={style.nav}>
                <a href={"none"}>Main</a>
                <a href={"none"}>Skills</a>
                <a href={"none"}>Works</a>
                <a href={"none"}>Contacts</a>
            </div>
        </div>
    )
}

export default Nav;
