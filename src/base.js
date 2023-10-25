import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBSpc8oGeov9uR9vfU7t9gwPFeQydIfdgs',
  authDomain: 'catch-of-the-day-touhid-zaman.firebaseapp.com',
  databaseURL:
    'https://catch-of-the-day-touhid-zaman-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
