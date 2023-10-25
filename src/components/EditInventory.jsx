import { Component } from 'react';
import PropTypes from 'prop-types';

class EditInventory extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    index: PropTypes.string,
  };

  handleChange = e => {
    const { fish, updateFish, index } = this.props;
    const updatedFish = {
      ...fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    updateFish(index, updatedFish);
  };

  render() {
    const { fish, deleteFish, index } = this.props;
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={fish.desc}
        ></textarea>
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={fish.image}
        />
        <button onClick={() => deleteFish(index)}>Remove Fish</button>
      </div>
    );
  }
}

export default EditInventory;
