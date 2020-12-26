const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlug = require('copy-webpack-plugin')
const MiniCssExtrPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAsstsPlugin = require('optimize-css-assets-webpack-plugin')

const isDev = process.env.NODE_ENV==='development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAsstsPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytic.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.jpg'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models')
        }
    },
    optimization: optimization(),
    devServer: {
        port: 4300,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        // new CopyWebpackPlug([
        //     {
        //         from: '',
        //         to: ''
        //     }
        // ]),
        new MiniCssExtrPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtrPlugin.loader,
                        options: {
                            publicPath: ''
                        },
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtrPlugin.loader,
                        options: {
                            publicPath: ''
                        },
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}