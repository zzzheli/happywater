app.controller('loginCtrl',function($scope, $http, $timeout, $state, myService,adminFactory){
    $scope.submit = function () {
        $scope.params = {
                account:$scope.user.name,
                password:$scope.user.pwd
            };
            // console.log($scope.params);
            // $http({
            //     method:'post',
            //     url:'/happywater-admin-ajax/manager/login',
            //     params:$scope.params
            // })
            myService.login($scope.params)
                .then(function successCallback(response){
                    // console.log(response.headers().jwt);
                    if (response.data.code === 701) {
                        $scope.message = '用户名不存在';
                        $timeout(function () {
                            $scope.message = '';
                        },2000);
                    } else if(response.data.code === 702) {
                        $scope.message = '密码错误';
                        $timeout(function () {
                            $scope.message = '';
                        },2000);
                    }else if (response.data.code === 0) {
                        // console.log(response.data.data);
                        $scope.admin = response.data.data.roles[0];
                        console.log($scope.admin);
                        adminFactory.setter($scope.admin);
                        $scope.message = '登录成功';
                        $timeout(function () {
                            console.log('登陆成功……');
                            $scope.goHome();
                        }, 500);
                    }
                })
        };
        //$state.go跳转页面
        $scope.goHome = function(){
            $state.go('home');
        };
        sessionStorage.clear();
    


});
app.factory('adminFactory', function(){

    var adminObject = {};
    var _setter = function(data){
        adminObject = data;
    };
    var _getter = function(){
        return adminObject;
    };
    return{
        setter: _setter,
        getter: _getter
    }

});