const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.m?.js$/, // mencari file yang berakhiran .mjs atau .js
                exclude: /(node_modules|bower_components)/, // jika ada file yang ada di node_modules atau bower_components, maka file tersebut tidak akan di compile
                use: {
                    loader: 'babel-loader', // menggunakan babel-loader
                    options: {
                        presets: ['@babel/preset-env'] // menggunakan preset-env
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", // Creates `style` nodes from JS strings
                    "css-loader", // Translates CSS into CommonJS
                    "sass-loader", // Compiles Sass to CSS
                ]
            }
        ]
    },
};