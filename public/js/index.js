/**
 * Created by Jeevjyot on 4/15/17.
 */


$(document).ready(function(){

        $.get('/latest3',function(response){

            document.getElementById('n').innerHTML =response[0].bookname;
            document.getElementById('n1').innerHTML =response[0].bookname;
            document.getElementById('n2').innerHTML =response[0].bookname;
            document.getElementById('n3').innerHTML =response[0].bookname;
            document.getElementById('pr').innerHTML =response[0].price;
            document.getElementById('pr1').innerHTML =response[0].price;
            document.getElementById('pr2').innerHTML =response[0].price;
            document.getElementById('pr3').innerHTML =response[0].price;
            document.getElementById('img').src=response[0].imgUrl;
            document.getElementById('img1').src=response[1].imgUrl;
            document.getElementById('img2').src=response[2].imgUrl;
            document.getElementById('img3').src=response[3].imgUrl;
        }); //updating the lates 3 images from the database

}); //end of the document ready function