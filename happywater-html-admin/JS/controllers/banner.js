app.controller('bannerCtrl', function ($scope, $state, $stateParams, myService, bannerFactory) {
    $scope.bannerDetail = {};

    //请求表格数据
    $scope.getSearch = function(){
        $scope.params = {};
        $scope.params.pageNumber = 1;
        // console.log($scope.params);
        myService.getBanner($scope.params)
            .then(function(res){
                // console.log(res.data.data);
                $scope.bannerList = res.data.data;
            });
    };
    $scope.getSearch();

    //条件筛选
    $scope.search = function(){
        // (URL方法)
        // $state.go('home.Banner',{
        //     pageNumber: $scope.pageNumber,
        //     serialId: $scope.bannerId,
        //     bannerTitle: $scope.bannerTitle,
        //     creator: $scope.creator,
        //     status: $scope.status
        // },{reload:false});

        // 请求方法
        $scope.params = {
            bannerId: $scope.bannerId,
            bannerTitle: $scope.bannerTitle,
            creator: $scope.creator,
            status: $scope.status
        };
        // console.log($scope.params);
        myService.searchBanner($scope.params)
            .then(function (res) {
                // console.log(res);
                $scope.bannerList = res.data.data;
            })
    };

    // 清空搜索
    $scope.reset = function(){
        $scope.bannerId = undefined;
        $scope.bannerTitle = undefined;
        $scope.creator = undefined;
        $scope.status = undefined;
        // $scope.search();

        // 或者？
        $scope.getSearch();
    };


    //进入编辑页面
    $scope.editBanner = function(x){
        // console.log(this.x.id);
        console.log(this.x);
        $scope.bannerDetail = this.x;
        bannerFactory.setter($scope.bannerDetail);
        $state.go('home.newBanner',{
            id: this.x.id
        },{reload:true});
    };

    //进入新增页面
    $scope.newBanner = function(){
        $state.go('home.newBanner')
    };

    //Banner上下线(接口有误）
    $scope.lineBanner = function(){
        console.log(this.x);
        $scope.bannerId = this.x.id;
        $scope.bannerLine = this.x.status;
        if($scope.bannerLine === false){
            $scope.tip1 =
                `<p>您确认要上架当前banner图吗？上架后当前banner图将在前台可见，并可点击查看。</p>`;
            $scope.tip2 =
                `<p>上架成功。</p>`;
        }else{
            $scope.tip1 =
                `<p>您确认要下架当前banner图吗？下架后当前banner图将在前台不可见，并不可点击查看。</p>`;
            $scope.tip2 =
                `<p>下架成功。</p>`;
        }
        $scope.operatTip = $scope.bannerLine === true ? '下架' : '上架' ;
        $scope.modalConfirm($scope.operatTip, $scope.tip1, function (result) {
            if (result === true) {
                $scope.params = {
                    status: ($scope. bannerLine === true) ? 'false' : 'true'
                };
                myService.putBanner($scope.bannerId, $scope.params,{
                    header: {'Content-Type': 'text/html'}
                })
                    .then(function (res) {
                        console.log($scope.params);
                        if (res.data.code === 0) {
                            $state.reload('home.Banner');
                            $scope.modalAlert($scope.operatTip, $scope.tip2);
                        }else {
                            $scope.modalAlert($scope.operatTip,'操作异常');
                        }
                    },function () {
                        $scope.modalAlert($scope.operatTip,'提交失败');
                    });
            }
        });

    };
    //删除
    $scope.deleteBanner = function(){
        $scope.bannerId = this.x.id;
        $scope.deleteTip = `<p>您确认要删除吗？删除后当前banner图将永久消失。</p>`;
        $scope.modalConfirm('删除',$scope.deleteTip,function (result) {
            if (result === true) {
                myService.deleteBanner($scope.bannerId)
                    .then(function (res) {
                        console.log(res);
                        if (res.data.code === 0) {
                            $state.reload('home.Banner');
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









    //状态：ng-repeat
    $scope.reStatus = [
        {value: '', name: '全部'},
        {value: 'true', name: '上架'},
        {value: 'false', name: '下架'}
    ]
});

//Banner新增/编辑
app.controller('newBannerCtrl',function ($scope, $state, $stateParams, bannerFactory, myService) {
    // console.log($stateParams.id);
    // console.log($stateParams);
    //进入新增/编辑页
    if($stateParams.id){
        $scope.pageTitle = '编辑Banner';
        $scope.detail = bannerFactory.getter();
        console.log($scope.detail);
        $scope.bannerTitle = $scope.detail.title;
        $scope.intervalTime = $scope.detail.intervalTime;
        $scope.bannerURL = 'www.cocacola';
        $scope.bannerImg = $scope.detail.key;
    }else{
        $scope.pageTitle = '新增Banner';
    }
    //保存
    $scope.saveBanner = function () {
        $scope.params = {
            bannerTitle: $scope.bannerTitle,
            bannerURL: $scope.bannerURL,
            intervalTime: $scope.intervalTime
        };

        if ($stateParams.id) {
            myService.editBanner($stateParams.id,$scope.params)
                .then(function (res) {
                    console.log(res);
                    if (res.data.code === 0){
                        $scope.modalAlert('操作成功','保存成功',window.history.go(-1));
                    }else {
                        $scope.modalAlert('操作失败','保存异常');
                    }
                },function () {
                    $scope.modalAlert('操作失败','保存失败');
                })
        }else {
            myService.addBanner($scope.params)
                .then(function (res) {
                    console.log(res);
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

app.factory('bannerFactory', function(){

    var bannerObject = {};
    var _setter = function(data){
        bannerObject = data;
    };
    var _getter = function(){
        return bannerObject;
    };
    return{
        setter: _setter,
        getter: _getter
    }

});


//状态转换
app.filter('status', function() {
    return function(status) {
        switch (status) {
            case false :
                return '下线';
                break;
            case true :
                return '上线';
                break;
        }
    }
});

//上架 下架
app.filter('line', function() {
    return function(status) {
        switch (status) {
            case false :
                return '上线';
                break;
            case true :
                return '下线';
                break;
        }
    }
});