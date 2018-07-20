//checkLogin();
window.addEventListener("DOMContentLoaded",init);
var sequence;
var question;
var option1;
var option2;
var option3;
var option4;
var ans;
var isSearch=false;
function checkLogin(){
    if(sessionStorage.getItem("Userid")==null){
        location.href = "index.html";
    }
}
// functions localStorage.getItem(), localStorage.setItem(), 
// and localStorage.removeItem() to get, add, change, or remove a key
function init(){
    sequence = autoGen();
    bindAllEvents();
}
function bindAllEvents(){
    document.querySelector("#add").addEventListener("click",addQuestion);
    document.querySelector("#search").addEventListener("click",search);

}
function addQuestion(){
    var id = sequence.next().value;
    question = document.querySelector("#question").value.trim();
    option1 = document.querySelector("#Option1").value.trim();
    option2 = document.querySelector("#Option2").value.trim();
    option3 = document.querySelector("#Option3").value.trim();
    option4 = document.querySelector("#Option4").value.trim();
    var ans = document.querySelector("#ans").value;
    if((question!="")||(ans!="")||(option1!="")||(option2!="")||(option3!="")||(option4!="")){
        
            var questionObject=new Question(question,ans,id,option1,option2,option3,option4);
          var pr2 = dbOperations2.addQuestion(questionObject);
          pr2.then((data)=>{
           alert(data)
          });
       console.log("question added");   
    }
    else{
        alert("Please fill the Empty Boxes");
    }
    }

function search(){
    var id = document.querySelector("#searchquestionid").value;
   var pr1= dbOperations2.getQuestionById(id);
   pr1.then((data)=>{
       id.value = data.id;
    question.value=data.Ques;
    option1.value=data.Option1;
    option2.value=data.Option2;
    option3.value=data.Option3;
    option4.value=data.Option4;
    ans.value=data.Ans;
    isSearch = true;
    console.log("Question found");
   }).catch((err)=>{
     alert(err);
   });
}
