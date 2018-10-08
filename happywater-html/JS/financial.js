app.controller("financialCtrl", function ($scope,$http,$state) {

    $scope.product = function () {

        $state.go("product.introduction");
        Now = this.$index;
        financesNow = $scope.finances[Now];

        //获取选中产品的下标，并提出

        financesNow = JSON.stringify(financesNow);
        sessionStorage.setItem("financesNow",financesNow);
    }


});


// -------------------------------financial-------------------------------------




app.controller("productCtrl", function ($scope,$http,$state) {

    var financesNow = JSON.parse(sessionStorage.getItem("financesNow"));
    console.log(financesNow);
    $scope.name = financesNow.productName;
    $scope.proProfit = financesNow.proProfit;
    $scope.investmentCycle = financesNow.investmentCycle;
    $scope.minAmount = financesNow.minAmount;
    $scope.minIncrement = financesNow.minIncrement;

    var loginForm = JSON.parse(sessionStorage.getItem("loginForm"));
 console.log(loginForm);
    $scope.buyNow = function () {
        if ( loginForm.realName == undefined){
            $state.go("https://www.baidu.com/");
        }else {
            $state.go("buyNow");
        }


    }

});



// -------------------------------product-------------------------------------





app.controller("introCtrl", function ($scope,$http,$state) {

    var financesNow = JSON.parse(sessionStorage.getItem("financesNow"));
    console.log(financesNow);
    $scope.name = financesNow.productName;
    $scope.proProfit = financesNow.proProfit;
    $scope.investmentCycle = financesNow.investmentCycle;
    $scope.minAmount = financesNow.minAmount;
    $scope.minIncrement = financesNow.minIncrement;

});



// -------------------------------product/introduction-------------------------------------




app.controller("moreCtrl", function ($scope,$http,$state) {


});



// -------------------------------product/moreInfo-------------------------------------



app.controller("recordsCtrl", function ($scope,$http,$state) {

    var financesNow = JSON.parse(sessionStorage.getItem("financesNow"));
    console.log(financesNow);
    $scope.name = financesNow.productName;
    $scope.proProfit = financesNow.proProfit;
    $scope.investmentCycle = financesNow.investmentCycle;
    $scope.minAmount = financesNow.minAmount;
    $scope.minIncrement = financesNow.minIncrement;

});



// -------------------------------product/records-------------------------------------




app.controller("buyCtrl", function ($scope,$http,$state) {

    var financesNow = JSON.parse(sessionStorage.getItem("financesNow"));
    console.log(financesNow);
    $scope.name = financesNow.productName;
    $scope.proProfit = financesNow.proProfit;
    $scope.investmentCycle = financesNow.investmentCycle;
    $scope.minAmount = financesNow.minAmount;
    $scope.minIncrement = financesNow.minIncrement;

});



// -------------------------------buyNow-------------------------------------


