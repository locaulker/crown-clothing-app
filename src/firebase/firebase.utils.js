import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDRC8_vYBwDergT2-IxW8VgX9G0d__0bN4",
  authDomain: "crown-clothing-app-db-fbeab.firebaseapp.com",
  databaseURL: "https://crown-clothing-app-db-fbeab.firebaseio.com",
  projectId: "crown-clothing-app-db-fbeab",
  storageBucket: "crown-clothing-app-db-fbeab.appspot.com",
  messagingSenderId: "959092452425",
  appId: "1:959092452425:web:74e91aa38511a9c55d6398"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
