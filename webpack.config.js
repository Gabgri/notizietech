const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'), // Absolute path with .resolve
      publicPath: "./",
      assetModuleFilename: "img/[name][ext][query]", // to compile with the same name and inside a specific folder (in dist folder)
      clean: true
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              //"style-loader",
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i, 
            type: 'asset/resource',
          },
        ]
    },
    plugins: 
    [new HtmlWebpackPlugin({
      template: './src/index.html',
    }), new MiniCssExtractPlugin({
      filename: 'main.css'
    }), new Dotenv()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
};