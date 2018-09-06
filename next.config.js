const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
module.exports = withSass(withCSS({
    webpack(config, options) {
        config.module.rules.push(
            {
                test: /\.(jpe?g|png|svg|gif|ico|mp3)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        publicPath: `/_next/static/images/`,
                        outputPath: `./static/images/`, // 不能用path.resolve，next会把目录定位到.next
                    },
                },
            }
        );

        return config
    }
}))
