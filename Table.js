import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({amount,error}) {

  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((item, index) => 
          <tr key={index}>
            <td>{item.name}</td>
            <td>{`1 USD = ${item.rate} ${item.name}`}</td>
            {error.state?<td>{'n/a'}</td>:<td>{amount?(amount*item.rate).toFixed(8):'0.00000000'}</td>}
            </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
