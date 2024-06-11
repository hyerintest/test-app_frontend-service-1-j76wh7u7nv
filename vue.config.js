module.exports = {
  transpileDependencies: ['quasar'],
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  publicPath: '.',
  outputDir: 'dist',
  assetsDir: 'static',
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [{
        test: /\.md$/,
        loader: 'raw-loader'
      },
        {
          test: /config.*config\.js$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'config.js'
              },
            }
          ]
        }
      ]
    },
    entry: ['babel-polyfill',
      'classlist-polyfill',
      './src/main.js']
  }
};