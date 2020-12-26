const path = require('path');
var webpack = require("webpack");
const fs = require('fs');
function resolve (dir) {
   return path.join(__dirname, dir)
}

// cdn预加载使用
const externals = {
   'vue': 'Vue',


   'quasar':  'Quasar'
}



// const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
/*   quasar: {
      theme: 'mat',
      rtlSupport: true,
      importAll: true
   }*/ // https://github.com/copernet/wormhole-wallet-web/blob/57762a80261204878b924f7ab57003f109015122/vue.config.js

   productionSourceMap: false,
   transpileDependencies: ['swiper', 'quasar'],

   configureWebpack: config => {


      const plugins = [];
      if (process.env.NODE_ENV === 'production') {
         // 1. 生产环境npm包转CDN
         config.plugins = [...config.plugins, ...plugins];
         config.externals = externals
         config.optimization = {
            minimize: false
         }
      }

      // return config
   },

   chainWebpack: config => {

      if (process.env.NODE_ENV === 'production') {
         config
            .plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
            .end()

         config.plugins.delete('prefetch')
         config.plugins.delete('preload')
      }



      return config

   },

};
