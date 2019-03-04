$(function(){
    //1.渲染nav 列表
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getindexmenu',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('navTpl',info);
            $('.mm_nav ul').html(htmlStr);

        
            //nav部分 最后四个li的展示隐藏
            var $li = $('.mm_nav li').eq(7);
            // console.log($li);
            $li.on('click',function(){
                $('.mm_nav li:nth-last-child(-n+4)').toggleClass('now');
            })

            //2.改变 海淘折扣的路径
            var a = $('.mm_nav a')[4];
           a.href = 'moneyctrl2.html';
            

        }
    })

    //2.折扣列表
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('recommendTpl',info);
            $('.recommend_content ul').html(htmlStr);

            // console.log(info.result[0].productComCount);
            
            //评论条数
            $results = $('.recommend_content .res');
           
            $results.each(function( idx,ele ){
                var res = $(this).text();
                var num = res.slice(1,2);
                $(this).next().text(num);
            })
           
        }
    })

 
})