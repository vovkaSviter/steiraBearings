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

            var asideHeader = $('.itemNav .header');

            $(block).css('height' , width/1.75);
            $(asideHeader).css('height' , width/1.75);
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

            //  Aside Filter Behaviour
                $(function(){
                    var filterSwitch = $('.itemNav .filterSwitch');
                    var inputKeeper = $('.itemNav .inputKeeper');
                    $(filterSwitch).click(function () {
                       $(this).toggleClass('opened');
                       $(inputKeeper).toggleClass('closed');
                    });
                });

        $(function(){
            var imgKeeper = $('.itemNav .imgKeeper');
            var width = $(imgKeeper).width();

            $(imgKeeper).css('height' , width*.75);

        });

            //catType behaviour

        $(function(){
            var switchItem = $('.switch>div');
            $(switchItem).click(function() {
                var catType = $(this).attr('data-catType');
                var catKeeper = $('.catKeeper');
                $(catKeeper).attr('data-type' , catType);

                if ($(catKeeper).attr('data-type') == 'list' ){
                    var i;
                    var itemsList = '';
                    for(i = 0; i < 8; ++i){
                        itemsList += "<p>List paragraph</p>";
                        $(catKeeper).html(itemsList);
                    }
                } else {
                    var x;
                    var itemsMasonry = '';
                    for(x = 0; x < 12; ++x){
                        itemsMasonry += "<p>2</p>";
                        $(catKeeper).html(itemsMasonry);
                    }
                }

            })
        });

});


























