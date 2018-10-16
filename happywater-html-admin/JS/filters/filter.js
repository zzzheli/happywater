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
                return '待推送';
                break;
            case 20 :
                return '已推送';
                break;
            case 30 :
                return '已取消';
        }
    }
});

//消息管理禁用查看
app.filter('viewMessage',function () {
    return function (status) {
        switch (status) {
            case 10 :
                return false;
                break;
            case 20 :
                return true;
                break;
            case 30 :
                return true;
                break;
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
app.filter('merry',function(){
    return function(merry){
        switch(merry){
            case 0 :
                return '否';
                break;
            case 1 :
                return '是';
                break;
        }
    }
})
app.controller('filterCtrl',function($scope){
    $scope.people = [
        {'name':'Ace','birthDate':'723534235230','sex':'男','height':'1.883','blood':'A','money':'648','merry':'1'},
        {'name':'Tracy','birthDate':'891566546132','sex':'女','height':'1.655','blood':'O','money':'128','merry':'0'},
        {'name':'Jhon','birthDate':'838465431654','sex':'男','height':'1.764','blood':'A','money':'328','merry':'0'},
        {'name':'Black','birthDate':'740465124864','sex':'男','height':'1.836','blood':'B','money':'996','merry':'1'},
        {'name':'Kimi','birthDate':'801513241656','sex':'男','height':'1.722','blood':'AB','money':'256','merry':'0'},
        {'name':'Helen','birthDate':'764546465465','sex':'女','height':'1.687','blood':'O','money':'196','merry':'1'}
    ];
    //在controller方法内定义一个过滤方法
    $scope.merryFilter = function(obj){
        if(obj.merry == 1){
            return true;
        }
        return false;
    }
});