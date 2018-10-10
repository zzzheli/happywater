
// var maxtime ;
//
// if(window.name == '' || window.name == '-1' || isNaN(window.name)) {
//     maxtime = 1 * 60;
// } else {
//     maxtime = window.name;
// }
//
// function settime(val) {
//
//
//
//     if(maxtime == 0) {
//
//         val.removeAttribute("disabled");
//
//         val.value = "获取验证码";
//         maxtime = 60;
//
//         return clearTimeout(val);
//
//
//     } else {
//
//         val.setAttribute("disabled", true);
//
//         val.value = "重新发送(" + maxtime + ")";
//
//         maxtime--;
//
//         window.name = maxtime - 1;
//
//     }
//
//     setTimeout(function() {
//         settime(val)
//     }, 1000)
//
// }




app.controller("loginCtrl", function ($scope,$http,$state) {
    $scope.logBtn = function () {
        $http({
            method:"POST",
            url:"/happywater-ajax/user/login/account",
            params: {
                phoneNumber : $scope.phoneNumber,
                password: $scope.passWord
            }
        }).then(function success (response) {
            console.log(response);
            if (response.data.code == 0){

                $scope.loginForm = response.data.data;
                loginForm = $scope.loginForm;
                loginForm = JSON.stringify(loginForm);
                sessionStorage.setItem("loginForm",loginForm);

                $state.go("homePage",{});
            }else {
                $scope.warn = response.data.message;
            }
        })
    };
    $scope.registe = function () {
        $state.go("registe",{});
    };
    $scope.forget = function () {
        $state.go("forget",{});
    };
});



// -------------------------------login-------------------------------------




app.controller("registeCtrl", function ($scope,$http,$state) {
    $(function(){$scope.hide = false;});

    $scope.getCode = function () {
        $http({
            method:"GET",
            url:"/happywater-ajax/user/register/msgcode",
            params: {
                phoneNumber : $scope.phoneNumber
            }
        }).then( function success (response) {
            if (response.data.code == 0){

                var time = 60;
                var get1 = document.getElementById('get1');
                get1.setAttribute("disabled", "true");

                var timer = setInterval(function () {
                    get1.value = ('重新发送'+(time) + 'S');
                    if (time == 1) {
                        clearInterval(timer);
                        time = 60;
                        get1.value = "获取验证码";
                        get1.removeAttribute("disabled");
                    }
                    time--;
                }, 1000);

            }else {
                $scope.warn = response.data.message;
            }

        })
    };

    $scope.regBtn = function () {
        $http({
            method:"POST",
            url:"/happywater-ajax/user/register/msgcode",
            params: {
                // phoneNumber : $scope.phoneNumber,(等部署)
                msgCode: $scope.msgCode
            }
        }).then( function success (response) {
            if (response.data.code == 0){
                $scope.hide = true;
                $state.go("registe.registeSet");
            }else {
                $scope.warn = response.data.message;
            }

        })
    };



});



// -------------------------------registe-------------------------------------




app.controller("regSetCtrl", function ($scope,$http,$state,$timeout) {

    $(function(){$scope.hide = true;});

    $scope.regSetBtn = function () {
        $http({
            method:"POST",
            url:"/happywater-ajax/user/register/password",
            params: {
                phoneNumber : $scope.phoneNumber,
                firstPassword: $scope.firstPassword,
                secondPassword: $scope.secondPassword

            }
        }).then( function success (response) {
            if (response.data.code == 0){

                $http({
                    method:"POST",
                    url:"/happywater-ajax/user/login/account",
                    params: {
                        phoneNumber : $scope.phoneNumber,
                        password: $scope.secondPassword
                    }
                }).then(function success (response) {
                    console.log(response);
                    if (response.data.code == 0){

                        $scope.loginForm = response.data.data;
                        loginForm = $scope.loginForm;
                        loginForm = JSON.stringify(loginForm);
                        sessionStorage.setItem("loginForm",loginForm);

                        $scope.show = true;
                        $timeout(function() {

                            $state.go("homePage");
                        }, 3000)



                    }else {
                        $scope.warn = response.data.message;
                    }
                });



            }else {
                $scope.warn = response.data.message;
            }

        })
    }


});



// -------------------------------registeSet-------------------------------------



app.controller("forgetCtrl", function ($scope,$http,$state) {
    $(function(){$scope.hide = false;});

    $scope.getCode = function () {
        $http({
            method:"GET",
            url:"/happywater-ajax/user/reset/msgcode",
            params: {
                phoneNumber : $scope.phoneNumber
            }
        }).then( function success (response) {
            if (response.data.code == 0){

                var time = 60;
                var get2 = document.getElementById('get2');
                get2.setAttribute("disabled", "true");

                var timer = setInterval(function () {
                    get2.value = ('重新发送'+(time) + 'S');
                    if (time == 1) {
                        clearInterval(timer);
                        time = 60;
                        get2.value = "获取验证码";
                        get2.removeAttribute("disabled");
                    }
                    time--;
                }, 1000);

            }else {
                $scope.warn = response.data.message;
            }

        })
    };

    $scope.forBtn = function () {
        $http({
            method:"POST",
            url:"/happywater-ajax/user/reset/msgcode",
            params: {
                // phoneNumber : $scope.phoneNumber,(等部署)
                msgCode: $scope.msgCode
            }
        }).then( function success (response) {
            if (response.data.code == 0){
                $scope.hide = true;
                $state.go("forget.forgetSet");
            }else {
                $scope.warn = response.data.message;
            }

        })
    };



});


// -------------------------------forget-------------------------------------



app.controller("forSetCtrl", function ($scope,$http,$state,$timeout) {

    $(function(){$scope.hide = true;});

    $scope.forSetBtn = function () {
        $http({
            method:"POST",
            url:"/happywater-ajax/user/reset/password",
            params: {
                phoneNumber : $scope.phoneNumber,
                firstPassword: $scope.firstPassword,
                secondPassword: $scope.secondPassword

            }
        }).then( function success (response) {
            if (response.data.code == 0){

                $scope.show = true;
                $timeout(function() {
                    $state.go("login");
                }, 3000)

            }else {
                $scope.warn = response.data.message;
            }

        })
    }


});





// -------------------------------forgetSet-------------------------------------

