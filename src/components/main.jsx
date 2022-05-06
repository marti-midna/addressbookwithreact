import "../../src/App.css";
import { useState, useEffect } from "react";

import { CardContact } from "./cardContact";

const contattiprova = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
        }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
        }
        }];

export const Main = ({search}) => {

    //creo lo stato per immagazzinare il primo array temporaneo e poi la chiamata
    const [contacts , setContacts] = useState(contattiprova);

    //creo lo stato per immagazzinare gli elementi filtrati
    const [filteredContact, setFilteredContact ] = useState([]);

    //creo lo stato per immagazzinare gli elementi favorite
    // const [filtFavorite, setFiltFavorite ] = useState([]);
    
    //faccio la chiamata e passo allo stato setContacts il mio array definitivo 
    const getContacts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        data.forEach(data => {
            data[`favorite`] = false;
        });
        console.log(data);
        setContacts(data);
        setFilteredContact(data);
    }

   

    useEffect(() => {
        getContacts();
    }, []);

    useEffect(() => {
        console.log('questi sono i contatti bitch', contacts);
        const filtered = contacts.filter((contact) => {
            console.log(contact);
        return contact.name.toLowerCase().trim().includes(search.toLowerCase().trim()) ||
            contact.email.toLowerCase().trim().includes(search.toLowerCase().trim()) ||
            contact.username.toLowerCase().trim().includes(search.toLowerCase().trim())
        });
        console.log('SUCAAAAAAA', filtered.length, contacts.length);
        setFilteredContact(filtered);

    }, [search]);

    return (
        <div className="main_contact_list">
            
            {filteredContact.map((item, index) =>(
                <div key={index} className="card_singlecontain">
                    <CardContact name={item.name} phone={item.phone} email={item.email} username={item.username}/>
                </div>
            ))}
            
        </div>
    )
}