$(function(){
    var brandtitleid = getKey('brandtitleid');

    //渲染十大品牌
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrandtitle',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('brandTitleTpl',info);
            $('.brandTitle_main').html(htmlStr);
        }
    })

    



})