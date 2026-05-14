// lib/firebase.ts

import { initializeApp } from "firebase/app"

import { getAuth } from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyCxuBZ6FGKZXSxlAWakAFWwVcPh9LNHLak",

  authDomain: "gihs-campus-hub.firebaseapp.com",

  projectId: "gihs-campus-hub",

  storageBucket: "gihs-campus-hub.firebasestorage.app",

  messagingSenderId: "944894494227",

  appId: "1:944894494227:web:804e29cf470d6dd465a1e6",
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)