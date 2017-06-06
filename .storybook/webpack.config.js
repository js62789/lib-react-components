const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'postcss-loader'
        ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
