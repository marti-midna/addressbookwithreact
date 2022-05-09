import styles from "./styles.module.scss";
import { useState } from "react";

import { TabBar } from "../../components/TabBar";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Input } from "../../components/Input";


const Home = ({favoriteApp}) => {

  const [takeInput, setTakeInput] = useState('');

  const favoriteHome = (newArr) => {
    favoriteApp(newArr);
    console.log('contatti filtrati in home', newArr);
  }


  return (
    <div>
      <Header />
      <Input setTakeInput={setTakeInput}/>
      <TabBar />
      <Main takeInput={takeInput} favoriteHome={favoriteHome}/>
    </div>
  );
};

export default Home;
