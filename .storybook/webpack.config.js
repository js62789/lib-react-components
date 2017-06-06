const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [ 'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
