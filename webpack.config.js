const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  const { DEPLOY } = env;
  return {
    // enntry file
    entry: ['./src/index.js', './styles/styles.css'],
    // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve(__dirname, 'src')],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            'css-loader', // translates CSS into CommonJS
          ],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'public', 'data'), to: 'data' },
        ],
      }),
      new webpack.DefinePlugin({
        DEPLOY,
      }),
    ],
    devtool: 'source-map',
    mode: 'development',
  };
};
