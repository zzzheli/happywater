
app.controller("forgetCtrl", function ($scope,$http,$state) {


});
var maxtime ;

if(window.name == '' || window.name == '-1' || isNaN(window.name)) {

    maxtime = 1 * 60;

} else {

    maxtime = window.name;

}



function settime(val) {
    // console.log(window.name,maxtime);
    if(maxtime == 0) {

        val.removeAttribute("disabled");

        val.value = "获取验证码";
        maxtime = 60;

        return clearTimeout(val);


    } else {

        val.setAttribute("disabled", true);

        val.value = "重新发送(" + maxtime + ")";

        maxtime--;

        window.name = maxtime - 1;

    }


    setTimeout(function() {

        settime(val)

    }, 1000)

}