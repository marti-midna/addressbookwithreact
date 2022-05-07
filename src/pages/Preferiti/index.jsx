import styles from "./styles.module.scss";

import { TabBar } from "../../components/TabBar";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";



const Preferiti = () => {
  return (
    <div>
        <Header/>
        <TabBar/>
        <Main/>
    </div>
  )
}

export default Preferiti