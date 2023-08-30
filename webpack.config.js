const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: __dirname + '/src/index',
    output: {
        filename: 'index.js',
        libraryTarget: 'this',
    },
    target: 'node', // <-- Important
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    externals: [nodeExternals()]
};