/*
This Webpack config:

1. Compiles modern React (.js/.jsx) using Babel
2. Bundles everything into a single bundle.js file
3. Outputs it to a dist/ folder
Uses development mode for fast build + debugging



*/

const path = require('path');


module.exports = {
    // Specifies the main file that Webpack will start bundling.
    // index.js is the root of your React app.
    entry: './index.js',

    //Tells Webpack to output the final bundled file:
    //📂 Directory: dist/
    //📄 File: bundle.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    //mode: 'development'
    //Enables faster builds and better debugging.
    //Adds helpful features like source maps.
    //You can switch to 'production' for optimization & minification.
    mode: 'development',
    
    //Handles how different file types are processed (in this case, JS/JSX):
    //Skip transforming files inside node_modules.
    //Use Babel to transpile JavaScript/JSX to browser-compatible JS.
    //@babel/preset-env: Converts modern JS (ES6+) to compatible JS.
    //@babel/preset-react: Transforms JSX into valid JavaScript.
    
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
        }]
    }
}