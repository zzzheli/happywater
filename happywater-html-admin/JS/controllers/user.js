app.controller('userCtrl',function ($scope, $http,$state, $stateParams) {

    // $scope.data = $stateParams;

    //GET请求表格数据渲染
    $scope.getSearch = function () {
        $http({
            method: 'GET',
            url: '/happywater-admin-ajax/manager/business/users/?pageNumber=0',
            params: {
                // serialId: $stateParams.serialId,
                // phoneNumber: $stateParams.phoneNumber,
                // realName: $stateParams.realName,
                // idCard: $stateParams.idCard,
                // balance: $stateParams.balance,
                // profit: $stateParams.profit,
                // createdAt: $stateParams.createdAt,
                // lock: $stateParams.lock
            }
        }).then(function successCallback(response) {
            // $scope.records = response.data.data.articleList;     //搜索后的列表数据
            // $scope.page = $stateParams.page;                     //搜索后的页数
            // $scope.totalItems = response.data.data.total;        //搜索后的数据总条数
            $scope.userList = response.data.data;
            console.log(response);
        });
    };

    $scope.getSearch();


});


//上下线模态框提示(暂无数据)
//     $scope.locked = function () {
//         $scope.idLine = this.x.id;
//         $scope.statusLine = this.x.status;
//         if (this.x.status === 1) {
//             $scope.tips1 =
//                 "<p style=\"font-size: 16px;color: #999;text-align: center\">" +
//                 "上线后该图片将在轮播banner中展示。</p>\n" +
//                 "<h4 style=\"font-size: 20px;text-align: center\">" +
//                 "是否执行上线操作？</h4>";
//             $scope.tips2 = '上线成功';
//         } else {
//             $scope.tips1 =
//                 "<p style=\"font-size: 16px;color: #999;text-align: center\">" +
//                 "下线后该图片将不展示站轮播banner中。</p>\n" +
//                 "<h4 style=\"font-size: 20px;text-align: center\">" +
//                 "是否执行下线操作？</h4>";
//             $scope.tips2 = '下线成功';
//         }
//
//
//         bootbox.confirm({
//             title: '操作提示',
//             message: $scope.tips1,
//             buttons: {
//                 cancel: {
//                     label: '取消'
//                 },
//                 confirm: {
//                     label: '确认'
//                 }
//             },
//             callback: function(result) {
//                 if(result === true) {
//                     $http ({
//                         method: 'PUT',
//                         url: '/carrots-admin-ajax/a/u/article/status',
//                         params: {
//                             id: $scope.idLine,
//                             status: ($scope.statusLine === 1)? 2 : 1
//                         }
//                     }).then(function (res) {
//                         if(res.data.code === 0){
//                             $state.reload('homepage.article');
//                             bootbox.alert({
//                                 title: '提示',
//                                 message: $scope.tips2
//                             });
//                         }else {
//                             bootbox.alert({
//                                 title: '提示',
//                                 message: '系统异常'
//                             });
//                         }
//                     }, function () {
//                         bootbox.alert({
//                             title: '提示',
//                             message: '提交失败'
//                         });
//                     });
//                 }
//             }
//         });
//     };



// -------------------------------------user-------------------------------



app.controller('userInformCtrl',function ($scope, $http,$state, $stateParams) {
    console.log($stateParams.id);
    $scope.getSearch = function () {
        $http({
            method: 'GET',
            url: '/happywater-admin-ajax/manager/business/user/information',
            params:{
                userId:$stateParams.id
            }

        }).then(function successCallback(response) {

            $scope.inform = response.data.data;
            console.log(response);
            console.log($scope.inform);
            $scope.serialId = $scope.inform.serialId;
            $scope.serialId = $scope.inform.serialId;
            $scope.idCard = $scope.inform.idCard;
            $scope.realName = $scope.inform.realName;
            $scope.createdAt = $scope.inform.createdAt;
            $scope.balance = $scope.inform.balance;
            $scope.profit = $scope.inform.profit;
        });
    };
    $scope.getSearch();

    $scope.replace = function () {
        $scope.shadePhone = true;
    };

    $scope.getCode = function () {
        $http({
            method:"GET",
            url:"/happywater-admin-ajax/manager/business/user/phone/msg",
            params: {
                phoneNumber : $scope.phoneNumber
            }
        }).then( function success (response) {
            if (response.data.code == 0){

                var time = 60;
                var get1 = document.getElementById('get1');
                get1.setAttribute("disabled", "true");

                var timer = setInterval(function () {
                    get1.value = ('重新发送'+(time) + 'S');
                    if (time == 1) {
                        clearInterval(timer);
                        time = 60;
                        get1.value = "获取验证码";
                        get1.removeAttribute("disabled");
                    }
                    time--;
                }, 1000);

            }else {
                $scope.warn = response.data.message;
            }

        })
    };

    $scope.sure = function () {
        $http({
            method: 'PUT',
            url: '/happywater-admin-ajax//manager/business/user/phone',
            params:{
                userId:$stateParams.id,
                phoneNumber : $scope.phoneNumber,
                msgCode:$scope.msgCode
            }

        }).then(function successCallback(response) {

            if (response.data.code == 0){
                $scope.confirm = true;
                $scope.success = true;
            }else {
                $scope.warn = response.data.message;
            }
        });
    };

    $scope.cancel  =function () {
        $scope.shadePhone = false;
    };

    $scope.makeSure  =function () {
        $scope.shadePhone = false;
        $scope.success = false;
        $scope.confirm = false;
    };

});



// --------------------------------userInform-------------------------------


app.controller('dealCtrl',function ($scope, $http,$state, $stateParams) {
    // console.log($stateParams.id);
    // $scope.getSearch = function () {(暂无数据)
    //     $http({
    //         method: 'GET',
    //         url: '/happywater-admin-ajax/manager/business/user/information?userId='+ $stateParams.id,
    //         params:{
    //         }
    //
    //     }).then(function successCallback(response) {
    //
    //         $scope.inform = response.data.data;
    //         console.log(response);
    //         console.log($scope.inform);
    //         $scope.serialId = $scope.inform.serialId;
    //         $scope.serialId = $scope.inform.serialId;
    //         $scope.idCard = $scope.inform.idCard;
    //         $scope.realName = $scope.inform.realName;
    //         $scope.createdAt = $scope.inform.createdAt;
    //         $scope.balance = $scope.inform.balance;
    //         $scope.profit = $scope.inform.profit;
    //     });
    // };
    // $scope.getSearch();

});



// --------------------------------deal-------------------------------




app.controller('compactCtrl',function ($scope, $http,$state, $stateParams) {
    // console.log($stateParams.id);
    // $scope.getSearch = function () {(暂无数据)
    //     $http({
    //         method: 'GET',
    //         url: '/happywater-admin-ajax/manager/business/user/information?userId='+ $stateParams.id,
    //         params:{
    //         }
    //
    //     }).then(function successCallback(response) {
    //
    //         $scope.inform = response.data.data;
    //         console.log(response);
    //         console.log($scope.inform);
    //         $scope.serialId = $scope.inform.serialId;
    //         $scope.serialId = $scope.inform.serialId;
    //         $scope.idCard = $scope.inform.idCard;
    //         $scope.realName = $scope.inform.realName;
    //         $scope.createdAt = $scope.inform.createdAt;
    //         $scope.balance = $scope.inform.balance;
    //         $scope.profit = $scope.inform.profit;
    //     });
    // };
    // $scope.getSearch();

});



// --------------------------------deal-------------------------------




app.controller('seeCompactCtrl',function ($scope, $http,$state, $stateParams) {
    // console.log($stateParams.id);
    // $scope.getSearch = function () {(暂无数据)
    //     $http({
    //         method: 'GET',
    //         url: '/happywater-admin-ajax/manager/business/user/information?userId='+ $stateParams.id,
    //         params:{
    //         }
    //
    //     }).then(function successCallback(response) {
    //
    //         $scope.inform = response.data.data;
    //         console.log(response);
    //         console.log($scope.inform);
    //         $scope.serialId = $scope.inform.serialId;
    //         $scope.serialId = $scope.inform.serialId;
    //         $scope.idCard = $scope.inform.idCard;
    //         $scope.realName = $scope.inform.realName;
    //         $scope.createdAt = $scope.inform.createdAt;
    //         $scope.balance = $scope.inform.balance;
    //         $scope.profit = $scope.inform.profit;
    //     });
    // };
    // $scope.getSearch();

});



// --------------------------------deal-------------------------------