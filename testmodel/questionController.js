window.addEventListener("DOMContentLoaded",init);
var questions;
var quesArray;
var sequence;
var index = 0;

var score=0;
var currentId;

function init(){
sequence=autoGen();


document.querySelector("#next").addEventListener("click",printNextQuestion);
document.querySelector("#submit").addEventListener("click",checkAnswer);
document.querySelector("#finish").addEventListener("click",displayScore);

    
//    disable();
    printNextQuestion();
   // printStatus();
   startTimer();
    

}
function getQuestionId(){
    var id = parseInt(this.innerHTML) ;
    index = id - 1;
    printQuestion();
}
/*function drawCircle(status,id){
    var div = document.createElement("div"); //<div></div>
    div.className=status?"green":"red";
    div.innerHTML = id;
    index = id - 1;
    div.addEventListener("click",getQuestionId);
    document.querySelector("#status").appendChild(div);
    
}*/
/*function printStatus(){
    var questions =
    firebase.database().ref('questions');
     questions.on('value',function(snapshot){
    // var obj = snapshot.val();
    var id=snapshot.questionId();
     console.log("fetch _____ ",id);
     console.log("Type of ",id);
     for(let key in id){
     console.log(key, " ", obj[id]);
     }
     });
    //for(let question of questions){
      //  var id = question.questionId;
        var status = question.attempt;
        drawCircle(status,id);
    }*/
    function printPreviousQuestion()
    {
        var questionId=currentId-1;
        printQuestion(questionId);
    }
    function printNextQuestion()
    {
        var questionId=currentId+1;
        var ele = document.getElementsByName("ans");
        for(var i=0;i<ele.length;i++)
        {ele[i].checked = false;}
    
    printQuestion(questionId);
    }




function printQuestion(questionId){
   
    var questionId = sequence.next().value;
    console.log(questionId);
    console.log("questioId is....",questionId);
    if(questionId>0){
        var id =questionId;
        var ques=firebase.database().ref('Questions/'+id);        
        ques.on('value',(snapShot)=>{
             obj= snapShot.val();
             console.log("inside print question...........",obj);
             if(obj==null){
                displayScore();
            }
            else{
                console.log("inside print question length...........",obj.length);
                currentId=obj.id;
                console.log("current id......",currentId);
                
               document.querySelector("#printquestion").innerHTML = `${obj.Ques}`;
                document.querySelector("#optionone").innerHTML = ` ${obj.Option1}`;
                document.querySelector("#optiontwo").innerHTML = ` ${obj.Option2}`;
                document.querySelector("#optionthree").innerHTML = ` ${obj.Option3}`;
                document.querySelector("#optionfour").innerHTML = ` ${obj.Option4}`;
                //console.log("answer......",document.getElementsByName("ans").innerHTML);
                quesArray=obj;
            }
        })
        // document.querySelector("#question").innerHTML = `Q${questionId}: ${questionObject.name}`
        questionId++;
    }
}
             

/*function disable(){
    if(index ==0){
        document.querySelector("#prev").setAttribute("disabled", true);
    }
    else{
        document.querySelector("#prev").setAttribute("disabled", false); 
    }
    if(index==question.length-1){
        document.querySelector("#next").setAttribute("disabled", true);
    }
    else{
        document.querySelector("#next").setAttribute("disabled", false); 
    }
           

        }
        // document.querySelector("#question").innerHTML = `Q${questionId}: ${questionObject.name}`
        questionId++;
    
    
*/



function checkAnswer(){
    var answer;
        if((document.getElementById('radio1').checked)) {
            answer=quesArray.option1;
          }
        else if(document.getElementById('radio2').checked) {
            answer=quesArray.option2;
        }
        else if(document.getElementById('radio3').checked) {
            answer=quesArray.option3;
        }
        else if(document.getElementById('radio4').checked) {
            answer=quesArray.option4;
        }
        console.log("answer...........",answer);
        if(answer==quesArray.Ans){
            console.log("hurrrrreeeyyyyyyyyy");
            score=score+quesArray.score;
        }
        console.log("final score is....",score);

}

function displayScore(){
    console.log("score...",score);

    //location.href="result.html";
    alert("Score achieved in test: "+score);
    location.href="index.html";
}