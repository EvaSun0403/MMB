$(function(){

    //1.获取传递过来的参数 
   var categoryid = getKey('categoryid');
   console.log(categoryid);
   
    //分页功能
    var pageid = 1;
    var a ;
    var b ;
    //2.根据id 发送ajax
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        data:{
            categoryid:categoryid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('titleTpl',info);
            $('.productlist_title').html(htmlStr);
        }
    })


    render();
    function render(){ 
        $.ajax({
            url:'http://127.0.0.1:9090/api/getproductlist',
            data:{
                categoryid:categoryid,
                pageid:pageid
            },
            dataType:'json',
            success:function(info){
                console.log(info);  

                var htmlStr = template('listTpl',info);
                $('.productlist_content ul').html(htmlStr);

                //当前页
                a = pageid;
                //总页数
                b = Math.ceil(info.totalCount/info.pagesize);
              
                //分页 默认显示页数
                $('.num span').text( pageid +'/'+ b +'页');
                // console.log('当前是第:'+ pageid +'/'+ b +'页');
                
                var str = '';
                for ( var i = 1 ; i <= b ; i++) {
                    str +=  '<li data-id='+ i +'>'+ i +'/'+ b +'页</li>'; 
                }
                $('.pagination ul').html(str);

             
            }
        })
    }

    //点击上一页
    $('.prev').on('click',function(){
        pageid--;
        if(pageid == 0){
            mui.toast('当前已是第一页');
            return;
        }
        render();
    })


    //点击下一页
    $('.next').on('click',function(){
        pageid++;
        if(pageid > b){
            mui.toast('没有更多数据了');
            return;
        }
        // console.log(pageid);
        
        render();
    })


    //点击页码选择页面
    $ul = $('.pagination ul');
    //点击箭头 让ul展示与隐藏
    $('.pagination .check').on('click',function(){
        $ul.toggleClass('hide');
    })
    
    $('.pagination ul').on('click','li',function(){
        // console.log($(this).text());
        pageid = $(this).data('id');
        $('.num span').text($(this).text());
        $ul.addClass('hide');
        render();
    })
    



})