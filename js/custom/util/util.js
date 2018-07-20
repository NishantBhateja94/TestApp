

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCFmfgWmw1kCDrGxMV1pQHLfOXsA--w7Pw",
    authDomain: "testfinal-2f68e.firebaseapp.com",
    databaseURL: "https://testfinal-2f68e.firebaseio.com",
    projectId: "testfinal-2f68e",
    storageBucket: "testfinal-2f68e.appspot.com",
    messagingSenderId: "1062243470030"
  };
  firebase.initializeApp(config);
  function* autoGen(){
    var counter = 1;
    while(true){
    yield counter;
    counter++;
    }
    }
    function startTimer(){
       var timeLeft = 60;
   var c =setInterval(()=>{
    document.getElementById("timercount").innerHTML = timeLeft;
   if(timeLeft==0){
   //console.log("Inside TimeLeft ",timeLeft);
     clearInterval(c);
     
   }
   timeLeft--;
   
   
   },1000);
   }
  