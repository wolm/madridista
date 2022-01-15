const path = require("path");

module.exports = {
    output: {
        filename: 'madridista.js',
        libraryTarget: 'umd',
        library: 'Madridista'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: { loader:  "babel-loader" },
            },
        ]
    },
    devtool: 'source-map',
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public/")
        },
        port: 3000,
        compress: true,
    }
};
