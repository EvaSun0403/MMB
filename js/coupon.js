$(function(){

    $.ajax({
        url:'http://127.0.0.1:9090/api/getcoupon',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('listTpl',info);
            $('.coupon_content ul').html(htmlStr);
        }
    })

})