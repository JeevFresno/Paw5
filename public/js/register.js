$( document ).ready(function() {
 


$( "#btnReg" ).click(function() {

var user ={};
user.fn = $("#fname").val();
user.ln = $('#lname').val();
user.em = $('#emailReg').val();
user.EndUser= $('input:radio[name=optionsRadios]').val();
user.mj = $('#major').val();
user.mn =$('#minor').val();


console.log(user);

 $.ajax({
     url: "/register",
    data: JSON.stringify(user),
     type: "GET",
     dataType : "json",
})

  .done(function( json ) {
    
  })

  .fail(function() {
    alert( "Sorry, there was a problem!" );
   
  })

});
});


