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

export const Main = ({ takeInput }) => {
  //creo lo stato per immagazzinare il primo array temporaneo e poi la chiamata
  const [contacts, setContacts] = useState(contattiprova);

  useEffect(() => {
    getContacts().then((data) => setContacts(data));
  }, []);

  {
    console.log(contacts);
  }

  //creo lo stato per immagazzinare gli elementi filtrati
  // const [filteredContact, setFilteredContact ] = useState([]);

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

          .map((item, index) => (
            <div key={index} className="card_singlecontain">
              <CardContact
                name={item.name}
                phone={item.phone}
                email={item.email}
                username={item.username}
              />
            </div>
          ))}
    </div>
  );
};
