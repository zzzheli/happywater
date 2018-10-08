app.directive('sidebar',function () {
    var arr = [];

    return{
        restrict:'E',
        transclude:true,
        templateUrl:'./JS/directives/sidebar/sidebar.html',
        link:function (scope, element, attrs) {
            //侧边栏列表
            scope.homeTitle = [
                {
                    lv: 0, name: '业务管理', select: false,
                    title: [
                        {name:'用户管理', url: 'home.user', highlight: false},
                        {name:'债权管理', url: 'home.claim', highlight: false},
                        {name:'产品管理', url: 'home.product', highlight: false}
                    ]
                },
                {
                    lv: 1, name: '运营管理', select: false,
                    title: [
                        {name:'Banner图', url: 'home.banner', highlight: false },
                        {name:'鼎力推荐', url: 'home.recommend', highlight: false},
                        {name:'消息管理', url: 'home.news', highlight: false},
                        {name:'意见回复', url: 'home.suggestion', highlight: false}
                    ]
                },
                {
                    lv: 2, name: '后台管理', select: false,
                    title: [
                        {name:'密码管理', url: 'home.password', highlight: false},
                        {name:'账户管理', url: 'home.account', highlight: false},
                        {name:'模块管理', url: 'home.module', highlight: false},
                        {name:'角色管理', url: 'home.role', highlight: false}
                    ]
                }
            ];
            //一级列表点击事件
            scope.list = function() {
                //数组内 select的默认状态为 false
                if(this.x.select === false) {
                    //遍历数组，把所有select变成false
                    angular.forEach(scope.homeTitle, function(item) {
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
            scope.sonList = function () {
                angular.forEach(scope.homeTitle, function(item) {
                    item.title.some(function (b) {
                        b.highlight = false;
                    })
                });
                this.y.highlight = true;
                arr = scope.homeTitle;
                sessionStorage.setItem('arr', JSON.stringify(arr));
            };
            //如果storage保存了数组就用它代替
            scope.homeTitle = (JSON.parse(sessionStorage.getItem('arr')) != null)? JSON.parse(sessionStorage.getItem('arr')) : scope.homeTitle;


            $('.home-page').click(
                function () {
                    sessionStorage.clear();
                    angular.forEach(scope.homeTitle,function (item) {
                        item.select = false;
                        item.title.some(function (b) {
                            b.highlight = false;
                        })
                    })
                }
            );

        }
    }
});