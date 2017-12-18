$(document).ready(function(){

    $(function(){
        var phoneHeight = $('.phoneNumbers').outerHeight(true);
        $('.logo').css('height' , phoneHeight);
    });

    $(function(){
        var aboutHeight = $('.aboutKeeper').outerHeight(true);
        $('.mainAbout .imgKeeper').css('height' , aboutHeight)
    });

    $(function(){
        var digit = $('.digit');
        var addressHeight = digit.next().outerHeight(true);
        $(digit).css('height' , addressHeight)
    });

});