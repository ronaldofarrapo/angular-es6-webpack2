import angular from 'angular';

import exampleRouting from './example.routes';
import exampleController from './example.controller';
import exampleService from './example.service';

export default angular.module('app.example',[])
    .controller('exampleController', exampleController)
    .service('exampleService', exampleService)
    .config(exampleRouting)
    .name;

