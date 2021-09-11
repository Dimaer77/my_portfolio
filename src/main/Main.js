import React from "react";
import style from './Main.module.css';
import photo from "../image/photo.png"


export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.textInfo}>
                    <h1 className={style.title}> Hello </h1>
                    <h2 className={style.title}> I'm Dzmitry Yermakou </h2>
                    <h3 className={style.title}>Front-End Developer</h3>
                </div>
                <div className={style.boxPhoto}>
                    <img className={style.photo} src={photo} alt="photo"/>
                </div>
            </div>

        </div>
    )
}

export default Main;
