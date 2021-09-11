import React from "react";
import style from "./footer.module.css"

export function Footer() {
    return (
        <div className={style.footerWrapper}>

            <div className={style.container}>
                <h2 className={style.title}>Dzmitry Yermakou</h2>
              <div className={style.items}>
                  <div className={style.item}></div>
                  <div className={style.item}></div>
                  <div className={style.item}></div>
                  <div className={style.item}></div>
              </div>
                <span>&#169;Все права защищены</span>
            </div>

        </div>
    )
}