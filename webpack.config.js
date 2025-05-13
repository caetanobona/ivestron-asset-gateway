
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: './src/main.tsx',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      inlineSource: '.(js|css)$',
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/\.(js|css)$/]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000,
  },
  stats: {
    children: true, // Add this to show child compilation details
    errorDetails: true, // Add this to show detailed error information
  },
  ignoreWarnings: [/Failed to parse source map/], // Optional: ignore source map warnings
};
