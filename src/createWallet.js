// Importando as dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const fs = require('fs');

// Definir a rede
// bitcoin - rede principal - mainnet
// testnet - rede de teste - testnet
const network = bitcoin.networks.testnet;

// Derivação de carteiras HD
const path = `m/49'/0'/0'/0`;

// Criando o mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network);

// Criando uma conta - par pvt-pub keys
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcAddress = bitcoin.payments.p2wpkh({
pubkey: node.publicKey,
network: network,
}).address;

// Lendo o conteúdo existente do arquivo, se houver
let existingData = '';
if (fs.existsSync('bloco.wallet')) {
existingData = fs.readFileSync('bloco.wallet', 'utf8');
}

// Contando o número de execuções anteriores
let execNumber = (existingData.match(/Número de Execução:/g) || []).length + 1;

// Dados da carteira
let walletData = `Número de Execução: ${execNumber}\nData: ${new Date().toLocaleString()}\nEndereço: ${btcAddress}\nChave privada: ${node.toWIF()}\nSeed: ${mnemonic}\n\n`;

// Salvando os dados em um arquivo
fs.writeFileSync('bloco.wallet', existingData + walletData);

console.log("Dados da Carteira Gerada:\n");
console.log("Endereço: ", btcAddress);
console.log("Chave privada:", node.toWIF(), "\n");
console.log("Seed:", mnemonic);