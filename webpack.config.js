const path = require('path');

module.exports = {
  // This allows for top level awaits
  webpack: {
    configure: {
      experiments: {
        topLevelAwait: true,
      },
    },
  },
  // The entry point file described above
  entry: './public/index.js',
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',
};