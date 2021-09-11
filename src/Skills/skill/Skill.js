import React from "react";
import style from "./skill.module.css"


export function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.skillIcon}></div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>


    )
}


