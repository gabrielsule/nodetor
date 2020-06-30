const {
    SocksProxyAgent
} = require('socks-proxy-agent');
const axios = require('axios');

const agent = new SocksProxyAgent('socks5h://127.0.0.1:9050');

axios({
        url: 'https://api.ipify.org/',
        httpsAgent: agent,
    })
    .then(({
        data
    }) => {
        console.log(data);
    });