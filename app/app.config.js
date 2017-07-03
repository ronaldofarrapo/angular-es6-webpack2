import ptBR from './pt-BR.json';

function routing($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

function translate($translateProvider) {
    $translateProvider.translations('pt', ptBR);
    $translateProvider.preferredLanguage('pt');
}

export default function config($urlRouterProvider, 
    $locationProvider, 
    $translateProvider){

    routing($urlRouterProvider, $locationProvider);
    translate($translateProvider);
}

config.$inject = ['$urlRouterProvider', '$locationProvider', '$translateProvider'];