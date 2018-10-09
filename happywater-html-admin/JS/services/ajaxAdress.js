angular.module('myApp')
    .factory('path',function(){
        return{

            // 登录
            login: '/happywater-admin-ajax/manager/login',

            // 注销
            logout: function(id){
                return '/happywater-admin-ajax/manager/logout' + id
            },
            //获取模块（侧边栏）
            getModule: function(id){
                return '/happywater-admin-ajax/manager/modules/' + id
            },


            // 后台管理
            // 新增账户
            postAccount: function(){
                return '/happywater-admin-ajax/manager/background/account'
            },
            // 编辑/删除账户
            modifyAccount: function(id){
                return '/happywater-admin-ajax/manager/background/account/' + id
            },
            //获取所有账户
            getAccounts: function(){
                return '/happywater-admin-ajax/manager/background/accounts'
            },
            //查询账户
            searchAccount: function(){
                return '/happywater-admin-ajax/manager/background/accounts/search'
            },
            //增删改模块
            modifyModule: function(id){
                return '/happywater-admin-ajax/manager/background/module/' + id
            },
            //获取所有模块
            getModules: function(){
                return '/happywater-admin-ajax/manager/background/modules'
            },
            //查询模块
            searchModule: function () {
                return '/happywater-admin-ajax/manager/background/modules/search'
            },
            //更换密码
            changePassword: function (id) {
                return '/happywater-admin-ajax/manager/background/password/' + id
            },
            //获取、添加角色
            getRole: function () {
                return '/happywater-admin-ajax/manager/background/role'
            },
            //编辑、修改角色
            modifyRole: function (id) {
                return '/happywater-admin-ajax/manager/background/role/' + id
            },
            //获取所有角色
            getRoles: function () {
                return '/happywater-admin-ajax/manager/background/roles'
            },
            //查询角色
            searchRole: function(){
                return '/happywater-admin-ajax/manager/background/roles/search'
            },



            //运营管理
            // banner编辑删除
            modifyBanner: function(id){
                return '/happywater-admin-ajax/manager/operation/banner/' + id
            },
            //查询banner
            searchBanner: function(){
                return '/happywater-admin-ajax/manager/operation/banner/search'
            },
            // banner上下架
            putBanner: function(id){
                return '/happywater-admin-ajax/manager/operation/banner/status/' + id
            },
            //banner获取、新增
            getBanner: function(){
                return '/happywater-admin-ajax/manager/operation/banners'
            },
            //新增消息
            postMessage: function(){
                return '/happywater-admin-ajax/manager/operation/message'
            },
            //消息编辑、删除
            modifyMessage: function(id){
                return '/happywater-admin-ajax/manager/operation/message/' + id
            },
            //取消发送
            cancelMessage: function(id){
                return '/happywater-admin-ajax/manager/operation/message/cancel/' + id
            },
            //查询消息
            searchMessage: function(){
                return '/happywater-admin-ajax/manager/operation/message/search'
            },
            //消息管理
            getMessages: function(){
                return '/happywater-admin-ajax/manager/operation/messages'
            },
            //鼎力推荐
            getRecommendations: function(){
                return '/happywater-admin-ajax/manager/operation/recommendations'
            },
            //新增推荐
            postRecommendation: function(){
                return '/happywater-admin-ajax/manager/operation/recommendation'
            },
            //推荐编辑、删除
            modifyRecommendation: function(id){
                return '/happywater-admin-ajax/manager/operation/recommendation/' + id
            },
            //推荐上下架
            putRecommendation: function (id) {
                return '/happywater-admin-ajax/manager/operation/recommendation/status/' + id
            },
            //查询推荐
            searchRecommendation: function(){
                return '/happywater-admin-ajax/manager/operation/recommendation/search'
            },
            //意见回复
            getSuggestions: function () {
                return '/happywater-admin-ajax/manager/operation/suggestions'
            },
            //意见回复、删除
            modifySuggestion: function(id){
                return '/happywater-admin-ajax/manager/operation/suggestion/' + id
            },
            //查看意见
            viewSuggestion: function(id){
                return '/happywater-admin-ajax/manager/operation/suggestions/search/' + id
            },
            //查询意见
            searchSuggestion: function () {
                return '/happywater-admin-ajax/manager/operation/suggestions/search'
            }




        }
    });