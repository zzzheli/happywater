//状态转换
app.filter('status', function() {
    return function(status) {
        switch (status) {
            case false :
                return '下线';
                break;
            case true :
                return '上线';
                break;
        }
    }
});

//上架 下架
app.filter('line', function() {
    return function(status) {
        switch (status) {
            case false :
                return '上线';
                break;
            case true :
                return '下线';
                break;
        }
    }
});

//禁用状态
app.filter('disabled', function() {
    return function(disabled) {
        switch (disabled) {
            case 'false' :
                return '回复';
                break;
            case 'true' :
                return '已回复';
                break;
        }
    }
});

//禁用状态
app.filter('pushStatus', function() {
    return function(status) {
        switch (status) {
            case 10 :
                return '推送';
                break;
            case 20 :
                return '已推送';
                break;
            case 30 :
                return '微推送';
        }
    }
});

// 大小转换
app.filter('unit', function () {
    return function (size) {
        // var
        if (!isNaN(size))
            return (size/1024/1024).toFixed(2) + 'MB';

    }
});