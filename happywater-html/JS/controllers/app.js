var app = angular.module("myApp",['ui.router']);

app.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when('','/nav');

    $stateProvider
        .state("nav",{
            url:"/nav",
            templateUrl:"View/nav.html"
        })

        .state("login",{
            url:"/login",
            templateUrl:"View/login.html"
        })
        .state("registe",{
            url:"/registe",
            templateUrl:"View/registe.html"
        })
        .state("registe.registeSet",{
            url:"/registeSet",
            templateUrl:"View/registeSet.html"
        })
        .state("forget",{
            url:"/forget",
            templateUrl:"View/forget.html"
        })
        .state("forget.forgetSet",{
            url:"/forgetSet",
            templateUrl:"View/forgetSet.html"
        })
        .state("nav.financial",{
            url:"/financial",
            templateUrl:"View/financial.html"
        })
        .state("nav.home",{
            url:"/home",
            templateUrl:"View/home/home.html"
        })
        .state("product",{
            url:"/product",
            templateUrl:"View/product.html"
        })
        .state("product.introduction",{
            url:"/introduction",
            templateUrl:"View/product/introduction.html"
        })
        .state("product.moreInfo",{
            url:"/moreInfo",
            templateUrl:"View/product/moreInfo.html"
        })
        .state("product.records",{
            url:"/records",
            templateUrl:"View/product/records.html"
        })
        .state("buyNow",{
            url:"/buyNow",
            templateUrl:"View/buyNow.html"
        })








});


