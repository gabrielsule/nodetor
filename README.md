# nodeTor

### Instalar Tor
En la siguiente link [download](https://www.torproject.org/download/) podemos encontrar todos las versiones de Tor para instalar en los diferentes OS.

### Ajustando Tor
En el archivo **torrc**, agregamos las siguientes líneas al final del archivo
```bach
SocksPort 9050
SocksPort 9052
SocksPort 9053
SocksPort 9054
```
## Manos a la obra
### Crear proyecto
```bach
npm init -y
```

### Instalamos dependencias
```bach
npm i socks-proxy-agent

npm i axios
```

### index.js
```javascript
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
```

### Ejecución
```
node index.js
```

### Extra (Windows)
Ingresamos a:

Control panel > Internet options > Connections > LAN settings > Proxy server > Advenced

y únicamente en **socks** agregamos 127.0.0.1 9050


