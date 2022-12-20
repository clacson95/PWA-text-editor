// required plugins

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');


// configure workbox plugins --> service worker & manifest file

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [

      // generates html file & injects bundles
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),

      // injects custom service worker
      new InjectManifest({
      swSrc: "./src-sw.js",
      swDest: "src-sw.js",
      }),
      
      

    ],


// adding CSS loaders and babel to webpack

    module: {
      rules: [
        
      ],
    },
  };
};
