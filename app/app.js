(function () {
    angular
        .module('authapp', ['auth0.auth0', 'ui.router','angular-jwt'])
        .config([
            '$stateProvider', 
            '$locationProvider', 
            '$urlRouterProvider', 
            'angularAuth0Provider', 
            'jwtOptionsProvider',
            '$httpProvider',
        function (
            $stateProvider, 
            $locationProvider, 
            $urlRouterProvider, 
            angularAuth0Provider, 
            jwtOptionsProvider,
            $httpProvider) {
                
                $stateProvider.state('home', {
                    url: '/',
                    controller: 'HomeController',
                    templateUrl: 'app/home/home.html',
                    controllerAs: 'hc'
                })
                .state('callback', {
                    url: '/callback',
                    controller: 'CallbackController',
                    templateUrl: 'app/callback/callback.html',
                    controllerAs: 'cb'
                })
                .state('profile', {
                    url: '/profile',
                    controller: 'ProfileController',
                    templateUrl: 'app/profile/profile.html',
                    controllerAs: 'pc'
                });

            $urlRouterProvider.otherwise('/');
            $locationProvider.hashPrefix('');
            $locationProvider.html5Mode(true);
            
            angularAuth0Provider.init({
                clientID: 'RxZ4JJkiTzrWfvXrzmttAE5IAQ2RGa7C',
                domain: 'techies-hub.auth0.com',
                redirectUri:'http://localhost:3000/callback',
                responseType:'token id_token',
                scope:'openid profile',
                audience: 'https://techies-hub.com/api'
            });
            jwtOptionsProvider.config({
                tokenGetter: function(){
                    return localStorage.getItem('access_token');
                },
                whiteListedDomains:['localhost']
            });
            $httpProvider.interceptors.push('jwtInterceptor');
        }]);

})();