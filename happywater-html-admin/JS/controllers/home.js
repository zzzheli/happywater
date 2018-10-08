app.controller('homeCtrl',function($scope,$state,$http){

    $scope.clickuser = function(){
        $state.go('home.user')
    };
    $scope.clickrole = function(){
        $state.go('home.role')
    };
    $scope.logout = function () {
        $state.go('login');
    };


    $scope.surprise = function(){
        bootbox.alert({
            title: '年轻的user哟',
            message: '点进来你就是我的人了！ヽ(￣▽￣)و',
            size: 'small'
    })
    }
});