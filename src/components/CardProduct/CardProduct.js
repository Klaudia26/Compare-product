import React, { Component } from 'react';
import './CardProduct.scss';

class CardProduct extends Component {
  render() {
    return (
      <div
        className={this.props.selected ? ' product hightLight' : 'product'}
        onClick={this.props.onClick}
      >
        <div className="product__image">
          <span className="details">
            {this.props.selected ? ' Remove' : 'Compare'}
          </span>
          <img src={require(`../../img/${this.props.image}`)} alt="fruit-img" />
        </div>
        <div className="product__description">
          <span>{this.props.name}</span>
          <span className="product__price">{this.props.price}</span>
        </div>
      </div>
    );
  }
  4;
}
export default CardProduct;
