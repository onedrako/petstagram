const path = require("path")
const HtmlWebpackPlugin= require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",//archivo principal y donde esta
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve:{
    extensions:[ ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
  ],
  devServer:{
    static: path.join(__dirname, "dist"),
    compress : true,
    historyApiFallback: true,
    port: 3005,
    open:true,
  },
}
