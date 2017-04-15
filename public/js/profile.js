 $(document ).ready(function() {

 $.ajax({
     url: "/booksold",

     type: "GET",
     dataType : "json",
})

  .done(function(data) { 
    
  })

  .fail(function() {
    alert( "Sorry, there was a problem!" );
   
  })


   $.ajax({
     url: "/bookuploaded",
    
     type: "GET",
     dataType : "json",
})

  .done(function(data) { 
    
  })

  .fail(function() {
    alert( "Sorry, there was a problem!" );
   
  })
});