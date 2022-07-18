# vue-mitmproxy-demo

This project demonstrates using mitmproxy to serve a subdirectory (/my/sub/path/) of a website (https://example.com) from a local Vue CLI development server with hot reload. This a useful development technique when multiple semi-independent applications are hosted on a single domain that is partitioned by path. 

## Preqrequisites

* Install [mitmproxy v8.1](https://mitmproxy.org/) 
* Install the [mitmproxy CA cetificate](https://docs.mitmproxy.org/stable/concepts-certificates/)

## Project setup
```
npm install
```

## Proxy Vue CLI development server with Hot Reload
```
npm run dev
```

## Configure System for Proxy Auto-Configuration (PAC)

Configure your system proxy settings for proxy auto-configuration. The address of the PAC file is: http://localhost:8081/proxy.pac

## Test

https://example.com/my/sub/path/
