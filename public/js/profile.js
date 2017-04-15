 $(document ).ready(function() {

 	 $("#lstLogOut a").on('click',function(e){
       alert("dsds");
     $.get('/logout',function(data){
   	
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