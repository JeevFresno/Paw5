
$(document).ready(function(){


    $("#srchBtn").click(function(){
      alert("ddddddddddd");
     var textValue = document.getElementById('uniqueBook').value;
     alert(textValue);
     var updateInfo ="";

     $.get('/searchDatabase',{searchText:textValue},function(response){
      
     	for (var i = 0; i < response.items.length; i++) {
                var item = response.items[i];
                 updateInfo=updateInfo+"<div class='media'><div class='media-left media-middle'><a href='#''><img class='media-object' src="+item.volumeInfo.imageLinks.smallThumbnail+"/></a></div><div class='media-body'><h4 class='media-heading'>"+item.volumeInfo.title+"</h4><h6 class='media-subheading'>by:"+item.volumeInfo.authors+" </h6><a href='#'>Email</a> <span class='bar'>|</span> <a href='#>Text</a></div></div>";

            }
       

	 $('#updateContent').html(updateInfo);
     });

     });

 
    });
	
