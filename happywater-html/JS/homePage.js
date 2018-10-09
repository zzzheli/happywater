app.controller("homeCtrl", function ($scope,$http,$state,$stateParams) {
    $scope.financial = function () {
        $state.go("homePage.financial");

        $scope.getFinances = function () {

            $http({
                method: 'GET',
                url: '/carrots-admin-ajax/user/products/0'
                // params: {
                //     "id": 1,
                //     "serialId": "P000001",
                //     "productName": "新手礼",
                //     "proProfit": 13,
                //     "investmentCycle": 90,
                //     "minAmount": 5000,
                //     "minIncrement": 1000,
                //     "maxAmount": 50000,
                //     "repaymentWay": null,
                //     "createdBy": "青柠",
                //     "status": true,
                //     "productIntro": "只能购买一次，高回报，赶紧买",
                //     "moreInformation": null,
                //     "slogan": "新手理财，3步攻略",
                //     "advantage": "注册即可购买新手里——新手里专享13%预期年华——更多福利",
                //     "key": null,
                //     "updatedBy": null,
                //     "createdAt": 0,
                //     "updatedAt": 0
                // }
            }).then(function success (response) {
                $scope.finances = response.data.data;


            })
        };
        $scope.getFinances();


    };



});
