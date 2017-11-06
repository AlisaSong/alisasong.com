var isProd = true;
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');
var mqpacker = require('css-mqpacker');
var values = require('postcss-modules-values');
var postcss_nested = require('postcss-nested');
var postcss_color = require('postcss-color-function');
var package = require('./package.json');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var cssLoaders = 'style!css?modules!postcss';

var title = 'Alisa Song';

var extract = function (loaders) {
    return ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')));
}

var entry = isProd
    ? {
        app: './app/index.jsx',
        vendors: ['react', 'react-router']
    } : {
        app: [
            'webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/only-dev-server',
            './app/index.jsx'
        ]
    };

var settings = require('./.vs/settings.json');

module.exports = {
    debug: !isProd,
    devtool: 'eval',
    entry: entry,
    output: {
        path: './dist',
        filename: isProd
            ? '[name].[chunkhash].js'
            : 'app.js',
        chunkFilename: isProd
            ? '[chunkhash].js'
            : '[id].js'
    },
    module: {
        loaders: [{
            loader: 'string-replace',
            query: {
                search: '$(asUrlMailMe)',
                replace: settings.urlMailMe
            },
            test: /constants\.jsx$/
        }, {
            exclude: /node_modules/,
            loaders: (isProd
                ? []
                : ['react-hot']).concat(['babel']),
            test: /\.jsx?$/
        }, {
            loader: isProd
                ? extract(cssLoaders)
                : cssLoaders,
            test: /\.css$/
        }, {
            loader: 'url-loader',
            options: {
                limit: 8192
            },
            test: /\.(png|gif|jpg|cur)$/i
        }, {
            loader: "url?limit=10000&mimetype=application/font-woff",
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/
        }, {
            loader: "url?limit=10000&mimetype=application/font-woff",
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/
        }, {
            loader: "url?limit=10000&mimetype=application/octet-stream",
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/
        }, {
            loader: "file",
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/
        }, {
            loader: "url?limit=10000&mimetype=image/svg+xml",
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        }]
    },
    postcss: function () {
        return [
            values,
            postcss_nested,
            postcss_color,
            autoprefixer,
            mqpacker,
            csswring
        ]
    },
    plugins: isProd
        ? [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
            new webpack.optimize.CommonsChunkPlugin('vendors', '[name].[hash].js'),
            new ExtractTextPlugin('[name].[hash].css'),
            new HtmlWebpackPlugin({
                title: title,
                template: './template.html',
                production: isProd
            })
        ]
        : [
            new webpack.NoErrorsPlugin(),
            new HtmlWebpackPlugin({
                title: title,
                template: './template.html'
            })
        ],
    resolve: {
        modulesDirectories: ['app', 'node_modules'],
        extensions: ['', '.js', '.json', '.jsx', '.css']
    }
};
