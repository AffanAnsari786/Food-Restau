import React from 'react'
import './style.css'

function MenuBar({menuData, query}) {

  return (
    <>
    <div className='main-card--cointainer'>
    {

        menuData.filter((users)=>users.name.toLowerCase().includes(query)).map((curElem)=>{
          const {id,name,image, price, category, description} = curElem
            return(
                
                    <div className='card-container' key={id}>
                        <div className='card'>
                            <span className='card-number card-circle subtle'>{id}</span>
                            <span className='card-author subtle'>{category}</span>
                            <h1 className='card-title'>{name}</h1>
                            <span className='card-description subtle'>{description}</span>
                            <img src={image} alt="loading..." className='card-media'/>
                            <span className='price-tag subtle'>{price}</span>
                            <span className='card-tag subtle'>Order Now</span>
                        </div>
                    </div>
                

            )
        })
    }
    </div>
    
    </>
  )
}

export default MenuBar