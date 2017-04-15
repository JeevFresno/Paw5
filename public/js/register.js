$( document ).ready(function() {
 


$( "#btnReg" ).click(function() {

var user ={};
user.fn = $("#fname").val();
user.ln = $('#lname').val();
user.em = $('#emailReg').val();
user.EndUser= $('input:radio[name=optionsRadios]:checked').val();
alert(user.EndUser);
user.mj = $('#major').val();
user.mn =$('#minor').val();
user.pass =$('#password').val();
user.ph =$('#ph').val();
    $.get('/register',user,function(data){
        if(data=='success'){
            alert('Registration Successfull');
        }else{
            alert('Please try again');
        }
    });

});
});


