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
                test: /\.css$/,
                use:["style-loader", "css-loader"]
            },
            {
                test: /\.m?.js$/, // mencari file yang berakhiran .mjs atau .js
                exclude: /(node_modules|bower_components)/, // jika ada file yang ada di node_modules atau bower_components, maka file tersebut tidak akan di compile
                use: {
                    loader: 'babel-loader', // menggunakan babel-loader
                    options: {
                        presets: ['@babel/preset-env'] // menggunakan preset-env
                    }
                }
            }
        ]
    },
};