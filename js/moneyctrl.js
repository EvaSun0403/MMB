$(function () {
    var pageid = 1;
    var totalPage;

    render();
    function render() {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getmoneyctrl',
            data: {
                pageid: pageid
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                var htmlStr = template('listTpl', info);
                $('.moneyctrl_content ul').html(htmlStr);

                totalPage = Math.ceil(info.totalCount / info.pagesize);
                //给分页 初始化页数
                $('.pagination .num span').text(pageid + '/' + totalPage + '页');

                var str = '';
                for (var i = 1; i <= totalPage; i++) {
                    str += '<li data-id=' + i + '>' + i + '/' + totalPage + '页</li>';
                }
                $('.pagination ul').html(str);

                // 初始化区域滚动
                var myScroll = new IScroll('#wrapper');
            }
        })
    }

    //点击箭头 展示或隐藏ul
    $('.pagination .check').on('click', function () {
        $('.pagination ul').toggleClass('hide');
    });

    //通过事件委托 给li注册点击事件
    $('.pagination ul').on('click', 'li', function () {
        pageid = $(this).data('id');
        $('.pagination .num span').text($(this).text());
        $('.pagination ul').addClass('hide');
        render();
    })

    //点击上一页
    $('.prev').on('click', function () {
        pageid--;
        if (pageid == 0) {
            mui.toast('当前已是第一页');
            return;
        }
        render();
    })


    //点击下一页
    $('.next').on('click', function () {
        pageid++;
        if (pageid > b) {
            mui.toast('没有更多数据了');
            return;
        }
        // console.log(pageid);

        render();
    })


})