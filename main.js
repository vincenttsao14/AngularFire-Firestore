// firebase.initializeApp({
//   apiKey: "AIzaSyA-DLxL7vmdlMqh_a2t9aHQhidnfNu0O08",
//   authDomain: "blinding-fire-7640.firebaseapp.com",
//   projectId: "blinding-fire-7640"
// });

var config = {
  apiKey: "AIzaSyA-DLxL7vmdlMqh_a2t9aHQhidnfNu0O08",
  authDomain: "blinding-fire-7640.firebaseapp.com",
  databaseURL: "https://blinding-fire-7640.firebaseio.com",
  storageBucket: "blinding-fire-7640.appspot.com",
  messagingSenderId: "1028917595562",
  projectId: "blinding-fire-7640"  
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
db.collection("Databases/Test_Database/Groups").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    });
});
