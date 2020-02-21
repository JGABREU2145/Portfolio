$(document).ready(function() {
    $('.submit').click(function(event) {

        var email = $('#email').val();
        var name = $('#name').val();
        var message = $('#message').val();
        var statusElm = $('.status');
        statusElm.empty();

        if(name.length == 0) {
            statusElm.append('<div>Please enter your name</div>')        
        };

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } 
        else if (email.length === 0) {
            statusElm.append('<div>Please enter your email address');
            event.prevenDefault();
        }
        else {
            statusElm.append('<div>Email is not valid</div>');
            event.prevenDefault();
        }        

        if(message.length == 0) {
            statusElm.append('<div>Please enter a message</div>')        
        };

    });
});