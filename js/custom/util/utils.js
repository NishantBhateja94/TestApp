var config = {
    apiKey: "AIzaSyDEYTUn4xS0Gj3HcaRHUhcY8uxjNQNSH5E",
    authDomain: "test2-92440.firebaseapp.com",
    databaseURL: "https://test2-92440.firebaseio.com",
    projectId: "test2-92440",
    storageBucket: "test2-92440.appspot.com",
    messagingSenderId: "856048716504"
  };
  firebase.initializeApp(config);
  function* autoGen(){
    var counter = 1;
    while(true){
    yield counter;
    counter++;
    }
    }
