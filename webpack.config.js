const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],

  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/client/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './client/dist',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
  ],

};
