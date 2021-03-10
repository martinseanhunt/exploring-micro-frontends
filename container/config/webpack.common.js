const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      // Babel for transpiling
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // @babel/preset-react - proces jsx
            // @babel/preset-env - convert modern syntax to es5
            // @babel/plugin-transform-runtime - enable async / await and a few other things
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    // Injects script tags in to the html file
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
