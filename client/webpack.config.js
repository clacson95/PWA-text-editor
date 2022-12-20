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

      // reference: https://webpack.js.org/plugins/html-webpack-plugin/
      // generates html file & injects bundles
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),

      // injects custom service worker
      new InjectManifest({
      swSrc: "./src-sw.js",
      swDest: "src-sw.js",
      }),
      
      // reference: https://www.npmjs.com/package/webpack-pwa-manifest
      // creates manifest.json file
      new WebpackPwaManifest({
        name: "Just Another Text Editor",
        short_name: "JATE",
        description: "Just Another Text Editor",
        display: "standalone",
        background_color: "#003314",
        theme_color: "#003314",
        start_url: "./",
        publicPath: "./",
        fingerprints: false,
        inject: true,
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),

    ],


// adding CSS loaders and babel to webpack

    module: {
      rules: [
        
      ],
    },
  };
};
