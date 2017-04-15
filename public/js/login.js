$(document ).ready(function() {
   $("#btnLogin" ).click(function() {
   	var userLogin ={};
   userLogin.email= $("#emailLogin").val();
   userLogin.pwd = $("#pwdLogin").val();

   console.log(userLogin);

   $.get('/login',userLogin,function(data){
   	alert(data);
   })
   /* $.ajax({
 
    url: "/login",
 
    data: userLogin,
 
    type: "GET",
 
    dataType : "json",
})

  .done(function( json ) {
    alert("done");
  })

  .fail(function() {
    alert( "Sorry, there was a problem!" );
   
  }) */
 
   });
});