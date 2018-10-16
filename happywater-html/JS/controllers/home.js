app.controller('homeDetailCtrl',function ($scope, $state, $http) {
    $scope.bannerList = [
        {'id':1, 'title':'我是第一个banner图！', 'description':'富强、民主、文明、和谐、富强、民主、文明、和谐、富强、民主、文明、和谐、富强、民主、文明、和谐', 'createdBy':'HHHhxr'},
        {'id':1, 'title':'我是第二个banner图！', 'description':'富强、民主、文明、和谐、富强、民主、文明、和谐、富强、民主、文明、和谐、富强、民主、文明、和谐', 'createdBy':'PPPppy'},
        {'id':1, 'title':'我是第三个banner图！', 'description':'富强、民主、文明、和谐、富强、民主、文明、和谐、富强、民主、文明、和谐、富强、民主、文明、和谐', 'createdBy':'BBBbbb'},
        {'id':1, 'title':'我是第四个banner图！', 'description':'富强、民主、文明、和谐、富强、民主、文明、和谐、富强、民主、文明、和谐、富强、民主、文明、和谐', 'createdBy':'GGGgal'},
        {'id':1, 'title':'我是第五个banner图！', 'description':'富强、民主、文明、和谐、富强、民主、文明、和谐、富强、民主、文明、和谐、富强、民主、文明、和谐', 'createdBy':'Ccccy'}
    ];

    setTimeout(function () {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,     //无限循环
            centeredSlides:true,
            autoplay:{      //自动轮播
                delay: 2000,
                disableOnInteraction:false
            },
            pagination: {   //焦点跟随
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {       //上一页下一页
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    },50);


    $http({
        method: 'GET',
        url:'/happywater-ajax/user/home/banner/1'
    }).then(function success (res){
        console.log('banner图',res);
    });

    $http({
        method: 'GET',
        url:'/happywater-ajax/user/home/recommendation/1'
    }).then(function (res) {
        console.log('鼎力推荐',res);
    })
});