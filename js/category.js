$(function(){
    //1.获取分类标题
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorytitle',
        dataType:'json',
        success:function(info){
            console.log(info);  
            var htmlStr = template('titleTpl',info);
            $('.category_main .item').html(htmlStr);
             
        }
    })

      //2.点击箭头 展开与隐藏二级目录 
    
      $('.category_main').on('click','.mui-icon',function(){
        
        $(this).toggleClass('mui-icon-arrowdown').toggleClass('mui-icon-arrowup'); 
        console.log(this);
        
        var titleid = $(this).data('id');
        //找到这个箭头 对应的ul 
        var ul = $(this).parent().next();
        // console.log(ul);
        var ioc = $(this);

        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getcategory',
            data:{
                titleid:titleid
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                var htmlStr = template('categoryTpl',info);
                //把获取到的数据 赋值给他对应的ul
                ul.html(htmlStr);
                if(ioc.hasClass('mui-icon-arrowup')){
                    ul.html('');
                }
                
            }
        })

        
        
    })




})