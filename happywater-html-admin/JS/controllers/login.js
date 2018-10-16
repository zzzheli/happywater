app.controller('loginCtrl',function($scope, $http, $timeout, $state, myService,adminFactory){
    $(function () {

        $.ajax({
            type: 'POST', // 获取头信息，type=HEAD即可
            url : '/happywater-admin-ajax/manager/login',
            //url:"http://device.qq.com/cgi-bin/device_cgi/remote_bind_get_Verify",
            data:{
                account: 'admin',
                password: '123456'
            },
            complete: function( xhr,data ){
                console.log(xhr);
                // 获取相关Http Response header
                var wpoInfo = {
                    // 服务器端时间
                    "date" : xhr.getResponseHeader('Date'),
                    // 如果开启了gzip，会返回这个东西
                    "contentEncoding" : xhr.getResponseHeader('Content-Encoding'),
                    // keep-alive ？ close？
                    "connection" : xhr.getResponseHeader('Connection'),
                    // 响应长度
                    "contentLength" : xhr.getResponseHeader('content-length'),
                    // 服务器类型，apache？lighttpd？
                    "server" : xhr.getResponseHeader('Server'),
                    "vary" : xhr.getResponseHeader('Vary'),
                    "transferEncoding" : xhr.getResponseHeader('Transfer-Encoding'),
                    // text/html ? text/xml?
                    "contentType" : xhr.getResponseHeader('Content-Type'),
                    "cacheControl" : xhr.getResponseHeader('Cache-Control'),
                    // 生命周期？
                    "exprires" : xhr.getResponseHeader('Exprires'),
                    "lastModified" : xhr.getResponseHeader('Last-Modified'),
                    "JWT" : xhr.getResponseHeader('JWT')
                };
                console.log(xhr.getAllResponseHeaders());
            }
        });

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
                    console.log(response);
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
    })


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