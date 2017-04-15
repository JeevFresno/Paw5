 $(document ).ready(function() {

 	 $("#lstLogOut a").on('click',function(e){
      
     $.get('/logout',function(data){
   	 location.replace("#/index.html");
   })
    });

  /**  $.get('/booksold',function(data){
   	alert(data);
   })

  $.get('/bookuploaded',function(data){
   	alert(data);
   })
 
   */
});