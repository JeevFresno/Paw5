$(document).ready(function(){



    $("#sellSrch").click(function(){
     var textValue = document.getElementById('booksellingsearch').value;
     var updateInfo ="";
     var url ='https://www.googleapis.com/books/v1/volumes?q='+textValue;
 
     $.get(url,function(response){
        globalItem = response.items;
     	for (var i = 0; i < response.items.length; i++) {
                var item = response.items[i];
                 updateInfo=updateInfo+"<div class='media'><div class='media-left media-middle'><a href='#'><img class='media-object' src="+item.volumeInfo.imageLinks.smallThumbnail+"/></a></div><div class='media-body'><h4 class='media-heading'>"+item.volumeInfo.title+"</h4><h6 class='media-subheading'>by:"+item.volumeInfo.authors+" </h6><a href='#' data-toggle='modal' onclick=test("+i+") data-target=''>Select Book</a></div></div>";

            }
       

	 $('#sellContent').html(updateInfo);
     });
     });

    $("#btnClose").click(function(){
       var price =$("#modalText").val;
       var queryS ="";
        queryS.bookname=selectedItem.volumeInfo.title;
     queryS.author=selectedItem.volumeInfo.authors;
     queryS.email=sessionStorage.email;
    queryS.publisher=selectedItem.volumeInfo.publisher;
    queryS.price=price;
    queryS.imageUrl=selectedItem.volumeInfo.imageLinks.smallThumbnail;
 
    queryS.isbn=selectedItem.volumeInfo.industryIdentifiers[0].identifier;
    $.get('/uploadBooks',queryS,function(data){
    alert(data);
   })

     });



    });

  
var globalItem="";
var selectedItem ="";

  function test(i){
   selectedItem =globalItem[i];
     $('#myModal').modal('show');


   }