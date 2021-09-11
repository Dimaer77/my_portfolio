import React from "react";
import style from "./work.module.css"

export function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.image}>
                <a className={style.button} href="##">Смотреть</a>
            </div>
            <div className={style.description}>
                <span className={style.nameProject}>{props.nameProject}</span>
                <span className={style.shortDescription}>{props.shortDesc}</span>
            </div>
        </div>


    )
}

export default Work;
