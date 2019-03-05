$(function(){
    var shopid=0;
    var areaid=0;

    shopRender();
  function shopRender(){
        //1.凑单品店铺
        $.ajax({
            url:'http://127.0.0.1:9090/api/getgsshop',
            dataType:'json',
            success:function(info){
                console.log(info);
                var htmlStr = template('shopTpl',info);
                $('ul.shops ').html(htmlStr);
                
                $('.shop em').text(info.result[0].shopName);
                //ajax是异步执行的 所以这个赋值不行。。。。
                // shopid = info.result[2].shopId;
                // console.log(info.result[0].shopId);
            }
        })
    }
    
    // console.log(shopid);

    areaRender();
  function areaRender(){
        //1.凑单品店铺
    $.ajax({
        url:'http://127.0.0.1:9090/api/getgsshoparea',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('areaTpl',info);
            $(' ul.areas').html(htmlStr);
            
            $('.area em').text((info.result[1].areaName).slice(0,2));
            areaid = info.result[0].areaId;
        }
    })
  }

  //3.点击切换 shopList
  $('.shop span').on('click',function(){
      $(this).toggleClass('mui-icon mui-icon-arrowup').toggleClass('mui-icon mui-icon-arrowdown');
     $('.shops').toggleClass('hide');
     $('.areas').addClass('hide');
     
  })

  //4.点击列表，给shop赋值
  $('.shops').on('click','li',function(){
      console.log($(this).text())
      $('.shop em').text($(this).text());

      shopid = $(this).data('id');
      listRender();
      $('.shops').addClass('hide');
      $('.shop span').removeClass('mui-icon mui-icon-arrowdown').addClass('mui-icon mui-icon-arrowup');
  })

  //5.点击切换 areaList
  $('.area span').on('click',function(){
      $(this).toggleClass('mui-icon mui-icon-arrowup').toggleClass('mui-icon mui-icon-arrowdown');
     $('.areas').toggleClass('hide');
     $('.shops').addClass('hide');
     
  })

  //4.点击列表，给area赋值
  $('.areas').on('click','li',function(){
      $('.area em').text($(this).text().slice(0,2));
        areaid = $(this).data('id');
        console.log(areaid);
        
        listRender();
      $('.areas').addClass('hide');
      $('.area span').removeClass('mui-icon mui-icon-arrowdown').addClass('mui-icon mui-icon-arrowup');
  })


  
  listRender();
  function listRender(){
    console.log(shopid,areaid);
        //渲染凑单品商品 列表
        $.ajax({
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
            shopid:shopid,
            areaid:areaid
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                var htmlStr = template('listTpl',info);
                $('.gsProduct_content ul').html(htmlStr);
                
            }
        })
    }


})