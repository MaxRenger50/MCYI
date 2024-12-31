import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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

const user = auth.currentUser;

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture =user.photoURL;
    console.log(userEmail)


    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;
}

onAuthStateChanged(auth, (user) => {
    if (user) {

        updateUserProfile(user);
        const uid = user.uid;
        return uid;

    } else {

        alert("Create Account & Login");
    }
});