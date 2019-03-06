$(function () {
    var couponid = getKey('couponid');

    //点击×号 关闭模态框
    $('.modal .del').on('click',function(){
        $('.modal').hide();
    })


    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcouponproduct',
        data: {
            couponid: couponid
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);

            var htmlStr = template('listTpl', info);
            $('.couponProduct_content ul').html(htmlStr);

            $('.couponProduct_content').on('click', 'img', function () {
                var src = $(this).attr('src');
                $('.modal').show();

                var $imgs = $('.swiper-wrapper img');
                // console.log($imgs);
                $imgs.each(function (idx, ele) {
                    ele.src = src;
                })

                //初始化轮播图  要写在点击事件里面 
                var mySwiper = new Swiper('.swiper-container', {
                    autoplay: true,
                    loop: true, // 循环模式选项
                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                })


            })

            // 初始化区域滚动
            var myScroll = new IScroll('#wrapper');

          
        }
    })




})