import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyD3DwE3ydsMIXe18MyhqUPdpAQcfQVe_Ro",
    authDomain: "projectreact1.firebaseapp.com",
    databaseURL: "https://projectreact1.firebaseio.com",
    projectId: "projectreact1",
    storageBucket: "projectreact1.appspot.com",
    messagingSenderId: "686350813503"
  };
  const Fire = firebase.initializeApp(config);
  export default Fire;