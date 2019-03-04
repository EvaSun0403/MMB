$(function(){
    var titleid=0 ;

    //1.渲染标题部分
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType:'json',
        success:function( info ){
            console.log(info);
            var htmlStr = template('titleTpl',info);
            $('.baicaijia_title ul').html(htmlStr);
        }
    })

    //2.点击标题 高亮显示
    $('.baicaijia_title').on('click','li',function(){
        $(this).addClass('current').siblings().removeClass('current');
        titleid = $(this).data('id');
        console.log(titleid);
        
    })


    render()
   function render(){
        //3.发送ajax 渲染列表
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
        data:{
            titleid:titleid
        },
        dataType:'json',
        success:function( info ){
            console.log(info);
            var htmlStr = template('listTpl',info);
            $('.baicaijia_content ul').html(htmlStr);

            //4.进度条赋值 percentage
            var percentage = $('.nprogress .bar span').text();
            // console.log(percentage);
            // $('.inner').style.width
            var $nprogress = $('.baicaijia_content ul li .nprogress');
            $nprogress.each(function( idx , ele ){
                var per = $(this).find('span').text();
                // console.log(per);
                $(this).find('.num').text(per);
                $(this).find('.inner').width(per);
                
              

            //  var $lis = $('.baicaijia_title ul li');
            //  console.log($lis);
            var ul = document.querySelector('.baicaijia_title ul');
            
             var lis = ul.querySelectorAll('li');
             console.log(lis);

             var totalWidth=0;
             lis.forEach(function(ele,idx){
                 totalWidth += ele.offsetWidth;                 
                })
              ul.style.width = totalWidth + 100 + 'px';
             
             
                //4.区域滚动
                mui('.mui-scroll').scroll({
                deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，
                scrollX:true,
                scrollY:false,
                indicators: false
            });

            })
        }
    })
   }


   //5.点击标题时，


})