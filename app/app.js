import './assets/css/main-css';

import angular      from 'angular';
import angularTranslate from 'angular-translate';
import ngResource   from 'angular-resource';
import ngAnimate    from 'angular-animate';
import ngTouch      from 'angular-touch';

import uiRouter     from 'angular-ui-router';
import uiBootstrap  from 'angular-ui-bootstrap';

import config       from './app.config';
import example     from './modules/example';
import home         from './modules/home';

angular.module('app',
    [ngResource,
    ngAnimate,
    ngTouch,
    uiRouter,
    uiBootstrap,
    angularTranslate,
    home,
    example
    ])
    .config(config);