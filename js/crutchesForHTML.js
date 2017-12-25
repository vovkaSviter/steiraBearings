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
            catKeeper = $('.catKeeper>.row');

            $(switchItem).click(function() {
                var catType = $(this).attr('data-catType');
                $(catKeeper).attr('data-type' , catType);

                if ($(catKeeper).attr('data-type') == 'list' ){
                    var i;
                    var itemsList = '';
                    for(i = 0; i < 8; ++i){
                        itemsList += "<div class=\"catItemList smallTxt col-xs-12\">\n" +
                            "                                            <div class=\"row\">\n" +
                            "                                                <div class=\"imgKeeper col-xs-12 col-md-2\"></div>\n" +
                            "                                                <div class=\"title col-xs-12 col-md-3\">\n" +
                            "                                                    Подшипник 51100\n" +
                            "                                                </div>\n" +
                            "                                                <div class=\"hidden-xs hidden-sm col-md-2 inStock\">\n" +
                            "                                                    <span class=\"stockCheck\">g</span>\n" +
                            "                                                    В наличии\n" +
                            "                                                </div>\n" +
                            "                                                <div class=\"hidden-xs hidden-sm col-md-2 subDimensions\">\n" +
                            "                                                    <div>\n" +
                            "                                                        <span>L</span>\n" +
                            "                                                        <span>W</span>\n" +
                            "                                                        <span>M</span>\n" +
                            "                                                    </div>\n" +
                            "                                                    <div class=\"values\">\n" +
                            "                                                        <span>33</span>\n" +
                            "                                                        <span>34</span>\n" +
                            "                                                        <span>135</span>\n" +
                            "                                                    </div>\n" +
                            "                                                </div>\n" +
                            "\n" +
                            "                                                <div class=\"col-xs-12 col-md-3 addOrder\">\n" +
                            "                                                    <div class=\"addToList\">\n" +
                            "                                                        <a href=\"#\" class=\"smallTxt\">Отложить в список &rarr;</a>\n" +
                            "                                                    </div>\n" +
                            "                                                    <div class=\"orderNow\">\n" +
                            "                                                        <div>Заказать сейчас!</div>\n" +
                            "                                                    </div>\n" +
                            "                                                </div>\n" +
                            "\n" +
                            "                                            </div>\n" +
                            "                                        </div>";
                        $(catKeeper).html(itemsList);
                    }
                } else {
                    var x;
                    var itemsMasonry = '';
                    for(x = 0; x < 12; ++x){
                        itemsMasonry += "<div class=\"col-xs-12 col-md-3\">\n" +
                            "                                            <div class=\"familiarCard smallTxt catTypeMasonry\">\n" +
                            "                                                <div class=\"imgKeeper\"></div>\n" +
                            "                                                <h2>Подшипник 51102</h2>\n" +
                            "                                                <div class=\"subDimensions\">\n" +
                            "                                                    <div>\n" +
                            "                                                        <span>L</span>\n" +
                            "                                                        <span>W</span>\n" +
                            "                                                        <span>M</span>\n" +
                            "                                                    </div>\n" +
                            "                                                    <div class=\"values\">\n" +
                            "                                                        <span>335</span>\n" +
                            "                                                        <span>340</span>\n" +
                            "                                                        <span>035</span>\n" +
                            "                                                    </div>\n" +
                            "                                                </div>\n" +
                            "                                                <div class=\"addToList\">\n" +
                            "                                                    <a href=\"#\" class=\"smallTxt\">Отложить в список &rarr;</a>\n" +
                            "                                                </div>\n" +
                            "                                                <div class=\"orderNow\">\n" +
                            "                                                    <div>Заказать сейчас!</div>\n" +
                            "                                                </div>\n" +
                            "                                            </div>\n" +
                            "                                        </div>";
                        $(catKeeper).html(itemsMasonry);
                    }
                }

            });
        });

});


























