const swal = require('sweetalert');

function checkConfirmPassword(){
    let con_password = document.getElementById('con_password').value;
    let password = document.getElementById('password').value;
    if(con_password === password)
    {
        $('#password-confirm').removeClass('error').html('');
        $('#confirmButton').prop('disabled', false);
    }
    else{
        $('#password-confirm').addClass('error').html('Please check your password again');
        $('#confirmButton').prop('disabled', true);
    }
}

function hideProduct(idProduct){
    $.getJSON('/product/hide-action?productID=' + idProduct, function(data){
        if(data)
        {
            var text = "X";
            $("#markHide").empty();
            $("#markHide").text(text);
        }
        else{
            $("#markHide").empty();
        }
    })
}

function blockUser(idUser){
    $.getJSON('/users/block-action?userID=' + idUser, function(data){
        if(data){
            var text = "X";
            $("#markBlock").empty();
            $("#markBlock").text(text);
        }
        else{
            $("#markBlock").empty();
        }
    })
}