

$(function(){

    $('html,body').animate({'scrollTop':0},1000,'swing');

    $(window).on('scroll',function(){
        var scroll =$(this).scrollTop();
        /* $('h1').text(scroll); */

        /* $('article').eq(0).css({transform:'translateZ(' + (0+scroll) + 'px)'});
        $('article').eq(1).css({transform:'translateZ(' + (-5000+scroll) + 'px)'});
        $('article').eq(2).css({transform:'translateZ(' + (-10000+scroll) + 'px)'});
        $('article').eq(3).css({transform:'translateZ(' + (-15000+scroll) + 'px)'});
        $('article').eq(4).css({transform:'translateZ(' + (-20000+scroll) + 'px)'}); */

        for(var i = 0; i<5; i++){
            $('article').eq(i).css({
                transform:'translateZ('+ (-5000*i+scroll) +'px)'
            });

            if(scroll>=i*5000 && scroll<(i+1)*5000){
                $('.navi li').removeClass('on');
                $('.navi li').eq(i).addClass('on');
                $('article').removeClass('on');
                $('article').eq(i).addClass('on');
            }
        }

        /* if(scroll>=0 && scroll<5000){
            $('.navi li').removeClass('on');
            $('.navi li').eq(0).addClass('on');
            $('article').removeClass('on');
            $('article').eq(0).addClass('on');
        }
        if(scroll>=5000 && scroll<10000){
            $('.navi li').removeClass('on');
            $('.navi li').eq(1).addClass('on');
            $('article').removeClass('on');
            $('article').eq(1).addClass('on');
        }
        if(scroll>=10000 && scroll<15000){
            $('.navi li').removeClass('on');
            $('.navi li').eq(2).addClass('on');
            $('article').removeClass('on');
            $('article').eq(2).addClass('on');
        }
        if(scroll>=15000 && scroll<20000){
            $('.navi li').removeClass('on');
            $('.navi li').eq(3).addClass('on');
            $('article').removeClass('on');
            $('article').eq(3).addClass('on');
        }
        if(scroll>=20000 && scroll<25000){
            $('.navi li').removeClass('on');
            $('.navi li').eq(4).addClass('on');
            $('article').removeClass('on');
            $('article').eq(4).addClass('on');
        } */


        /* $('.navi li').eq(0).click(function(){
            $('html,body').animate({'scrollTop':0},1000,'swing');
        });
        $('.navi li').eq(1).click(function(){
            $('html,body').animate({'scrollTop':5000},1000,'swing');
        });
        $('.navi li').eq(2).click(function(){
            $('html,body').animate({'scrollTop':10000},1000,'swing');
        });
        $('.navi li').eq(3).click(function(){
            $('html,body').animate({'scrollTop':15000},1000,'swing');
        });
        $('.navi li').eq(4).click(function(){
            $('html,body').animate({'scrollTop':20000},1000,'swing');
        }); */

    });

    $('.navi li').click(function(){
        var a = $(this).index();
        $('html,body').animate({'scrollTop':5000*a},1500,'swing');
    });
});

