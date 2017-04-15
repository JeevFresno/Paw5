$( document ).ready(function() {
    console.log( "ready 123!" );


$( "#btnSubmit" ).click(function() {
   var user ={};
user.fn = $('#fname').val();
user.ln = $('#lname').val();
user.em = $('#email').val();
user.pass= $('#radio:checked').val();
user.major = $('#major').val();
user.EndUser =$('#minor').val();
});
console.log($('#txtFirstName').val());
});


/*
    $.ajax({
 
    // The URL for the request
    url: "/register",
 
    // The data to send (will be converted to a query string)
    data: {
        id: 123
    },
 
    // Whether this is a POST or GET request
    type: "POST",
 
    // The type of data we expect back
    dataType : "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function( json ) {
    
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function() {
    alert( "Sorry, there was a problem!" );
   
  })
  // Code to run regardless of success or failure;
  .always(function( xhr, status ) {
    
  });
});

*/