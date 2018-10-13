app.controller('homeCtrl',function($scope,$state,$http,myService,adminFactory){

    $(function(){

        $scope.admin = adminFactory.getter();
        // console.log($scope.admin);
        $scope.roleName = $scope.admin.roleName;
        $scope.userId = $scope.admin.id;

        // if ($scope.userId == undefined) {
        //     $scope.modalAlert('Error','登录状态异常，请重新登录。',function () {
        //         $state.go('login');
        //     })
        // }

        $scope.clickuser = function(){
            $state.go('home.user')
        };
        $scope.clickrole = function(){
            $state.go('home.role')
        };
        $scope.logout = function () {
            // myService.logout($scope.userId)
            //     .then(function (res) {
            //         // console.log(res);
            //         if (res.data.code === 0) {
                        $state.go('login')
                    // }
                // })
        };


        $scope.surprise = function(){
            bootbox.alert({
                title: '年轻的user哟',
                message: '点进来你就是我的人了！ヽ(￣▽￣)و',
                size: 'small'
            })
        };



    })


});