var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyCe940V1A4Fcis9fWaC5vJRBdgcdaOdKOM",
    authDomain: "cineclef.firebaseapp.com",
    projectId: "cineclef",
    storageBucket: "cineclef.appspot.com",
    messagingSenderId: "262845536717"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


