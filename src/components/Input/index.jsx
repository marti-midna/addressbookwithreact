import styles from "./styles.module.scss";
import { useState } from "react";

export const Input = ({ takeInput, setTakeInput}) => {



    return(
        <div className={styles.search_input}>
            <form>
                <input className={styles.input} type="text" id="search" placeholder="search" 
                value={takeInput} onChange={(e) => setTakeInput(e.target.value)} />
            </form>
        </div>
    )
}