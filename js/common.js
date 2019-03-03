
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

