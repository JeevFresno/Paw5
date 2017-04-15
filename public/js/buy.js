
$(document).ready(function(){



    $("#srchBtn").click(function(e){
      e.preventDefault();
     var textValue = document.getElementById('uniqueBook').value;

     var updateInfo ="";

     /*$.get('/searchDatabase',{searchText:textValue},function(data){
         alert(data);
     })*/
     $.get('/searchDatabase',{searchText:textValue},function(data){
         console.log(data[i]);
   // alert(data);
         if(data.length == 0){
             alert('No books found, please try again sometime');
         }
     	for (var i = 0; i <data.length; i++) {

                 updateInfo=updateInfo+"<div class='media'><div class='media-left media-middle'><a href='#''><img class='media-object' src="+data[i].imagUrl+"/></a></div><div class='media-body'><h4 class='media-heading'>"+data[i].bookname+"</h4><h6 class='media-subheading'>by:"+data[i].author+" </h6><a href='#' onclick='sendEmail()'>Email</a> <span class='bar'>|</span> <a href='#' onclick=sendText()>Text</a></div></div>";

            }
       

	 $('#updateContent').html(updateInfo);
     });

     });

    //send text

 
    });

function sendText(){
    $.get('/sentText',function(data){
        if(data=='success'){
            alert('Text Sent');
        }else{
            alert('Please try again in sometime');
        }
    })
}

function sendEmail(){
    $.get('/sendEmail',function(data){
        if(data == 'success'){
            alert('Mail Sent');
        }else{
            alert('Please try again in sometime')
        }
    })
}