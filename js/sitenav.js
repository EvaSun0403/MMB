$(function () {
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getsitenav',
        dataType: "json",
        success: function (info) {
            console.log(info);
            var htmlStr = template('listTpl', info);
            $('.shoplist_content ul').html(htmlStr);

            // 初始化区域滚动
            var myScroll = new IScroll('#wrapper');
        }
    })


})