// webpack v4
const path = require('path');
module.exports = {
    entry: { main: './public/react/reactApp.js' },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: "babel-loader"
    //             }
    //         }
    //     ]
    // },
    watch: true
};