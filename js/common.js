
    function getKey(key){
        var str = location.search;
        str = str.slice(1);
        // console.log(str);
        var arr = str.split('&');
        var obj = {};
        arr.forEach(function(v,i){
            var key = v.split('=')[0];
            var value = v.split('=')[1];
            obj[key] = value;
        })
        return obj[key]
    }


    //初始化 区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });