app.controller('recommendCtrl',function ($scope, $state, myService, $stateParams, rmdFactory) {
    $(function () {
        //获取列表
        $scope.getRecommend = function () {
            $scope.params = {
                pageNumber: 1
            };
            myService.getRecommendations($scope.params)
                .then(function (res) {
                    console.log(res.data);
                    $scope.recommendationsList = res.data.data;
                })
        };
        $scope.getRecommend();

        //查询推荐
        $scope.search = function () {

            $scope.params = {
                bannerId: $scope.bannerId,
                productTitle: $scope.productTitle,
                createdBy: $scope.createdBy,
                updatedBy: $scope.updatedBy
            };
            myService.searchRecommendation($scope.params)
                .then(function (res) {
                    console.log(res.data);
                    if (res.data.code === 0) {
                        $scope.recommendationsList = res.data.data;
                    }
                },function () {
                    $scope.modalAlert('Error','请填写ID后进行查询');
                })
        };
        //清空查询
        $scope.clear = function () {
            $scope.getRecommend();
        };

        //进入编辑页
        $scope.edit = function () {
            console.log(this.x);
            $scope.rmdDetail = this.x;
            rmdFactory.setter($scope.rmdDetail);
            $state.go('home.newRecommend',{
                id: this.x.id
            },{reload:true});
        };


        //删除
        $scope.delete = function () {
            $scope.rmdId = this.x.id;
            $scope.deleteTip = `<p align="center">您确认要删除吗？删除后当前图片将永久消失。</p>`;
            $scope.modalConfirm('删除',$scope.deleteTip,function (result) {
                if (result === true) {
                    myService.deleteRecommendation($scope.rmdId)
                        .then(function (res) {
                            // console.log(res);
                            if (res.data.code === 0) {
                                $state.reload('home.recommend');
                                $scope.modalAlert('删除','删除成功');
                            }else {
                                $scope.modalAlert('删除','操作异常')
                            }
                        },function () {
                            $scope.modalAlert('删除','删除失败')
                        })
                }
            });
        };

        //上下线
        $scope.line = function () {
            $scope.rmdId = this.x.id;
            $scope.rmdLine = this.x.status;
            if($scope.rmdLine === false){
                $scope.tip1 =
                    `<p align="center">您确认要上架当前图片吗？上架后当前图片将在前台可见，并可点击查看。</p>`;
                $scope.tip2 =
                    `<p align="center">上架成功。</p>`;
            }else{
                $scope.tip1 =
                    `<p align="center">您确认要下架当前图片吗？下架后当前图片将在前台不可见，并不可点击查看。</p>`;
                $scope.tip2 =
                    `<p align="center">下架成功。</p>`;
            }
            $scope.lineTip = $scope.rmdLine === true ? '下架' : '上架' ;
            $scope.modalConfirm($scope.operatTip, $scope.tip1, function (result) {
                if (result === true) {
                    $scope.params = {
                        status: ($scope. rmdLine === true) ? 'false' : 'true'
                    };
                    myService.putRecommendation($scope.rmdId, $scope.params)
                        .then(function (res) {
                            // console.log($scope.params);
                            if (res.data.code === 0) {
                                $state.reload('home.Banner');
                                $scope.modalAlert($scope.lineTip, $scope.tip2);
                            }else {
                                $scope.modalAlert($scope.lineTip,'操作异常');
                            }
                        },function () {
                            $scope.modalAlert($scope.lineTip,'提交失败');
                        });
                }
            });
        };


    })
});

app.controller('newRecommendCtrl',function ($scope, $state, $stateParams, rmdFactory, myService) {
    //进入新增/编辑页
    if($stateParams.id){
        $scope.pageTitle = '推荐编辑';
        $scope.detail = rmdFactory.getter();
        console.log($scope.detail);
        $scope.recommendationTitle = $scope.detail.productName;
        $scope.recommendationURL = $scope.detail.createdBy;
    }else{
        $scope.pageTitle = '推荐新增';
    }

    //保存
    $scope.save = function () {
        $scope.params = {
            recommendationTitle: $scope.recommendationTitle,
            recommendationURL: $scope.recommendationURL
        };

        if ($stateParams.id) {
            myService.editRecommendation($stateParams.id,$scope.params)
                .then(function (res) {
                    console.log(res.data);
                    if (res.data.code === 0){
                        $scope.modalAlert('操作成功','保存成功',window.history.go(-1));
                    }else {
                        $scope.modalAlert('操作失败','保存异常');
                    }
                },function () {
                    $scope.modalAlert('操作失败','保存失败');
                })
        }else {
            myService.addRecommendation($scope.params)
                .then(function (res) {
                    console.log(res.data);
                    if (res.data.code === 0){
                        $scope.modalAlert('操作成功','保存成功',window.history.go(-1));
                    }else {
                        $scope.modalAlert('操作失败','保存异常');
                    }
                },function () {
                    $scope.modalAlert('操作失败','保存失败');
                })
        }
    }

});

app.factory('rmdFactory', function(){

    var object = {};
    var _setter = function(data){
        object = data;
    };
    var _getter = function(){
        return object;
    };
    return{
        setter: _setter,
        getter: _getter
    }

});