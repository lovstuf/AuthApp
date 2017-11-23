(function () {
    angular
        .module('authapp')
        .directive('navbar', navbar);

    function navbar(){
        return {
            templateUrl: 'app/navbar/navbar.html',
            controller:navbarController,
            controllerAs: 'nc'
        }
    }
    navbarController.$inject = ['authService'];
    function navbarController(authService){
        let nc = this;
        nc.auth = authService;
    }
})();