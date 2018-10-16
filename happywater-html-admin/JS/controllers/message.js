app.controller('newsCtrl',function ($scope, $state, myService) {

    $(function () {

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

        //请求消息列表
        $scope.getMessage = function () {
            $scope.params = {
                pageNumber: 1
            };
            myService.getMessages($scope.params)
                .then(function (res) {
                    // console.log(res.data.data);
                    if (res.data.code === 0) {
                        $scope.msgList = res.data.data;
                    }
                })
        };
        $scope.getMessage();

        //查询消息
        $scope.search = function(){
            $scope.params = {
                createdBy: $scope.createdBy,
                messageTitle: $scope.keyWord,
                status: $scope.status,
                sendAt: $scope.startDate
            };
            myService.searchMessage($scope.params)
                .then(function (res) {
                    // console.log(res.data);
                    if (res.data.code === 0) {
                        $scope.msgList = res.data.data;
                    }
                })
        };
        $scope.clear = function(){
            $scope.getMessage();
        };

        $scope.view = function () {
          $scope.messageId = this.x.id;
          console.log(this.x);
        };

        $scope.edit = function () {

        };

        $scope.cancel = function () {
            $scope.messageId = this.x.id;
            $scope.cancelTip = `<p align="center">确认取消当前推送？<br>取消后将停止推送。</p>`;
            $scope.modalConfirm('取消',$scope.cancelTip,function (result) {
                if (result === true) {
                    myService.cancelMessage($scope.messageId)
                        .then(function (res) {
                            console.log(res.data);
                            if (res.data.code === 0) {
                                $state.reload('home.news');
                                $scope.modalAlert('取消','取消成功');
                            }else {
                                $scope.modalAlert('取消','操作异常')
                            }
                        },function () {
                            $scope.modalAlert('取消','取消失败')
                        })
                }
            });
        };

        $scope.delete = function () {
            $scope.messageId = this.x.id;
            $scope.deleteTip = `<p align="center">确认删除当前消息？<br>确认后将无法恢复。</p>`;
            $scope.modalConfirm('删除',$scope.deleteTip,function (result) {
                if (result === true) {
                    myService.deleteMessage($scope.messageId)
                        .then(function (res) {
                            console.log(res.data);
                            if (res.data.code === 0) {
                                $state.reload('home.news');
                                $scope.modalAlert('删除','删除成功');
                            }else {
                                $scope.modalAlert('删除','操作异常')
                            }
                        },function () {
                            $scope.modalAlert('删除','删除失败')
                        })
                }
            });
        };

    });
    //状态：ng-repeat
    $scope.msgStatus = [
        {value: '', name: '全部'},
        {value: '10', name: '待推送'},
        {value: '20', name: '已推送'},
        {value: '30', name: '已取消'}
    ]
});
app.controller('messageDetailCtrl',function ($scope, $state) {

});
app.controller('newMessageCtrl',function ($scope, $state, $stateParams, $http) {
    if ($stateParams.id == undefined){
        $state.go('login');
    }
    console.log($stateParams.id);

    $scope.confirm = function(){

        console.log('发送请求……');
        $http({
            method: 'GET',
            url: 'https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?cardNo=6226661203661552&cardBinCheck=true',
            // data: formData,
            // headers: {'Content-Type': undefined}        //不限制格式
        })
            .then(function (res) {
                console.log(res.data)
            })
    };
    $scope.getVal = function () {
        console.log(this);
    }
});

