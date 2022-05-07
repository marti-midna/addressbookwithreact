import styles from "./styles.module.scss";
import { useState } from "react";

export const Input = (props) => {

    const [search, setSearch] = useState('');

    {console.log(search)}
    // const changing = (e) => {
    //     const value = e.target.value;
    //     console.log(e.target.value);
    //     setSearch();
    //     // props.searching(value);
    // }

    return(
        <div className="search_input">
            <form>
                <input type="text" id="search" placeholder="ricerca contatto" 
                value={search} onChange={(e) => setSearch(e.target.value)}/>
            </form>
        </div>
    )
}

/*
1.per usare una input mi serve uno stato (creo search)
2.aggiunga una value che ha come valore il mio stato search 
3.la input può cambiare perchè posso fare diverse ricerche 
quindi lo stato in setSearch va sempre aggiornato, per farlo mi serve 
da aggiungere alla input un onChange a cui passo una funzione
*/