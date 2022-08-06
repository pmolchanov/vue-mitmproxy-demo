// https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
// https://chromium.googlesource.com/chromium/src/+/master/net/docs/proxy.md
exports.proxyPacMiddleware = (req, res, next) => {
    if (req.method === 'GET') {
        res.set('Content-Type', 'application/x-ns-proxy-autoconfig');
        res.send(`
            function FindProxyForURL(url, host) {
                var regex = new RegExp('^${process.env.HOSTNAME}$', 'i');
                if(regex.test(host)) {
                    return 'PROXY localhost:8080; DIRECT';
                } else {
                    return 'DIRECT';
                }
            }   
        `);
    } else {
        next()
    }
}
