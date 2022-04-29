const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCSSExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM Injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }]
    }
}