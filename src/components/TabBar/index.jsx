import styles from './styles.module.scss';

import { Link } from "react-router-dom";
// import { useState } from "react";

// const vociMenu = ["Preferiti" , "Contatti" , "Aggiungi"];

export const TabBar = (props) => {

    // const [current, setCurrent ] = useState('');

    // const clicked = (event, voceselezionata) => {
    //     event.preventDefault();
    //     console.log('mi hai cliccato ', voceselezionata);
    //     setCurrent(voceselezionata);
    //     props.catSelection(voceselezionata);
        
    // }

    return(
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/preferiti">Preferiti</Link>
            </li>
            <li>
              <Link to="/aggiungi-contatto">Aggiungi</Link>
            </li>
          </ul>
        </nav>
    )
}