
import './App.css';

import { useState } from 'react';

import { Header } from './components/header';
import { Input } from './components/input';
import { Main } from './components/main';
import { TabBar } from './components/tabBar';

function App() {

  const [search, setSearch] = useState('');
  const [category , setCategory] = useState('');


  const searching = (value) => {
      setSearch(value);
      console.log(value);
  }

  const catSelection = (value) => {
    console.log(value);
    setCategory(value);
  }

  return (

    <div className="App">
      <Header/>
      <Input searching={searching} />
      <TabBar catSelection={catSelection}/>
      <Main search={search}/>
      

    </div>
  );
}

export default App;
