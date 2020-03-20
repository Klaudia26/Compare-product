import React from 'react';
import './Compare.scss';

const Compare = (props) => {
  if (props.selectedProduct.length < 2) {
    return null;
  }
  return (
    <>
      <div className="wrapper">
        <table>
          <thead>
            <tr>
              <th></th>
              {props.selectedProduct.map((item) => {
                return <th>{item.name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Price</th>
              {props.selectedProduct.map((item) => {
                return <td>{item.price}</td>;
              })}
            </tr>
            <tr>
              <th>Condition</th>
              {props.selectedProduct.map((item) => {
                return <td>{item.condition}</td>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Compare;
