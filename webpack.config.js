module.exports = {
    //just to check if its working
    entry: "./public/react/reactApp.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    watch: true

}