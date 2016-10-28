const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  entry:'./app/main.js',
  output: { path:'./app', filename: 'bundle.js' },
  devServer: { inline: true, contentBase: './app', port: 8000 },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader:'babel' },
      { test: /\.scss$/, loaders: ["style", "css","sass"] },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'  }
    ]
  },
  plugins: [
    new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:['echo "Webpack End" & open http://localhost:8000']})
  ],
};
