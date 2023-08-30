const nodeExternals = require('webpack-node-externals');
const DtsBundleWebpack = require('dts-bundle-webpack')
const {glob} = require("glob");
const path = require("path")

const entries = glob.sync('./src/**/*.ts*').reduce((a, p) => {
    const name = path.parse(p).name

    a.push('./' + p)

    //a[name] = './' + p
    return a
}, [])

const dtsBundleOptions = {
    name: 'main',
    outputAsModuleFolder: true,
    main: './types/**/*.d.ts',
    out: '../index.d.ts',
};

module.exports = {
    mode: 'production',
    entry: entries,
    output: {
        filename: 'index.js',
        path: __dirname,
        libraryTarget: 'this'
    },
    target: 'node', // <-- Important
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    externals: [nodeExternals()],
    plugins: [
        new DtsBundleWebpack(dtsBundleOptions)
    ]
};