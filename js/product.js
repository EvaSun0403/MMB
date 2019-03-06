$(function(){
    //1.获取传递过来的productid  发送ajax
    var productid = getKey('productid');
    console.log(productid);
    var productPrice = getKey('productPrice');
    console.log(productPrice);
    
    $.ajax({
        url:'http://127.0.0.1:9090/api/getproduct',
        data:{
            productid:productid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('titleTpl',info);
            $(".productlist_title").html(htmlStr);

            var htmlStr2 = template('contentTpl',info);
            $('.productlist_content').html(htmlStr2);
            $('.productlist_content .price').text(productPrice);
        }
    })


    //渲染商品评论
    $.ajax({
        url:'http://127.0.0.1:9090/api/getproductcom',
        data:{
            productid:productid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('evaluateTpl',info);
            $('.evaluate .content').html(htmlStr);
            
            var myScroll = new IScroll('#wrapper');
        }

    })






})