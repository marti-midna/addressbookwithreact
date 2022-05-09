import styles from "./styles.module.scss";

import { TabBar } from "../../components/TabBar";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { useEffect, useState } from "react";
import { CardContact } from "../../components/CardContact";

const Preferiti = ({ favorite }) => {
  return (
    <div>
      <Header />
      <TabBar />
      {favorite &&
        favorite.map((contact) => (
          <div key={contact.id}>
            <CardContact contact={contact}/>
          </div>
        ))}
    </div>
  );
};

export default Preferiti;
