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
            
    
        }
    })



})