
$(document).ready(function(){



    $("#adminname").on('input', function(){
        var admin_name = $('#adminname').val();
        // console.log("admin "+admin_name);
    if (admin_name != "admin") {
        // console.log("admin login error");
        $('#admincheck').show();
        $('#admincheck').html("**username is not correct");
        $('#admincheck').css( "color", "red");
        $('#passcheck').html("**password is not empty");
        $('#passcheck').css(   "color", "red");
        
    }
   
    else {
        $('#admincheck').show();
        $('#admincheck').css( "color", "green");
        $('#admincheck').html("valid");
       $('#passcheck').html("**password is not empty");
        $('#passcheck').css(   "color", "red");

    }
    },password());

       function password(){
           
          $("#password").on('input', function(){
            var pass_word = $('#password').val();

        // console.log("pass_word "+pass_word);
        if(pass_word!="12345")
        {

            var pass_word = $('#password').val();
            $('#passcheck').show();
            $('#passcheck').html("**password is not correct");
            $('#passcheck').css(   "color", "red");
    
        }
        else {
            $('#passcheck').show();
            $('#passcheck').html("valid");
            $('#passcheck').css(   "color", "green");

        }


    
    }
    
    );
        
       }
    })
    
    
  


