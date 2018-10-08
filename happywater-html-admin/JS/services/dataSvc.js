angular.module('myApp')
    .factory('myService',['$http', 'path', function($http, path){

        return{

            // login
            login: function (data, config) {
                return $http.post(path.login, data, config)
            },
            //logout
            logout: function(id){
                return $http.get(path.logout(id))
            },
            //getModule
            getModule: function(id){
                return $http.get(path.getModule(id))
            },

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
            }





        }

    }]);