const ENTRY = __dirname + '/client/src/index.jsx';
const OUTPUT = __dirname + '/client/dist';

const config = {
  entry: ENTRY,
  output: {
    path: OUTPUT,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;