app.controller('userCtrl',function ($scope, $http,$state, $stateParams) {

    // $scope.data = $stateParams;

    //GET请求表格数据渲染
    $scope.getSearch = function () {
        $http({
            method: 'GET',
            url: '/carrots-admin-ajax/manager/business/users/?pageNumber=0',
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

    $scope.seeUser = function () {
        $state.go("home.user.seeUser");

    }
});




// -------------------------------------user-------------------------------



app.controller('seeUserCtrl',function ($scope, $http,$state) {

    // $http({
    //     method: 'GET',
    //     url: '/carrots-admin-ajax/manager/manager/business/user/information?userId=0',
    //     params:{
    //
    //     }
    //
    // })
});



// --------------------------------seeUser-------------------------------