app.controller('homeCtrl',function($scope,$state,$http){

    $(function(){

        $scope.$on('$viewContentLoaded',function(){
            console.log('主页加载完毕……')
            $http({
                method:'GET',
                url:'/happywater-admin-ajax/manager/modules/0'
            }).then(function success (res) {
                console.log(res.data.data);
            })
        });


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
    })


});