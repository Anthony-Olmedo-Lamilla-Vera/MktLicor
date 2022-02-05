import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DetalleCuenta() {
  const useHook = () => {
    const [Total, setTotal] = useState();
    const element = useSelector((x) => x.map((x) => x.subtotal));
    useEffect(() => {
      if (element.length > 0) {
        const reduce = element.reduce((ac, item) => {
          return (ac += item);
        });
        setTotal(reduce);
      }
    }, [element]);
    return Total;
  };

  //console.log("hook", useHook());

  return (
    <div className="total-cart">
      <div className="text-cart">
        <p>SubtTotal : $ {useHook()}</p>
        <p>iva 12% : $ {parseFloat(useHook() * 0.12).toPrecision(3)}</p>
        <p>total envio : $ 0 </p>
      </div>
      <p className="Total ">Total A Pagar : $ {useHook() + useHook() * 0.12}</p>
    </div>
  );
}

export default DetalleCuenta;
