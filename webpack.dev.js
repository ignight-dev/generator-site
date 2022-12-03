const webpack = require('webpack');
const path = require('path');

module.exports = {
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },
    devtool: "inline-source-map",
    entry: {
        index: './src/index.tsx'
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js',
        publicPath: './'
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                  // compiles Less to CSS
                  "style-loader",
                  "css-loader",
                  "less-loader",
                ],
            },
        ]
    },
    devServer: {
        hot: true,
        host: "localhost",
        port: 1337,
        historyApiFallback: true,
        static: path.resolve(__dirname, "./dist"),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
};