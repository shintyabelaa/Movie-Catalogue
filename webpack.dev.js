const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
<<<<<<< HEAD
    static: path.resolve(__dirname, 'dist'),
=======
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
      {
        directory: path.join(__dirname, 'src'),
        serveIndex: true,
        watch: true,
      },
    ],
>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
    open: true,
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
  },
<<<<<<< HEAD
=======

>>>>>>> 301a9359168623ced65653f12cec80ff1ee48f86
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
