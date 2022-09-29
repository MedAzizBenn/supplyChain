

module.exports = {

  networks: {
    development :{
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777"

    }
  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "0.8.12",    // Fetch exact version from solc-bin (default: truffle's version)

    }
  },

};
