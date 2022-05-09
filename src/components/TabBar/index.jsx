import styles from './styles.module.scss';
import { AiFillHome, AiOutlineStar, AiOutlinePlusCircle } from "react-icons/ai";

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
            <Link to="/preferiti"><AiOutlineStar size="2.2rem"/></Link>
            </li>
            <li>
              <Link to="/"><AiFillHome size="2rem"/></Link>
            </li>
            <li>
              <Link to="/aggiungi-contatto"><AiOutlinePlusCircle size="2rem"/></Link>
            </li>
          </ul>
        </nav>
    )
}