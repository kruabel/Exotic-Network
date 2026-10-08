const { Proxy } = require("eaglerproxy");

const proxy = new Proxy({
  host: "overclock.dathost.net",
  port: 17930",
  bindHost: "0.0.0.0",
  bindPort: process.env.PORT || 8080
});

proxy.init();
