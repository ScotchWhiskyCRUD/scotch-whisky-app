const HtmlWebpackPlugin = require("html-webpack-plugin");
// the template for the HTML we're oging to be passing into our browser is coming from the index.html
const path = require("path");


module.exports = {
    // when we build webpack, it creates a bundle.js file (it will take all our different files and concat them, ugly them up)
    // needs to know what our template index.html is so it uses that as a starting point
    mode: process.env.NODE_ENV, 
    entry: "./client/src/index.js", 
    output: {
        path: path.resolve(__dirname, "client/public"),
        filename: "bundle.js"
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,    
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: [
                        '@babel/env',
                        '@babel/react',
                        ]
                    }
                }
            },
            {
              test: /.(css|scss)$/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader',
              ],
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({inject: false, template: './client/public/index.html'})],
    devServer: {
        static: {
            directory: path.resolve(__dirname, './client/public/'),
            publicPath: 'client/public'
          },
          proxy: { // treat the root path from the server as our server served on localhost:3000
            '/': 'http://localhost:3000/'
          },
        //   proxy: 'http://localhost:3000',
        open: true, // tells dev-server to open the browser after server had been started
        hot: true , // every time we save, reload the devServer
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
}