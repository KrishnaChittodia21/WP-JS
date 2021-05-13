var m = M$('Krishna', 'Chittodia');
m.greet().setLang('en').validate();
$('#login').click(function () {
    var loginGrtr = M$('Krishna', 'Chittodia');

    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLGreetings('#greeting', true).log();
})