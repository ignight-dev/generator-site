const webpack = require('webpack');
const path = require('path');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const prettydata = require('pretty-data');

const prettyPrint = (xml) => {
    return prettydata.pd.xml(xml);
};

module.exports = {
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
    plugins: [
        new SitemapPlugin({ base: 'https://generate-for-me.com', 
            options: {
                formatter: prettyPrint,
                skipgzip: true,
            },
            paths: [
                {
                    path: '/',
                    lastmod: new Date().toISOString(),
                },
                {
                    path: '/emoji',
                    lastmod: new Date().toISOString(),
                }
            ]
        })
    ],
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