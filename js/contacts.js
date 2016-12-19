$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
    url: "https://formspree.io/sirenko.alexandr.l@gmail.com", 
    method: "POST",
    data: {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#field').val()
    },
    dataType: "json"
})
    .done(function() {
        $('form').append('<p style="color: #fff">Форма отправлена</p>');
    });
    });
});