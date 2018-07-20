document.addEventListener("DOMContentLoaded",init);
function init(){
    bindEvents();
   }
function doLogin(){
    var userid = document.querySelector("#User").value;
    var password = document.querySelector("#pwd").value;
     var check = document.querySelector("#check2").value;
    // console.log("check value is"+check);
    // if(document.getElementById("teacherLogin").checked){
    //     var professionLogin="teacher";
    // }
    // else if(document.getElementById("studentLogin").checked){
    //     var professionLogin="student";
    // }
    // var userobject=new user(userid,password);
//    dbOperations.getUserById(userid);
if(userid.length<0||password.length<0){
    alert("please enter user id and password");
    console.log("please enter userid and password");
}
else{
    var userRef = firebase.database().ref('users/'+userid);
    userRef.on('value',(snapShot)=>{
        var userObject = snapShot.val();
        var profession = userObject.profession;
        console.log("userObject is ",userObject);
        if(userObject.userid==userid && userObject.pwd==password && userObject.check==check){
            if(check=="teacher"){
                   console.log("welcome teacher");
                   location.href="question.html";
            }
            else if( check=="student"){
            console.log("user found");
            location.href="test.html";
        }
    }
        else {
            console.log("Invalid Userid and password");
        }
});
}
}
function bindEvents(){
    document.querySelector("#login").addEventListener("click",doLogin);
}