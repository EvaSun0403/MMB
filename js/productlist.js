$(function(){

    //1.获取传递过来的参数 
   var categoryid = getKey('categoryid');
   console.log(categoryid);
   


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

    $.ajax({
        url:'http://127.0.0.1:9090/api/getproductlist',
        data:{
            categoryid:categoryid,
            pageid:1
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('listTpl',info);
            $('.productlist_content ul').html(htmlStr);
        }
    })



})