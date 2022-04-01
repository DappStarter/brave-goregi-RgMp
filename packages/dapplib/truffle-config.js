require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stool response sister provide hard light army gentle'; 
let testAccounts = [
"0xd4cd93b050f9216419ebe8a78b014d19a9807ae589ded1164ae755f0211dba98",
"0x1a75deda217e8c8f0cf16763481c0c90fe79777df8d5f8c4cde68f3bb4b215be",
"0xa039d34ee34f260cf6ac6443c7f916d69c4d50eb31446203304bfe640ccd3a68",
"0x260799d231b46ba107822e4f001b91675fe5f1fc33781121b6bf83a58710c7f7",
"0x8a080f16af0d7100bedcabd7c485f5ad60c3652ca359f0a074aa42903e92fe36",
"0x6019a4d17df6924ab3326df01d60adeffe477c3e0f5c1a765c230974bd050da5",
"0xf0a1921240133f2de111b18b9ce25e3ed6b7d76c932d72bffc7e0a86b96f70a6",
"0x8cd78bd18e0f82bcb6355e7900ebf53a0dcad82cc2a14568f1fb5131e2ae86a2",
"0x09bc688c7ae82ee5e61976c05869ed1d7642a0642c1646e52419a524bf7cca5d",
"0xb9c400790add9f5c7d1aacefe909282834c4accbab7bbd2a4ce96ef81bb93ec8"
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

