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
  appId: "1:959092452425:web:74e91aa38511a9c55d6398",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  // console.log(snapShot)
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account",
})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
