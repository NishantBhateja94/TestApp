const dbOperations2= {
    addQuestion(userObject){
        var pr = new Promise((resolve,reject)=>{
            firebase.database().ref('Questions/'+userObject.id).set(userObject)
        //Here users is a main key and
        //  userObject.userid is a sub key inside it add a userObject .set(obj) will push/add the object
       resolve("Question added...");
   });
   return pr;
 },
    getQuestionById(id){
        var pr3  = new Promise((resolve,reject)=>{
            var ref = firebase.database().ref('Questions/'+id) ; 
            ref.on("value",(snapshot)=>{
                 var questionObject = snapshot.val();
                 if(questionObject!=null)
                 resolve(questionObject);
                 else reject("No Record Found");
            })

        })
    return pr3;
}
}