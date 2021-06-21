import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCs7rmibmYzg3jw4lB3dkgXwLMmz3UZMno",
    authDomain: "olx-project-2b0f6.firebaseapp.com",
    projectId: "olx-project-2b0f6",
    storageBucket: "olx-project-2b0f6.appspot.com",
    messagingSenderId: "456421664163",
    appId: "1:456421664163:web:0cf6667d96bcd5637fe616",
    measurementId: "G-7MN2VY98S8"
  };


  export default firebase.initializeApp(firebaseConfig)


