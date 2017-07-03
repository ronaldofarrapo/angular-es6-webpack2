export default class ExampleController {
    constructor(exampleService) {
        let vm = this;

        vm.add = function () {
            exampleService.add(vm);
        };
    }
}

ExampleController.$inject = ['exampleService'];
