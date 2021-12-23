import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAhjwlbWqRJ5O5kEx2cBCu4eBUvFDinqXw",
  authDomain: "password-reset-flow-ca6bb.firebaseapp.com",
  projectId: "password-reset-flow-ca6bb",
  storageBucket: "password-reset-flow-ca6bb.appspot.com",
  messagingSenderId: "223642024980",
  appId: "1:223642024980:web:3af0a99e99f424c18f7b01"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
