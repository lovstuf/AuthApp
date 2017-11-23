(function () {
    angular
        .module('authapp')
        .controller('ProfileController', profileController)

    function profileController() {
        let pc = this;
        pc.profile = JSON.parse(localStorage.getItem('profile'));
    }
})();