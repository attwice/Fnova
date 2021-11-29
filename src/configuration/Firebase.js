import firebase from "firebase/app"
import "firebase/storage"
import "firebase/analytics"
import 'firebase/firestore';

import 'firebase/performance'

const config = {
  apiKey: "AIzaSyC0UHzQv-Ce7p4XteBYfS54sZzN94LerJU",
  authDomain: "sticker-cove.firebaseapp.com",
  databaseURL: "https://sticker-cove-default-rtdb.firebaseio.com",
  projectId: "sticker-cove",
  storageBucket: "sticker-cove.appspot.com",
  messagingSenderId: "307291309080",
  appId: "1:307291309080:web:e846c6dbef27b744e52f6d",
  measurementId: "G-FVFN88KCQ9",
}


export default function initFirebase() {
  if (!firebase.apps.length) {
      firebase.initializeApp(config)
      // Check that `window` is in scope for the analytics module!
      if (typeof window !== 'undefined') {
          // Enable analytics. https://firebase.google.com/docs/analytics/get-started
          if ('measurementId' in config) {
              firebase.analytics()
              firebase.performance()
          }
      }
      console.log('Firebase was successfully init.')
  }
}