(function(){


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVo8L872p0k3Pd4LHQP1SW490eRvfH7FU",
  authDomain: "fullstack-badbank-b1262.firebaseapp.com",
  projectId: "fullstack-badbank-b1262",
  storageBucket: "fullstack-badbank-b1262.appspot.com",
  messagingSenderId: "376178783705",
  appId: "1:376178783705:web:730f3b16984e37145315c8"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const logout = document.getElementById('logout');

login.addEventListener('click',e=>{
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>console.log(e.message));
});

logout.addEventListener('click',e=>{
    firebase.auth().signOut();
});

//login state
firebase.auth().onAuthStateChanged(firebaseUser=>{
    if(firebaseUser){
        console.log('User is logged in');
        logout.style.display = 'inline';
        login.style.display = 'none';
        loginMsg.innerHTML = 'Authentication Success!';
    }
    else{
        console.log('User is not logged in');
        logout.style.display = 'none';
        login.style.display = 'inline';
        loginMsg.innerHTML = 'Not Authenticated!';
    }
});

function callOpenRoute

}());


