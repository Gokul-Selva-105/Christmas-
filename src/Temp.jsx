import {React,useState} from 'react'

function Temp({cartImg,incQ,decQ,quantity,itemAmount}) {

    



  return (
    <div>
        <div className="con1">
          <div className="pro1">
            <img src={cartImg} className="img1" />
            <h2>Gingerbread Man Cookie</h2>
          </div>
          <p className="amount">${itemAmount}</p>

          <div className="btn2">
            <div className="min" onClick={incQ}>
              +
            </div>
            <p className="num">{quantity}</p>
            <div className="inc" onClick={decQ}>
              -
            </div>
          </div>
          </div>
      
    </div>
  )
}

export default Temp;
