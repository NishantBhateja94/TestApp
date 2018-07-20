 function getQuestionById(id){
     var pr = new Promise((resolve,reject)=>{ 
   
        var questionRef = firebase.database().ref('Questions/'+id);
        questionRef.on('value',function(snapshot){
            var Questions = snapshot.val();
            console.log("Id is ",Questions.id);
            
         resolve(obj);
            
        });
        return pr;
    });
 }