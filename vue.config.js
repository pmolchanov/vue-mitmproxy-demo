const { defineConfig } = require('@vue/cli-service')
const { proxyPacMiddleware } = require('./src/middleware/proxy-pac')

module.exports = defineConfig({
    transpileDependencies: true,
    // Configure Vue app to be deployed on custom sub-path (rather than root)
    publicPath: process.env.BASE_URL,
    devServer: {
        port: 8082,
        // Whitelist proxied domain
        allowedHosts: [process.env.HOSTNAME],
        client: {
            // Get protocol/hostname/port from browser
            webSocketURL: {
                hostname: '0.0.0.0',
                port: 0,
            }
        },
        // Configure web-socket server to listen on custom sub-path (rather than root)
        webSocketServer: {
            options: {
                path: `${process.env.BASE_URL}ws`,
            },
        },
        // Serve a proxy auto configuration script on http://localhost:8081/proxy.pac
        setupMiddlewares: (middlewares, devServer) => {
            middlewares.unshift({
                name: 'proxy-pac',
                path: '/proxy.pac',
                middleware: proxyPacMiddleware,
            });
            return middlewares;
        }
    },
})
