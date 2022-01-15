require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name rebel saddle public hunt derive slot gauge'; 
let testAccounts = [
"0xa3228eebd48c44c70922e0bded7ea3ca756802ebac2c7e3bc2e25d07e6af42b6",
"0x7d4c2272508653242c713cb8896f36675e2478100da2eaea00578c8ec9d967df",
"0x958dba54eab1ccba270cb60eb277738571bcf453240f116ade3bf167f44564ca",
"0xc290b86c1f609f1fd42b8926ac406a0fccaa3ca2ada75e577b068f1468aa2043",
"0x7f641533f842a2966daa71e72d19546b12cedacdfeea5745a6ede93f51988cae",
"0xcf63348d33b9b28ebe9e5d977d4cefbd2490a90b5187d130b60e425120b74fe8",
"0xf34f7913b1c2af67a6d2ef0764c2aaf3117ee998c0029609e60943941412851a",
"0x17ae01d14e813066fb4fb5406976ccdf3cae0cafd6a75a3d6596ca008a6d61ad",
"0x1d341df02de3bdfacd10de899307c8d01de29f6c99f108dfdf61ed7919add14e",
"0x99437163469cf2343ce90cb866332c1d2f90e5e25fd7cee01962c85537b7f845"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

