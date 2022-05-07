import styles from "./styles.module.scss";
import { useState } from "react";

import { TabBar } from "../../components/TabBar";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Input } from "../../components/Input";


const Home = () => {


  return (
    <div>
      <Header />
      <Input/>
      <TabBar />
      <Main />
    </div>
  );
};

export default Home;
