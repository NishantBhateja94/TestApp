const dbOperations = {
    addUser(userObject){
         firebase.database().ref('users/'+userObject.userid).set(userObject);
        //Here users is a main key and
        //  userObject.userid is a sub key inside it add a userObject .set(obj) will push/add the object
        console.log("user added...");
    }
}
    // // Here questions is a main key and questionObject.id is a sub key inside it 
    // // add a questionObject .set(obj) will push/add the object
    //  getUserById(userid){
    //      var userRef = firebase.database().ref('users/'+userid);
    //      userRef.on('value',(snapShot)=>{
    //          var userObject = snapShot.val();
    //          console.log("userObject is ",userObject);
    //          if(userObject.userid==userid){
    //              console.log("user found");
    //              location.href="test.html";
    //          }
    //          else{
    //              console.log("Invalid Userid and password");
    //          }

             
    //      }

