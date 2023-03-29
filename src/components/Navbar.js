import React, {useState} from 'react'
import Menu from './MenuData'
import SearchBox from './SearchBox';

//To get category only once so we can display on menuBar
const uniqueList = [
  ...new Set(Menu.map((curElem)=>{
    return curElem.category;
})), "All"];

function Navbar({setMenuData, setQuery}) {

  const [uniqueData, setUniqueData] = useState(uniqueList);

  const filterItem=(category)=>{

    if(category==="All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem)=>{
      return curElem.category === category;
    });
    setMenuData(updatedList)
  }
  return (
    <>
    <nav className='navbar'>
    <div className='search-box'>
            <input className='search-text' type='text' placeholder='Type To Search Your Dish' onChange={(event)=>{setQuery(event.target.value)}} />
            <a className='search-btn' href='#'>
            <i className="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
      <div className='btn-group'>
        {
          uniqueData.map((curElem)=>{
            return (
              <button className='btn-group__item' key={curElem.id} onClick={()=>filterItem(curElem)}>{curElem}</button>
            )
          })
        }
      </div>
    </nav>
    </>
  )
};

export default Navbar