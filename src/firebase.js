import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBv-gRhLid_GqNZZ209c-NZKoAUA4H04f4",
  authDomain: "slackclone-280ff.firebaseapp.com",
  databaseURL: "https://slackclone-280ff.firebaseio.com",
  projectId: "slackclone-280ff",
  storageBucket: "slackclone-280ff.appspot.com",
  messagingSenderId: "513065596271",
  appId: "1:513065596271:web:f3a499a68a2bda1462e49a",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //get access to db

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
