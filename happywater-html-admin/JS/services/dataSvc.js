angular.module('myApp')
    .factory('myService',function($http, path){

        return{
            // 登陆注销
            // login
            login: function (params) {
                return $http.post(path.login,params)
            },
            // logout
            logout: function(id){
                return $http.get(path.logout(id))
            },
            // getModule
            getModule: function(id){
                return $http.get(path.getModule(id))
            },

            //后台管理
            // addAccount
            addAccount: function(){
                return $http.post(path.postAccount)
            },
            // editAccount
            editAccount: function(id){
                return $http.put(path.modifyAccount(id))
            },
            // deleteAccount
            deleteAccount: function(id){
                return $http.delete(path.modifyAccount(id))
            },
            // getAccounts
            getAccounts: function(){
                return $http.get(path.getAccounts)
            },
            // searchAccount
            searchAccount: function(){
                return $http.get(path.searchAccount)
            },
            // addModule
            addModule: function(id){
               return $http.post(path.modifyModule(id))
            },
            // editModule
            editModule: function(id){

            },
            // deleteModule
            deleteModule: function(id){
                return $http.delete(path.modifyModule(id))
            },
            // getModules
            getModules: function(){
                return $http.get(path.getModules)
            },
            // searchModule
            searchModule: function(){
                return $http.get(path.searchModule)
            },
            // changePassword
            changePassword: function(id){
                return $http.put(path.changePassword(id))
            },
            // getRole(账户管理-获取角色列表)
            getRole: function(){
                return $http.get(path.getRole)
            },
            // addRole
            addRole: function(){
                return $http.post(path.getRole)
            },
            // editRole
            editRole: function(id){
                return $http.put(path.modifyRole(id))
            },
            // deleteRole
            deleteRole: function(id){
                return $http.delete(path.modifyRole(id))
            },
            // getRoles(角色管理-获取所有角色)
            getRoles: function(){
                return $http.get(path.getRoles)
            },
            // searchRole
            searchRole: function(){
                return $http.get(path.searchRole)
            },

            //运营管理
            // editBanner
            editBanner: function(id,params){
                return $http.put(path.modifyBanner(id),params)
            },
            // deleteBanner
            deleteBanner: function(id){
                return $http.delete(path.modifyBanner(id))
            },
            // searchBanner
            searchBanner: function(params){
                return $http.get(path.searchBanner(),params)
            },
            // putBanner
            putBanner: function(id,params,config){
                return $http.put(path.putBanner(id),params,config)
            },
            // getBanner
            getBanner: function(params){
                return $http.get(path.getBanner(),{
                    params:params
                })
            },
            // addBanner
            addBanner: function(params){
                return $http.post(path.getBanner(),params)
            },
            // addMessage
            addMessage: function(){
                return $http.post(path.postMessage)
            },
            // editMessage
            editMessage: function(id){
                return $http.put(path.modifyMessage(id))
            },
            // deleteMessage
            deleteMessage: function(id){
                return $http.delete(path.modifyMessage(id))
            },
            // cancelMessage
            cancelMessage: function(id){
                return $http.put(path.cancelMessage(id))
            },
            // searchMessage
            searchMessage: function(){
                return $http.get(path.searchMessage)
            },
            // getMessages
            getMessages: function(){
                return $http.get(path.getMessages)
            },
            // getRecommendations
            getRecommendations: function(){
                return $http.get(path.getRecommendations)
            },
            // addRecommendation
            addRecommendation: function(){
                return $http.post(path.postRecommendation)
            },
            // editRecommendation
            editRecommendation: function(id){
                return $http.put(path.modifyRecommendation(id))
            },
            // deleteRecommendation
            deleteRecommendation: function(id){
                return $http.delete(path.modifyRecommendation(id))
            },
            // putRecommendation
            putRecommendation: function(id){
                return $http.put(path.putRecommendation(id))
            },
            // searchRecommendation
            searchRecommendation: function(){
                return $http.get(path.searchRecommendation)
            },
            // getSuggestions(列表)
            getSuggestions: function(params){
                return $http.get(path.getSuggestions(),{
                    params:params
                })
            },
            // replySuggestion
            replySuggestion: function(id,params){
                return $http.post(path.modifySuggestion(id),params)
            },
            // deleteSuggestion
            deleteSuggestion: function(id){
                return $http.delete(path.modifySuggestion(id))
            },
            // viewSuggestion
            viewSuggestion: function(id){
                return $http.get(path.viewSuggestion(id))
            },
            // searchSuggestion
            searchSuggestion: function(params){
                return $http.get(path.searchSuggestion(),params)
            }



        }

    });