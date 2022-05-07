import styles from './styles.module.scss';

import { useState } from "react";
import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import { Header } from "./components/header";
// import { Input } from "./components/input";
// import { Main } from "./components/main";
// import { TabBar } from "./components/TabBar/tabBar";

const Home = lazy(() => import("./pages/Home"));
const Preferiti = lazy(() => import("./pages/Preferiti"));
const AggiungiContatto = lazy(() => import("./pages/AggiungiContatto"));


function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const searching = (value) => {
    setSearch(value);
    console.log(value);
  };

  const catSelection = (value) => {
    console.log(value);
    setCategory(value);
  };

  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/preferiti"
            element={
              <Suspense>
                <Preferiti />
              </Suspense>
            }
          />
          <Route
            path="/aggiungi-contatto"
            element={
              <Suspense>
                <AggiungiContatto />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{
  /* <Header/>
<Input searching={searching} />
<TabBar catSelection={catSelection}/>
<Main search={search}/> */
}
