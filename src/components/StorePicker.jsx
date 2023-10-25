import React, { Component } from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends Component {
  static propTypes = {
    history: PropTypes.object,
  };

  myInput = React.createRef();

  goToStore = e => {
    const { history } = this.props;
    e.preventDefault();
    const storeName = this.myInput.current.value;
    history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <>
        <p>Fish</p>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input
            type="text"
            ref={this.myInput}
            placeholder="Store Name"
            defaultValue={getFunName()}
            required
          />
          <button type="submit">Visit Store ➡ </button>
        </form>
      </>
    );
  }
}

export default StorePicker;
