app.directive('sidebar',function () {

    var arr = [];

    return{
        restrict:'E',
        transclude:true,
        templateUrl:'./JS/directives/sidebar/sidebar.html',
        controller: function($scope,$state,myService){
            myService.getModule(0)
                .then(function success(res){
                    // console.log(res);
                    // console.log(res.data.data);
                    if(res.data.code === 0){
                        $scope.homeTitle = res.data.data;
                        $scope.homeTitle.shift();
                        // console.log($scope.homeTitle);
                    }else if(res.data.code === 705){
                        alert('用户未登录')
                    }else if(res.data.code === 706){
                        alert('不具备操作其他用户的权限')
                    }

                    //一级列表点击事件
                    $scope.list = function() {
                        //数组内 select的默认状态为 false
                        if(this.x.select === false) {
                            //遍历数组，把所有select变成false
                            angular.forEach($scope.homeTitle, function(item) {
                                item.select = false;
                            });
                            //改变当前的状态
                            this.x.select = !this.x.select;
                        }else {
                            //如果点击的已经展开的一级列表，直接改变他的状态
                            this.x.select = !this.x.select;
                        }
                    };

                    //二级列表点击事件
                    $scope.sonList = function () {
                        angular.forEach($scope.homeTitle, function(item) {
                            item.modules.some(function (b) {
                                b.highlight = false;
                            })
                        });
                        this.y.highlight = true;
                        arr = $scope.homeTitle;
                        sessionStorage.setItem('arr', JSON.stringify(arr));
                        console.log(arr);
                    };

                    //如果storage保存了数组就用它代替
                    $scope.homeTitle = (JSON.parse(sessionStorage.getItem('arr')) != null) ? JSON.parse(sessionStorage.getItem('arr')) : $scope.homeTitle;
                    // console.log($scope.homeTitle);


                });

            $scope.goHome = function () {
                    sessionStorage.clear();
                    angular.forEach($scope.homeTitle, function (item) {
                        item.select = false;
                        item.modules.some(function (b) {
                            b.highlight = false;
                        })
                    })
            }


        }
    }
});