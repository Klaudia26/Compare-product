import React, { Component } from 'react';
import CardProduct from './components/CardProduct/CardProduct';
import Compare from './components/Compare/Compare';
import './App.scss';

const product = [
  {
    name: 'Apple',
    price: ' $2.40',
    condition: 'fresh',
    image: 'apple.png',
  },
  {
    name: 'Kiwi',
    price: ' $4.65',
    condition: 'frozen',
    image: 'kiwi.png',
  },
  {
    name: 'Mango',
    price: ' $9.25',
    condition: 'fresh',
    image: 'mango.png',
  },
  {
    name: 'Orange',
    price: ' $3.50',
    condition: 'frozen',
    image: 'orange.png',
  },
];
class App extends Component {
  state = {
    selected: [],
  };

  isSelected = (number) => this.state.selected.includes(number);
  onClick = (number) => {
    if (this.isSelected(number)) {
      // this.removeFromSelection(number);
      this.setState({
        selected: this.state.selected.filter((item) => item !== number),
        text: 'remove',
      });
    } else {
      // this.addToSelection(number);
      this.setState({ selected: [...this.state.selected, number] });
    }
  };
  selectedProduct = () => {
    return product.filter((item, number) => this.isSelected(number));
  };

  render() {
    return (
      <>
        <div className="container">
          {product.map((item, number) => {
            return (
              <CardProduct
                name={item.name}
                price={item.price}
                image={item.image}
                selected={this.isSelected(number)}
                onClick={() => this.onClick(number)}
                changeText={this.changeText}
              />
            );
          })}
        </div>
        <Compare selectedProduct={this.selectedProduct()} />
      </>
    );
  }
}
export default App;
