const path = require('path')

export default {
  entry   : './src/index.ts',
  devtool : 'inline-source-map',
  module  : {
    rules : [
      {
        test    : /\.tsx?$/,
        use     : 'ts-loader',
        exclude : /node_modules/
      }
    ]
  },
  resolve : {
    extensions : ['.tsx', '.ts', '.js']
  },
  output : {
    filename : 'bundle.js',
    path     : path.resolve(__dirname, 'dist')
  }
}
