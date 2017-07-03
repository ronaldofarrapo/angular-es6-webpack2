import home from './index';

describe('Class HomeController', function() {
    let $controller;

    beforeEach(angular.mock.module(home));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('O nome deve conter es6-angular-webpack', function() {
        let ctrl = $controller('HomeController');
        expect(ctrl.name).toBe('es6-angular-webpack');
    });
});