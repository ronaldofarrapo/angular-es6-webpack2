module.exports = function karmaConfig (config) {
    config.set({
        frameworks: [
            'jasmine'
        ],

        files: [
            './webpack.test.js'
        ],

        preprocessors: {
            './webpack.test.js': ['webpack', 'sourcemap']
        },

        browsers: [
            'ChromeHeadless'
        ],

        singleRun: true,

        webpack: require('./webpack.test.config')
    });
};