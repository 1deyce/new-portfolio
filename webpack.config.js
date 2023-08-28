const path = require('path');

const nodepolyfill = require('node-polyfill-webpack-plugin')

module.exports = {
    resolve: {
        fallback: {
            fs: false,
            path: require.resolve('path-browserify'),

        },
    },
    plugins: [
        new nodepolyfill()
    ]
};