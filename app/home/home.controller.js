(function () {
    angular
    .module('authapp')
    .controller('HomeController', homeController)
    homeController.$inject= ['$http']
    function homeController($http){
        let hc = this;
        hc.message = '';
        hc.getMessage = function(){
            $http.get('http://localhost:8888/authorized')
            .then(function(result){
                hc.message = result.data.message;
            }, function (err){
                console.log(err);
            });
        }
    }   
})();