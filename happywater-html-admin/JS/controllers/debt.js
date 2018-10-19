app.controller('debtCtrl',function ($scope, $http,$state, $stateParams) {

    //GET请求表格数据渲染
    $scope.getSearch = function () {
        $http({
            method: 'GET',
            url: '/happywater-admin-ajax/manager/business/companies?pageNumber=1',
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
            $scope.debtList = response.data.data;

            console.log(response);
        });
    };

    $scope.getSearch();



});




// -------------------------------------debt-------------------------------



app.controller('newDebtCtrl',function ($scope, $http,$state, $stateParams) {


});



// -------------------------------------nweDebt-------------------------------


app.controller('matchingCtrl',function ($scope, $http,$state, $stateParams) {

    var vm = this;


    // vm.ableClick = true;

    var clickAble = true;

    console.log(clickAble);
    console.log($stateParams.id,$stateParams.serialId,$stateParams.borrowMoney);
    $scope.companyId = $stateParams.id;
    $scope.companySerialId = $stateParams.serialId;
    $scope.companyBrrowMoney = Number($stateParams.borrowMoney);


    // vm.matchedSum = function (add, sum, id) {
    //     if (vm.debt.matchingAmount > 0) {
    //         if (!add) {
    //             vm.debt.matchingAmount = vm.debt.matchingAmount - sum;
    //         } else if (add) {
    //             vm.debt.matchingAmount = vm.debt.matchingAmount + sum;
    //         }
    //     }
    //     else if (vm.debt.matchingAmount < 0) {
    //         vm.ableClick = false;
    //         $rootScope.alert('已将末尾的投资合同拆分，请不要再添加投资合同', function () {
    //         });
    //     }
    // };

    // $scope.xadd = false;
    //
    //     $scope.cli =function () {
    //         vm.ableClick? $scope.xadd = !$scope.xadd:'';
    //         // xadd = !xadd;
    //         console.log($scope.xadd);
    //     };
    // $scope.xadd = false;


    $scope.getMatching = function () {
        $http({
            method: 'GET',
            url: '/happywater-admin-ajax/manager/business/companies/compacts/'+$stateParams.id,
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
            $scope.matchingList = response.data.data;
            console.log($scope.matchingList);
            console.log(response);
        });
    };
    $scope.getMatching();

    $scope.matchingMoney = $scope.companyBrrowMoney;


    $scope.matchingSum = function (add, sum, id) {
        console.log( $scope.companyBrrowMoney);
        if ($scope.matchingMoney > 0) {
            console.log( $scope.companyBrrowMoney);
            if (!add) {

                $scope.matchingMoney =  $scope.matchingMoney - sum;
            } else if (add) {
                $scope.matchingMoney =  $scope.matchingMoney + sum;
            }
        }
        console.log($scope.matchingMoney,$scope.companyBrrowMoney,sum,add,clickAble);

    };




});



// -------------------------------------matching-------------------------------



app.controller('checkDebtCtrl',function ($scope, $http,$state, $stateParams) {


});



// -------------------------------------checkDebtCtrl-------------------------------