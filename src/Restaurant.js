import React, { useState } from "react";

const Restaurant = () => {
  //Step9-10
  /*const [orders,setOrders] = (useState(0));
    function orderOne() {
      setOrders(orders + 1);
    }*/

  ///*step13* added here /
  return (
    <div className="results">
      <h3>Restaurant Orders</h3>
      <ul className="orders">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

//step11
const RestaurantButton = probs => {
  return (
    <div>
      <button onClick={probs.onClick} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

//step12
const Order = props => {
  //Step9-10
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {props.orderType}:{orders} <RestaurantButton onClick={orderOne} />
    </li>
  );
};

export default Restaurant;
