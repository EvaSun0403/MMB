$(function(){
    var couponid = getKey('couponid');
    
    $.ajax({
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        data:{
            couponid:couponid
        },
        dataType:'json',
        success:function(info){
            console.log(info);

            var htmlStr = template('listTpl',info);
            $('.couponProduct_content ul').html(htmlStr);
            
            $('.couponProduct_content').on('click','img',function(){
                var src = $(this).attr('src');
                $('.modal').show();

                var $imgs =  $('.swiper-wrapper img');
                // console.log($imgs);
                $imgs.each(function(idx,ele){
                    ele.src = src;
                })

                 //初始化轮播图  要写在点击事件里面 
                var mySwiper = new Swiper('.swiper-container',{
                    autoplay: true,
                    loop: true, // 循环模式选项
                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                })


            })

            
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
            
        }
    })
    
   
    

})