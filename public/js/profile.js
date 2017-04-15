 $(document ).ready(function() {

     //alert(sessionStorage.email);
     //Accessing the profile information

     (function(){

         $.get('/profile',{email:sessionStorage.email},function(response){
             console.log(response);
             document.getElementById("name").innerHTML = response[0].firstname+ "Profile's";
             document.getElementById("first_name").innerHTML = response[0].firstname;
             document.getElementById("last_name").innerHTML = response[0].lastname;
             document.getElementById("email").innerHTML = response[0].email;
             document.getElementById("major").innerHTML = response[0].major;
             document.getElementById("minor").innerHTML = response[0].minor;
         });

     })();
});




 /*$("#lstLogOut a").on('click',function(e){

  $.get('/logout',function(data){


  });
  });*/

 /*  $.get('/booksold',function(data){
   	alert(data);
   })

  $.get('/bookuploaded',function(data){
   	alert(data);
   })

  */