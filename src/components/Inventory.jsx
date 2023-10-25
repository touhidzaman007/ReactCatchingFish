import { Component } from 'react';
import AddFishForm from './AddFishForm';
import EditInventory from './EditInventory';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Login from './Login';
import base, { firebaseApp } from '../base';

class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    addFish: PropTypes.func,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    storeId: PropTypes.string,
  };

  state = {
    uid: null,
    owner: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    const { storeId } = this.props;
    const store = await base.fetch(storeId, { context: this });
    if (!store.owner) {
      await base.post(`${storeId}/owner`, {
        data: authData.user.uid,
      });
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid,
    });
    // console.log(authData);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const { addFish, loadSampleFishes, fishes, updateFish, deleteFish } =
      this.props;

    const logout = <button onClick={this.logout}>Log Out!</button>;

    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry! You are not the owner of this Store.</p>
          {logout}
        </div>
      );
    }

    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(fishes).map(key => (
          <EditInventory
            key={key}
            index={key}
            fish={fishes[key]}
            updateFish={updateFish}
            deleteFish={deleteFish}
          />
        ))}
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
