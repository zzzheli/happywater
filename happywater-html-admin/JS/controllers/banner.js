app.controller('bannerCtrl',function ($scope, $state, $stateParams, myService) {


    //请求表格数据
    $scope.getSearch = function(){
        $scope.params = {};
        $scope.params.pageNumber = 1;

        myService.getBanner($scope.params)
            .then(function(res){
                console.log(res.data.data);
                $scope.bannerList = res.data.data;
            });
    };
    $scope.getSearch();

    //条件筛选
    $scope.search = function(){
        $state.go('home.Banner',{
            pageNumber: $scope.pageNumber,
            serialId: $scope.bannerId,
            bannerTitle: $scope.bannerTitle,
            creator: $scope.creator,
            status: $scope.status
        },{reload:false});
    };





    //状态：ng-repeat
    $scope.reStatus = [
        {value: '', name: '全部'},
        {value: 'true', name: '上架'},
        {value: 'false', name: '下架'}
    ]
});

//Banner新增/编辑
app.controller('newBannerCtrl',function ($scope, $state) {

});