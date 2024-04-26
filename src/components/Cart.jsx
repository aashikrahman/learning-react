import React from 'react'

const items = ["Airpords" , "Mouse" , "Usb Pendrives" , "Graphics Cards"];




function Cart() {
  return (
    <div>
        <h2>Cart 🛒</h2>

        <h3>{items.length >0 ? `There is ${items.length} Product here` : ""}</h3>
        {
            items.map((products)=>(
                <ul key={Math.random()*10}>
                    <li>{products}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default Cart