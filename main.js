  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCC5wVSU5injb90fvaazBOaG93MWyB0Hjg",
    authDomain: "minecraft-rs-informator-1aade.firebaseapp.com",
    projectId: "minecraft-rs-informator-1aade",
    storageBucket: "minecraft-rs-informator-1aade.firebasestorage.app",
    messagingSenderId: "108489746496",
    appId: "1:108489746496:web:9c028791f6cf84393357a5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider()


const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "../logged.html";

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });





})

function updateUserProfile(user) {
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfilePicture = user.photoURL;


  document.getElementById("userName").textContent = userName;
  document.getElementById("userEmail").textContent = userEmail;
  document.getElementById("userProfilePicture").src = userProfilePicture;
}

updateUserProfile()