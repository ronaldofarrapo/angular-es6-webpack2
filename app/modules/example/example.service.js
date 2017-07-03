export default class ExampleService {
    constructor(http) {
        this.http = http;
    }

    add(example){
        this.http.post('/demo/api/documento', example);
    }
}

ExampleService.$inject = ['$http'];
