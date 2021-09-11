import React from "react";
import style from "./contact.module.css"


export function Contact() {

    return (
        <div className={style.contactWrapper}>

            <div className={style.container}>

                <h2 className={style.title}>Contact</h2>
                <div className={style.containerForm}>
                    <form className={style.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea/>
                    </form>
                    <a className={style.button} href='#'>Send</a>
                </div>
            </div>
        </div>


    )
}

export default Contact;
