import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Sendorder = () => {
  const [orders, setOrders] = useState([]);
  const [actualOrderCod, setActualOrderCod] = useState("");
  const [actualOrderCant, setActualOrderCant] = useState(0);
  const focusRef = useRef();

  let navigate = useNavigate();

  const addOrder = (e) => {
    e.preventDefault(e);
    const newOrder = {
      cod: actualOrderCod,
      cant: Number(actualOrderCant),
    };

    if (orders.some((o) => o.cod == actualOrderCod)) {
      const indexOrder = orders.findIndex((o) => o.cod == actualOrderCod);
      let agg = Math.round(orders[indexOrder].cant);
      orders[indexOrder].cant = agg + newOrder.cant;
      focusRef.current?.focus();
    } else {
      setOrders((prev) => [...prev, newOrder]);
      focusRef.current?.focus();
    }

    setActualOrderCod("");
    setActualOrderCant("");
  };


  return (
    <div className="h-screen w-full flex flex-col">
      <div className="w-full p-5 bg-gradient-to-r from-primary to-secondary text-white rounded-b-2xl z-10 ">
        <div className="flex flex-col items-center">
          <div className="p-3 bg-white -mb-9 w-[90%] rounded-lg shadow-lg ">
            <p className="text-primary font-bold text-2xl text-center ">
              Envio de pedidos
            </p>
          </div>
        </div>
      </div>
      <div className="p-20 h-full overflow-y-auto ">
        <form onSubmit={addOrder}>
          <input
            type="text"
            placeholder="Codigo"
            className="p-3 rounded-lg focus:outline-primary border w-full mb-2"
            value={actualOrderCod}
            onChange={(e) => setActualOrderCod(e.target.value)}
            ref={focusRef}
          />
          <input
            type="number"
            placeholder="Cantidad"
            min={1}
            className="p-3 rounded-lg focus:outline-primary border w-full mb-2"
            value={actualOrderCant}
            onChange={(e) => setActualOrderCant(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 text-white bg-primary rounded-lg w-full font-bold"
          >
            Agregar
          </button>
        </form>
        <div className="my-3 flex  flex-col items-center">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Codigo</th>
                <th className="py-3 px-6 text-left">Cantidad</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {orders.map((u) => (
                <tr
                  key={u.cod}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap font-bold">
                    {u.cod}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap font-bold">
                    {u.cant}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => sendOrder()}
            className="bg-primary font-bold text-white p-3 w-[80%] rounded-lg my-12 bottom-0 fixed"
          >
            Enviar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sendorder;
