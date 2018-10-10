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

    $scope.userInform = function () {
        $state.go("home.user.userInform");

    }
});




// -------------------------------------user-------------------------------



app.controller('userInformCtrl',function ($scope, $http,$state) {
    $scope.getSearch = function () {
        $http({
            method: 'GET',
            url: '/happywater-admin-ajax/manager/business/user/information?userId=0',
            params:{

            }

        })
    };
    $scope.getSearch();

});



// --------------------------------userInform-------------------------------