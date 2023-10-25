import { Component } from 'react';
import { formatPrice } from '../helpers';

class Fish extends Component {
  handleClick = () => {
    const { addToOrder, index } = this.props;
    addToOrder(index);
  };
  render() {
    const { name, image, desc, status, price } = this.props.details;
    const isAvailable = status == 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? 'Add To Order' : 'Sold Out'}
        </button>
      </li>
    );
  }
}

export default Fish;
