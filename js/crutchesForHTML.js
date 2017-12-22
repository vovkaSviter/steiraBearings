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

    $(function(){
        var link = $('.mainNav a');
        var linkHeight = link.outerHeight();
        $('body').css('padding-top' , linkHeight*1.25)
    });

    //  Nav behaviour
        $(function(){
           $('.switch').click(function(){
               $('.mainNavSmall').toggleClass('opened');
           });

           var title = $('title').text();
           var display = $('.mainNavSmall .display');
           $(display).text(title);

        });

    //  prodItems height
        $(function(){
            var item = $('.prodMasonry .item');
            var width = item.width();
            var slider = $('.prodMasonry .slider');
            $(item).css('height' , width);
            $(slider).css('height' , width*2);
        });


                //  Item page

        $(function(){
            var block = $('.itemSubNav .block>div');
            var width = block.width();

            $(block).css('height' , width/1.75);
        });

        $(function(){
            var mainPhoto = $('.mainPhoto');
            var width = $(mainPhoto).width();

            $(mainPhoto).css('height' , width*.75);
        });

        $(function(){
            var tag = $('.tags>div');
            var width = $(tag).width();

            $(tag).css('height' , width);
        });

        $(function(){
            var secondaryPhoto = $('.secondaryPhoto>div');
            var width = $(secondaryPhoto).width();

            $(secondaryPhoto).css('height' , width);
        });

});


























