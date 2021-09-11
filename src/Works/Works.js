import React from "react";
import style from "./Works.module.css"
import Work from "./Work/Work";

export function Works() {
    return (
        <div className={style.WorksWrapper}>
                <div className={style.worksContainer}>
                   <h2 className={style.title}>My Works</h2>
                    <div className={style.works}>
                        <Work nameProject={"Web Site"} shortDesc={"Lorem ipsum dolor sit amet."}/>
                        <Work nameProject={"Web Site"} shortDesc={"Lorem ipsum dolor sit amet."}/>




                    </div>

                </div>
        </div>


    )
}

export default Works;
