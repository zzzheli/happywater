app.controller('newsCtrl',function ($scope, $state) {

    //获取日期(日历插件)
    $scope.format = 'yyyy/MM/dd';   //日期格式
    $scope.inputFormats = ['yyyy/M!/d!','yyyy-M!-d!','yyyy.M!.d!'];  //M! 为 1位或两位数月份 MM为两位数
    $scope.today = new Date();      //今天日期
    // 开始日期(日期面板状态）
    $scope.popupStart = {
        opened: false
    };
    $scope.openStart = function () {    //输入框聚焦时显示日期面板
        $scope.popupStart.opened = true;
        if($scope.endDate === undefined){       //当结束日期没选的时候，起始可选日期为today
            $scope.maxDay = $scope.today;
        }else {
            $scope.maxDay = $scope.endDate;     //结束日期有值时，起始日期最大为结束日期的值
        }
        // $scope.startDate = undefined;       //聚焦时清空值
    };
    //结束日期 (日历面板显示)
    $scope.popupEnd = {
        opened : false
    };
    $scope.openEnd = function () {
        $scope.popupEnd.opened = true;
        $scope.endDate = undefined;         //聚焦时清空值
    };

});
