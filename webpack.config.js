const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
require('dotenv').config();

console.log("processEnv: ", process.env.SC_ATTR);

module.exports = {

  entry: "./client/index.jsx",
  output: {
    path: path.resolve(__dirname, "public/"),
    publicPath: '/',
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
    // plugins: [
    //   new webpack.DefinePlugin({
    //     SC_DISABLE_SPEEDY: true,
    //   })
    // ]
  },

}


//what does it mean to use env here?
// module.exports = env => {
//   // Use env.<YOUR VARIABLE> here:
//   console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
//   console.log('Production: ', env.production); // true

  // return {
  //   entry: './src/index.js',
  //   output: {
  //     filename: 'bundle.js',
  //     path: path.resolve(__dirname, 'dist'),
  //   },
  // };
// };

//want to pass a different process.env.SC_ATTR variable for each service