import React, {useState} from 'react'
import Menu from './components/MenuData'
import MenuBar from  './components/MenuBar'
import Navbar from  './components/Navbar'
import SearchBox from './components/SearchBox';

function App() {
  const [menuData, setMenuData] = useState(Menu);
  const [query, setQuery] = useState("") //To Extract Data from Menu

  return (
    <>
    
    <Navbar setMenuData={setMenuData} setQuery={setQuery} />
    <MenuBar menuData={menuData} query={query}/>
    </>
  );
}

export default App;
