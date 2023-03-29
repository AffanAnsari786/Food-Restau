import React, { useState } from 'react'
import './search.css'

function SearchBox() {
    const [query, setQuery] = useState("")
    console.log(query)
  return (
    <>
        <div className='search-box'>
            <input className='search-text' type='text' placeholder='Type To Search' onChange={(event)=>{setQuery(event.target.value)}} />
            <a className='search-btn' href='#'>
            <i className="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
    </>
  )
}

export default SearchBox