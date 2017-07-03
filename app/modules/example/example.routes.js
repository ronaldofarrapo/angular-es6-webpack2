import criaExampleTpl   from './cria-example.html';
import filtroExampleTpl from './filtro-example.html';

export default function routes(stateProvider) {
    stateProvider
        .state('example', {
            url: '/cria-example',
            template: criaExampleTpl,
            controller: 'exampleController',
            controllerAs: 'vm'
        })
        .state('filtroExample', {
            url: '/filtro-example',
            template: filtroExampleTpl,
            controller: 'exampleController',
            controllerAs: 'vm'
        });
}

routes.$inject = ['$stateProvider'];
