var app = angular.module('myApp',['ui.router','ngMessages','ui.bootstrap']);
app.config(['$stateProvider','$urlRouterProvider','$httpProvider',
    function ($stateProvider,$urlRouterProvider,$httpProvider) {
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

        $httpProvider.defaults.transformRequest = function (data) {
            if (data === undefined) {
                return data;
            }
            console.log($.param(data));
            return $.param(data);
        };

        $urlRouterProvider.when('','/login');
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login',{
                url: '/login',
                templateUrl: 'View/admin/login.html'
            })
            .state('home',{
                url: '/home',
                templateUrl: 'View/admin/home.html'
            })
            .state('home.Account',{
                url: '/Account',
                templateUrl: 'View/account/account.html'
            })
            .state('home.Banner',{
                url: '/Banner?pageNumber&serialId&bannerTitle&creator&status',
                templateUrl: 'View/banner/banner.html'
            })
            .state('home.debt',{
                url: '/debt',
                templateUrl: 'View/debt/debt.html'
            })
            .state('home.debt.newDebt',{
                url: '/newDebt',
                templateUrl: 'View/debt/newDebt.html'
            })
            .state('home.debt.matching',{
                url: '/matching?id?serialId?borrowMoney',
                templateUrl: 'View/debt/matching.html'
            })
            .state('home.debt.checkDebt',{
                url: '/checkDebt',
                templateUrl: 'View/debt/checkDebt.html'
            })
            .state('home.Module',{
                url: '/Module',
                templateUrl: 'View/module/module.html'
            })
            .state('home.news',{
                url: '/message?pageNumber',
                templateUrl: 'View/message/message.html'
            })
            .state('home.password',{
                url: '/password',
                templateUrl: 'View/password/password.html'
            })
            .state('home.product',{
                url: '/product',
                templateUrl: 'View/product/product.html'
            })
            .state('home.product.newProduct',{
                url: '/newProduct',
                templateUrl: 'View/product/newProduct.html'
            })
            .state('home.recommend',{
                url: '/recommend?pageNumber',
                templateUrl: 'View/recommend/recommend.html'
            })
            .state('home.role',{
                url: '/role',
                templateUrl: 'View/role/role.html'
            })
            .state('home.opinion',{
                url: '/opinion?pageNumber&serialId&keyWord&commitBy&phoneNumber',
                templateUrl: 'View/suggestion/suggestion.html'
            })
            .state('home.user',{
                url: '/user',
                templateUrl: 'View/user/user.html'
            })
            .state('home.user.userInform',{
                url: '/userInform?id',
                templateUrl: 'View/user/userInform.html'
            })
            .state('home.user.userInform.deal',{
                url: '/deal?id',
                templateUrl: 'View/user/deal.html'
            })
            .state('home.user.userInform.compact',{
                url: '/compact?id',
                templateUrl: 'View/user/compact.html'
            })
            .state('home.user.userInform.compact.seeCompact',{
                url: '/seeCompact?id',
                templateUrl: 'View/user/seeCompact.html'
            })
            .state('home.newBanner',{
                url:'/newBanner?id',
                templateUrl: 'View/banner/newBanner.html'
            })
            .state('home.suggestReply',{
                url:'/suggestReply?id',
                templateUrl: 'View/suggestion/suggestReply.html'
            })
            .state('home.suggestDetail',{
                url:'/suggestDetail?id',
                templateUrl: 'View/suggestion/suggestDetail.html'
            })
            .state('home.newNews',{
                url:'/newMessage',
                templateUrl: 'View/message/newMessage.html'
            })
            .state('home.newsDetail',{
                url:'/messageDetail?id',
                templateUrl: 'View/message/messageDetail.html'
            })
            .state('home.newRecommend',{
                url:'/newRecommend?id',
                templateUrl: 'View/recommend/newRecommend.html'
            })
            .state('home.newAccount',{
                url:'/newAccount',
                templateUrl: 'View/account/newAccount.html'
            })
            .state('home.newModule',{
                url:'/newModule',
                templateUrl: 'View/module/newModule.html'
            });

    }]);
app.run(['$rootScope',function($rootScope){
    //bootbox封装
    $rootScope.modalConfirm = function (titles, content, fn) {
        bootbox.confirm({
            title: titles,
            message: content,
            buttons: {
                cancel: {
                    label: '取消',
                    className: 'btn-success'
                },
                confirm: {
                    label: '确认',
                    className: 'btn-danger'
                }
            },
            size: 'small',
            callback: fn
        })
    };
    $rootScope.modalAlert = function (titles, content, fn) {
        bootbox.alert({
            title: titles,
            message: content,
            size: 'small',
            callback: fn
        })
    }
}]);




