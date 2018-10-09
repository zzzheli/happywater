var app = angular.module('myApp',['ui.router','ngMessages','ui.bootstrap']);
app.config(['$stateProvider','$urlRouterProvider',
    function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.when('','/login');
        $stateProvider
            .state('login',{
                url: '/login',
                templateUrl: 'View/admin/login.html'
            })
            .state('home',{
                url: '/home',
                templateUrl: 'View/admin/home.html'
            })
            .state('home.account',{
                url: '/account',
                templateUrl: 'View/account/account.html'
            })
            .state('home.banner',{
                url: '/banner',
                templateUrl: 'View/banner/banner.html'
            })
            .state('home.claim',{
                url: '/claim',
                templateUrl: 'View/claim/claim.html'
            })
            .state('home.module',{
                url: '/module',
                templateUrl: 'View/module/module.html'
            })
            .state('home.news',{
                url: '/news',
                templateUrl: 'View/news/news.html'
            })
            .state('home.password',{
                url: '/password',
                templateUrl: 'View/password/password.html'
            })
            .state('home.product',{
                url: '/product',
                templateUrl: 'View/product/product.html'
            })
            .state('home.recommend',{
                url: '/recommend',
                templateUrl: 'View/recommend/recommend.html'
            })
            .state('home.role',{
                url: '/role',
                templateUrl: 'View/role/role.html'
            })
            .state('home.suggestion',{
                url: '/suggestion',
                templateUrl: 'View/suggestion/suggestion.html'
            })
            .state('home.user',{
                url: '/user',
                templateUrl: 'View/user/user.html'
            })
            .state('home.user.seeUser',{
                url: '/seeUser',
                templateUrl: 'View/user/seeUser.html'
            })
            .state('home.newBanner',{
                url:'/newBanner',
                templateUrl: 'View/banner/newBanner.html'
            })
            .state('home.suggestReply',{
                url:'/suggestReply',
                templateUrl: 'View/suggestion/suggestReply.html'
            })
            .state('home.suggestDetail',{
                url:'/suggestDetail',
                templateUrl: 'View/suggestion/suggestDetail.html'
            })
            .state('home.newNews',{
                url:'/newNews',
                templateUrl: 'View/news/newNews.html'
            })
            .state('home.newsDetail',{
                url:'/newsDetail',
                templateUrl: 'View/news/newsDetail.html'
            })
            .state('home.newRecommend',{
                url:'/newRecommend',
                templateUrl: 'View/recommend/newRecommend.html'
            })
            .state('home.newAccount',{
                url:'/newAccount',
                templateUrl: 'View/account/newAccount.html'
            })
            .state('home.newModule',{
                url:'/newModule',
                templateUrl: 'View/module/newModule.html'
            })

    }]);




