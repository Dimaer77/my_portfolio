import React from "react";
import style from "./skillsStyle.module.css"
import {Skill} from "./skill/Skill";


export function Skills() {
    let {skillsWrapper, containerSkills, titleBlock, title, skills} = {...style}

    return (
        <div className={skillsWrapper}>
            <div className={containerSkills}>
                    <h2 className={title}> My skills</h2>
                <div className={skills}>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eum nihil pariatur qui rem sequi tenetur ut veniam voluptates voluptatibus! Accusamus asperiores aspernatur, culpa eius ipsa magni nihil omnis veritatis?"}/>
                    <Skill title={"HTML"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eum nihil pariatur qui rem sequi tenetur ut veniam voluptates voluptatibus! Accusamus asperiores aspernatur, culpa eius ipsa magni nihil omnis veritatis?" }/>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eum nihil pariatur qui rem sequi tenetur ut veniam voluptates voluptatibus! Accusamus asperiores aspernatur, culpa eius ipsa magni nihil omnis veritatis?"}/>

                </div>
            </div>
        </div>


    )
}

export default Skills;
