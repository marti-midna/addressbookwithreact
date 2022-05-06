import "../../src/App.css";

import { useState } from "react";

const vociMenu = ["Preferiti" , "Contatti" , "Aggiungi"];

export const TabBar = (props) => {

    const [current, setCurrent ] = useState('');

    const clicked = (event, voceselezionata) => {
        event.preventDefault();
        console.log('mi hai cliccato ', voceselezionata);
        setCurrent(voceselezionata);
        props.catSelection(voceselezionata);
        
    }

    return(
        <div className="menu">
            <ul>
                {vociMenu.map((item, index) =>(
                <li key={index}>
                    <a href={item} onClick={(event) => clicked(event, item)}>{item}</a>
                </li>
                )
                )}
            </ul>
        </div>
    )
}