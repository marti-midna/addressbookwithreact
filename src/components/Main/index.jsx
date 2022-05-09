import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { getContacts } from "../../utils";

import { CardContact } from "../CardContact";

const contattiprova = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

export const Main = ({ takeInput , favoriteHome}) => {
  //creo lo stato per immagazzinare il primo array temporaneo e poi la chiamata
  const [contacts, setContacts] = useState(contattiprova);

  useEffect(() => {
    getContacts().then((data) => setContacts(data));
  }, []);

  {console.log(contacts);}
  
  const favoriteMain = (contact) => {

    if (contact.favorite === false) {
      contact.favorite = true;
    } else if (contact.favorite === true) {
      contact.favorite = false;
    };
    filtredFavorite();
    console.log(contact)
  }

  const filtredFavorite = () => {

    const newArr = contacts.filter((item) => item.favorite === true)
    console.log("contatti filtrati", newArr);

    favoriteHome(newArr)
  }

  return (
    <div className={styles.main}>
      {contacts &&
        contacts
          .filter(
            (item) =>
              item.name
                .toLowerCase()
                .trim()
                .includes(takeInput.toLowerCase().trim()) ||
              item.email
                .toLowerCase()
                .trim()
                .includes(takeInput.toLowerCase().trim()) ||
              item.username
                .toLowerCase()
                .trim()
                .includes(takeInput.toLowerCase().trim())
          )

          .map((contact) => (
            <div key={contact.id}>
              <CardContact
                contact={contact} favoriteMain={favoriteMain}
              />
            </div>
          ))}
    </div>
  );
};
