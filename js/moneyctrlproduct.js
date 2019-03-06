$(function () {
    var productid = getKey('productid');
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data: {
            productid: productid
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);

            var htmlStr = template('productTpl', info);
            $('.mm_content').html(htmlStr);

            // 初始化区域滚动
            var myScroll = new IScroll('#wrapper');
        }
    })


})