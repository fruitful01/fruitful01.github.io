const path = require('path');
const {
    VueLoaderPlugin
} = require('vue-loader')
console.log(process.env.NODE_ENV,path.resolve(__dirname, '../dist'))
module.exports = {
    entry: './mindPot/src/main.ts',
    mode: 'production',
    module: {
        rules: [{
                test: /\.(tsx|ts)?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/.vue$/],
                    }
                },
                exclude: /node_modules/,

            }, {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(css|less)$/,
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                strictMath: true,
                                noIeCompat: true
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{

                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        publicPath: path.resolve(__dirname, '../dist/img')
                    }
                }]
            },

        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};