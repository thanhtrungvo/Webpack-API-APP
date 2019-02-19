const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');

const config = {
//STT: 1 -------------------------------------------------------------------------------------------------------------------------------------------
    entry: './src/index.js', // file duoc bundle dau tien
    output: {
        filename: 'bundle.js', // ten file
        path: path.resolve(__dirname, 'dist'), // vi tri file
        publicPath: '/'
    },
//STT: 2 -------------------------------------------------------------------------------------------------------------------------------------------
    // config for BABEL-LOADER : https://webpack.js.org/loaders/babel-loader
    // ES6 -> ES5, React
    module:{
        rules:[

            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            },
//STT: 3 -------------------------------------------------------------------------------------------------------------------------------------------
//css-loader , MiniCssExtractPlugin
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                        }
                      },
                  "css-loader",
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|wav|mp3|ico)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {},
                },
                ]
            }

        ]
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            }
          }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery':'jquery',
            'window.$' : 'jquery'
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },

    mode: 'development' // set MODE cho webpack
}

module.exports = config;