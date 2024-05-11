import { useState } from "react";

import "./Cart.css";
import Temp from "./Temp";
import Teddy from "./assets/Teddy.png";

function Cart() {
  const [qual, setqual] = useState(1);

  const itemAmount = 19.99;
  const [subTotal, setsubTotal] = useState(itemAmount);

  const incre = () => {
    setqual((prevQual) => {
      const newQual = prevQual + 1;
      setsubTotal((itemAmount * newQual).toFixed(2));
      return newQual;
    });
  };

  const dicre = () => {
    if (qual > 0) {
      setqual(qual - 1);
      setsubTotal((arg) => (arg - itemAmount).toFixed(2));
    }
  };

  return (
    <>
      <div className="out">
        <h1 className="h1">Your Cart</h1>
        <Temp
          cartImg={Teddy}
          incQ={incre}
          decQ={dicre}
          quantity={qual}
          itemAmount={itemAmount}
        />

        <div className="buy">
          <div className="subtotal">
            <p>SubTotal</p>
            <p>${subTotal}</p>
          </div>
          <button className="btnSubmet">Process To ChickOut</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
