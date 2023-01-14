const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ConyPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        bundle: './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.[s][ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ],
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'the app by Observables',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ConyPlugin({
            patterns:[{from: './src/assets', to:'./assets'}]
        })
    ],
    devServer: {
        port: '4506',
        open: true,
        liveReload: true,
        static: ['./src', './public']
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
}
// if (process.env.NODE_ENV !== 'production') {
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new HtmlWebpackPlugin({
//             template: './src/index.html'
//         })
//     ])
// }
