
window.addEventListener("DOMContentLoaded",init);
var sequence ;
function init(){
    document.querySelector("#add").addEventListener("click",addUser);
    
     //unique function ki id dena isme humne user id di hain function ko
    //document.querySelector("#search").addEventListener("click",search);
}
function addUser(){
    var userId = document.querySelector("#users").value;     //ram naam ki key dedi firebase ko
    var pwd = document.querySelector("#password").value;
    var number = document.querySelector("#no").value;
    var check = document.querySelector("#check").value;
    var registerObject = new Register(userId,pwd,number,check);
   // var questionObject = new Question(1,question, ans);
    dbOperations.addUser(registerObject);

}