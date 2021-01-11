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
            $("#markHide" + idProduct).empty();
            $("#markHide" + idProduct).text(text);
        }
        else{
            $("#markHide" + idProduct).empty();
        }
    })
}

function blockUser(idUser){
    $.getJSON('/users/block-action?userID=' + idUser, function(data){
        if(data){
            var text = "X";
            $("#markBlock" + idUser).empty();
            $("#markBlock" + idUser).text(text);
        }
        else{
            $("#markBlock" + idUser).empty();
        }
    })
}

function blockAdmin(idAdmin){
    $.getJSON('/admin/checkIdentity?adminID=' + idAdmin, function(result){
        if(result){
            alert("Không thể khóa tài khoản chính mình!!!");
        }
        else{
            $.getJSON('/admin/block-action?adminID=' + idAdmin, function(data){
                if(data){
                    var text = "X";
                    $("#markBlock" + idAdmin).empty();
                    $("#markBlock" + idAdmin).text(text);
                }
                else{
                    $("#markBlock" + idAdmin).empty();
                }
            })
        }
    })
}