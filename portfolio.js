
 /*initialize all the textbox to null*/
 document.getElementById("name").value='';
 document.getElementById("email").value='';
 document.getElementById("message").value='';

/*to display error message and empty the form textbox*/ 
function disMessage(){
    flag=0;
    if(document.getElementById("name").value=="" ){
        document.getElementById("name-err").innerHTML ="empty name box" ;
        flag++;
    }
   
     if(document.getElementById("email").value==""){
        document.getElementById("email-err").innerHTML ="empty email box" ;
        flag++;
      }
     if(document.getElementById("message").value==""){
        document.getElementById("message-err").innerHTML ="empty message box" ;
        flag++;
      }
    if(flag==0){
     alert("Thank you " +document.getElementById("name").value + " for sending message")
     document.getElementById("name").value='';
     document.getElementById("email").value='';
     document.getElementById("message").value='';

     
 }}

 /*to remove error message when key is pressed*/
 function removeErr(value){
      if(value=='name'){
       document.getElementById("name-err").innerHTML="";
      }
       if(value=='email'){
       document.getElementById("email-err").innerHTML="";}
       if(value=='message'){
        document.getElementById("message-err").innerHTML="";
       
   }
 }

 /*to show and hide form*/
 function hideInfo() 
 {
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
        
      
      x.style.display = "block";
      document.getElementById("showButton").value = "Hide Form";

    } else {
      x.style.display = "none";
      document.getElementById("showButton").value = "Show Form";
    }}

 