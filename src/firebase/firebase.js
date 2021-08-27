import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
const config = {
  apiKey: "AIzaSyDDLavnXQO0OA8yEgSSANJxg3fIFdNVD5k",
  authDomain: "osijek-koteks.firebaseapp.com",
  databaseURL:
    "https://osijek-koteks-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "osijek-koteks",
  storageBucket: "osijek-koteks.appspot.com",
  messagingSenderId: "435361502043",
  appId: "1:435361502043:web:40fdad24e38794238b807e",
  measurementId: "G-FJ016VZNTJ",
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const database = firebase.database()

database.ref().set({
  name: "Marko Straus",
})
