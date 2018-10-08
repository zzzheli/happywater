app.controller('loginCtrl',function($scope, $http, $timeout, $state){
    $scope.submit = function () {
        // $scope.post();
        $state.go('home');

    };
    // $scope.post = function () {
    //     $scope.goHome();
    // };
    // $scope.goHome = function () {
    //     $state.go('home');
    // }
});