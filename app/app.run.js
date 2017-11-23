(function(){
    angular.module('authapp')
    .run(run);
    run.$inject = ['authService'];
    function run(authService){
        authService.handleAuthentication();
    }

})();