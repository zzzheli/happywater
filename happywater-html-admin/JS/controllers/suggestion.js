app.controller('suggestCtrl',function ($scope, $state, $stateParams, myService, opinionFactory) {

    $(function () {
        //请求意见列表
        $scope.getSuggestion = function () {
            $scope.params = {
                pageNumber: 1
            };
            myService.getSuggestions($scope.params)
                .then(function (res) {
                    // console.log(res.data.data,typeof(res.data.data));
                    //将数组中的字符串转成对象，再组成数组
                    $scope.opinionList = [];
                    res.data.data.forEach(function (item) {
                        item = JSON.parse(item);
                        item.disabled = item.replyBy == undefined ? 'false' : 'true';
                        $scope.opinionList.push(item);
                    });
                    console.log($scope.opinionList);
                })
        };
        $scope.getSuggestion();

        //意见查询
        $scope.search = function(){
          $scope.params = {
              serialId: $scope.serialId,
              keyWord: $scope.keyWord,
              commitBy: $scope.commitBy,
              phoneNumber: $scope.phoneNumber
          };
          myService.searchSuggestion($scope.params)
              .then(function (res) {
                  // console.log(res);
                  if (res.data.code === 0) {
                      $scope.opinionList = [];
                      res.data.data.forEach(function (item) {
                          // console.log(item,typeof(item));
                          item = JSON.parse(item);
                          item.disabled = item.replyBy == undefined ? 'false' : 'true';
                          // console.log(item,typeof(item));
                          $scope.opinionList.push(item);
                      });
                  }
              })
        };

        //查看意见
        $scope.view = function () {
            // console.log(this.x.id);
            $state.go('home.suggestDetail',{
                id: 1
            },{reload:true});

        };

        //回复意见
        $scope.reply = function () {
            $scope.opinion = this.x;
            console.log($scope.opinion);
            opinionFactory.setter($scope.opinion);
            $state.go('home.suggestReply',{
                id: 1
            },{reload:true})
        };

        //删除意见
        $scope.delete = function(){
            $scope.suggestionId = 1;
            $scope.deleteTip = `<p>您确认要删除吗？删除后当前意见将永久消失。</p>`;
            $scope.modalConfirm('删除',$scope.deleteTip,function (result) {
                if (result === true) {
                    myService.deleteSuggestion($scope.suggestionId)
                        .then(function (res) {
                            // console.log(res);
                            if (res.data.code === 0) {
                                $state.reload('home.opinion');
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


    })

});

app.controller('suggestReplyCtrl',function ($scope, $state, $stateParams, myService, opinionFactory) {
    // 回复意见
    $scope.opinion = opinionFactory.getter();
    $scope.commitBy = $scope.opinion.commitBy;
    $scope.commitAt = $scope.opinion.commitAt;
    $scope.content = $scope.opinion.content;
    $scope.reply =function(){
        $scope.params = {
            suggestionId: $stateParams.id,
            replyContent: $scope.replyContent
        };
        myService.replySuggestion($stateParams.id,$scope.params)
            .then(function (res) {
                console.log(res);
                if (res.data.code === 0){
                    $scope.modalAlert('操作成功','回复成功',window.history.go(-1));
                }else {
                    $scope.modalAlert('操作失败','回复异常');
                }
            },function () {
                $scope.modalAlert('操作失败','回复失败');
            })
    };



});

app.controller('suggestDetailCtrl',function ($scope, $state, $stateParams, myService) {
    //查看意见
    // console.log($stateParams.id);
    $scope.params = {
        id: $stateParams.id
    };
    myService.viewSuggestion($scope.params.id)
        .then(function(res){
            // console.log(res.data);
            if (res.data.code === 0) {
                $scope.reply = JSON.parse(res.data.data[0]);
                $scope.content = $scope.reply.content;
                $scope.commitBy = $scope.reply.commitBy;
                $scope.commitAt = $scope.reply.commitAt;
                $scope.replyBy = $scope.reply.replyBy;
                $scope.replyAt = $scope.reply.replyAt;
                $scope.replyContent = $scope.reply.replyContent;
            }

        })


});

app.factory('opinionFactory', function(){

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
