$(document).ready(function () {
    //按next時如果沒內容變橘色

    var currentStep = 1;

    $('.btn').click(function (e) {
        e.preventDefault();
        if ($('#useraccount').val() == '') {
            $('.useraccount').addClass('error');
        } else if ($('#userpassword').val() == '') {
            $('.userpassword').addClass('error');
        } else if ($('#userpasswordconfirm').val() == '') {
            $('.userpasswordconfirm').addClass('error');
        }

        $("#progressbar li[data-step='" + currentStep + "']").addClass('active');

        currentStep++;


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
            $('.btn').addClass('allfill').removeAttr("disabled");
        }
    });

    // 點擊進度圓點增加active
    // $('#progressbar li').click(function (e) {
    //     e.preventDefault();
    //     $(this).toggleClass('active');
    // });

});