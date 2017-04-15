/**
 * Created by Jeevjyot on 4/15/17.
 */


$(document).ready(function(){

    if(sessionStorage.email == null || sessionStorage.email == "undefined"){

        $('#prf').hide();
    }else{
        $('#prf').show();
    }
      //  alert('Hi');
    //console.log(sessionStorage.email)
   // alert(sessionStorage.email);

    (function(){

            console.log('performing search');
        $.get('/latest3',function(response){

            console.log(response);
            /*document.getElementById('n').innerHTML =response[0].bookname;
            document.getElementById('n1').innerHTML =response[0].bookname;
            document.getElementById('n2').innerHTML =response[0].bookname;
            document.getElementById('n3').innerHTML =response[0].bookname;
            document.getElementById('pr').innerHTML =response[0].price;
            document.getElementById('pr1').innerHTML =response[0].price;
            document.getElementById('pr2').innerHTML =response[0].price;
            document.getElementById('pr3').innerHTML =response[0].price;*/
            document.getElementById('img').src=response[8].imagUrl;
            document.getElementById('img1').src=response[9].imagUrl;
            document.getElementById('img2').src=response[10].imagUrl;
            document.getElementById('img3').src=response[11].imagUrl;
        });

    })();

}); //end of the document ready function