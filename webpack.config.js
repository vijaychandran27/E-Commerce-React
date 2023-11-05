const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    
    devServer: {
        historyApiFallback: true,
        hot: true,
        // host: '0.0.0.0',
        port: 3010,
        proxy: {
            '/**': {
            target: 'http://localhost:5000',
            // pathRewrite: { '^/api': '' },
            changeOrigin: true,
            },
        },
    },
    output : {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules',
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
}