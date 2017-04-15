/**
 * Created by Jeevjyot on 4/15/17.
 */


$(document).ready(function(){

    $('#search').click(function(e){
        e.preventDefault();
       // alert('I am clicked');
        var textValue = document.getElementById('textSearch').value;
       // alert(textValue);
        $.get('https://www.googleapis.com/books/v1/volumes?q='+textValue ,function(response){
            for (var i = 0; i < response.items.length; i++) {
                var item = response.items[i];
                // in production code, item.text should have the HTML entities escaped.
                console.log(item.volumeInfo.imageLinks.smallThumbnail);
                document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title+" Author:"+item.volumeInfo.authors+" Publisher:"+item.volumeInfo.publisher+" :ISBN"+item.volumeInfo.industryIdentifiers[0].identifier+"<img src= "+item.volumeInfo.imageLinks.smallThumbnail+"  >";
            }
        })
    });

    $('#searchDB').click(function(e){
        e.preventDefault();
        $.get('/searchDatabase',function(data){
            console.log(data);
        })
    });

    $('#email').click(function(e){
        e.preventDefault();
        $.get('/sendEmail',function(data){
            console.log(data);
        })
    });

    $('#message').click(function(e){
        e.preventDefault();
        $.get('/sentText',function(data){

        })
    })

})