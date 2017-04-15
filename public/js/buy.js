
$(document).ready(function(){


    $("#srchBtn").click(function(){
     var textValue = document.getElementById('booklistingsearch').value;
     var updateInfo ="";
     var url ='https://www.googleapis.com/books/v1/volumes?q='+textValue;
     console.log(url);
     $.get(url,function(response){
     	for (var i = 0; i < response.items.length; i++) {
                var item = response.items[i];
                 updateInfo=updateInfo+"<div class='media'><div class='media-left media-middle'><a href='#''><img class='media-object' src="+item.volumeInfo.imageLinks.smallThumbnail+"/></a></div><div class='media-body'><h4 class='media-heading'>"+item.volumeInfo.title+"</h4><h6 class='media-subheading'>by:"+item.volumeInfo.authors+" </h6></div></div>";

            }
       

	 $('#updateContent').html(updateInfo);
     });
     });
    });
	

