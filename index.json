const { Proxy } = require("eaglerproxy");

const proxy = new Proxy({
  host: "overclock.dathost.net:17930",
  port: 25565,
  bindHost: "0.0.0.0",
  bindPort: process.env.PORT || 8080
});

proxy.init();
