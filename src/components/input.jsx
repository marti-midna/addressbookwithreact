import "../../src/App.css";
import { useState } from "react";

export const Input = (props) => {

    const [search, setSearch] = useState('');

    const changing = (event) => {
        const value = event.target.value;
        setSearch(value);
        props.searching(value);
    }

    return(
        <div className="search_input">
            <form>
                <input type="text" id="search" placeholder="ricerca contatto" 
                value={search} onChange={changing}/>
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