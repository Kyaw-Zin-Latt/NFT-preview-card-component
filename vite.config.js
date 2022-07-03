const path = require('path')

export default {
    root: path.resolve(__dirname, ''),
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '~@fortawesome': path.resolve(__dirname, 'node_modules/@fortawesome'),
        }
    },
    server: {
        port: 8080,
        hot: true
    }
}