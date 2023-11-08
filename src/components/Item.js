import React from 'react'

const Item = ({item}) => {

  return (

<div className="item-cointainer" style={{"width":"250px"}}>
<img src={item.icon} className="card-img-top" alt="..."/>

<h5>{item.name}</h5>
<p >{item.price}</p>
<p >{item.marketCap}</p>
<p >{item.volume}</p>

    

</div>
 )
}

export default Item