$(function(){
    var brandtitleid = getKey('brandtitleid');
    var productid=0;

    //获取销量排行榜第一位的 图片和标题
    var src = '';
    var name = '';
    
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrand',
        data:{
            brandtitleid:brandtitleid
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('brandTpl',info);
            $('.brand_main').html(htmlStr);

        }
    })

    //2.渲染销量排行榜
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrandproductlist',
        data:{
            brandtitleid:brandtitleid,
            pagesize:4
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('salesTpl',info);
            $('.salesVolume ul').html(htmlStr);
            productid = info.result[0].productId;
            console.log(info.result[2].productId);


           
            
        }
    })


  //3.渲染评论列表

  $.ajax({
      url:'http://127.0.0.1:9090/api/getproductcom',
      data:{
        productid:productid
      },
      dataType:'json',
      success:function(info){
          console.log(info);
          var hrmlStr = template('commentTpl',info);
          $('.comment ul').html(hrmlStr);

          //给评论列表 赋值 图片+name 需要放在渲染出来的回调里
          var $img = $('.salesVolume img');
          src = $img[0].src;
          var $name = $('.salesVolume .name');
          name = $name[0].innerText;

          // //赋值给评论列表
          console.log($('.comment img')[0]);
          var $imgs =  $('.comment img');
          $imgs.each(function( idx,ele ){
              ele.src = src;
          })

          var $names =  $('.comment .name');
          console.log($names);
          
          $names.each(function( idx,ele ){
              ele.innerText = name;
          })
        
      }
  })
    


})