import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC-iUxU3AHzSLiBI3uFn1GL2rjw_55Uc5E",
    authDomain: "instagram-clone-81dde.firebaseapp.com",
    projectId: "instagram-clone-81dde",
    storageBucket: "instagram-clone-81dde.appspot.com",
    messagingSenderId: "657768043247",
    appId: "1:657768043247:web:cc8c26550c1fd567f4811a",
    measurementId: "G-3YTW4W0577"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  export {db, auth, storage}