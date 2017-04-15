$(document ).ready(function() {

   $("#btnLogin" ).click(function(e) {
       e.preventDefault();
       //alert('Login Function')
   	var userLogin ={};
   userLogin.email= $("#emailLogin").val();
   userLogin.pwd = $("#pwdLogin").val();

   console.log(userLogin);

   $.get('/login',userLogin,function(data){
   	if(data !=null){
   	    //alert('login Successful');
   	    //window.location='/';
        //alert(data);
        sessionStorage.setItem('email',data);
        window.location='/';

    }else{
   	    alert('login failed');
    }
   });


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