import styles from "./styles.module.scss";
import { useState } from "react";

import { TabBar } from "../../components/TabBar";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Input } from "../../components/Input";


const Home = () => {

  const [takeInput, setTakeInput] = useState('');
  {console.log(takeInput)}


  return (
    <div>
      <Header />
      <Input setTakeInput={setTakeInput}/>
      <TabBar />
      <Main takeInput={takeInput}/>
    </div>
  );
};

export default Home;
