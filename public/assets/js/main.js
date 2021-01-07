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
