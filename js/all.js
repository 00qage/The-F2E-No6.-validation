$(document).ready(function () {
    //按next時如果沒內容變橘色
    $('.btn').click(function (e) {
        e.preventDefault();
        if ($('#useraccount').val() == '') {
            $('.useraccount').addClass('error');
        } else if ($('#userpassword').val() == '') {
            $('.userpassword').addClass('error');
        } else if ($('#userpasswordconfirm').val() == '') {
            $('.userpasswordconfirm').addClass('error');
        }
    });
    //點input時變回原樣
    $('.input input').focus(function (e) {
        e.preventDefault();
        $('.input').removeClass('error');
        $('.btn').removeClass('allfill');
    });
    //監控每個input都有東西時btn才變色
    $('.input input').blur(function (e) {
        e.preventDefault();
        if ($('#useraccount').val() !== '' && $('#userpassword').val() !== '' && $('#userpasswordconfirm').val() !== '') {
            $('.btn').addClass('allfill');
        }
    });


});