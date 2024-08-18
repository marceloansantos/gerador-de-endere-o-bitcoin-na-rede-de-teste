# Gerador de Endereço Bitcoin na Rede de Teste 

Este projeto foi criado utilizando o código obtido do repositório do Professor Cassiaone Peres da DIO - [Formação Blockchain DIO](https://github.com/digitalinnovationone/formacao-blockchain-dio/tree/main/Modulo%2001%20Fundamentos%20da%20Blockchain/Curso%2001%20Introducao%20a%20Blockchain/Criando%20e%20utilizando%20a%20sua%20carteira%20de%20criptomoedas). O objetivo deste código é gerar um endereço na rede de teste do Bitcoin e salvar o endereço, a chave privada e a seed em um arquivo chamado `bloco.wallet`.

## 📝 Descrição do Código

O código realiza as seguintes etapas:

1. **Importação das Dependências**:
•  `bip32`, `bip39` e `bitcoinjs-lib` são bibliotecas utilizadas para a geração de endereços Bitcoin.
•  `fs` é utilizado para manipulação de arquivos.

2. **Definição da Rede**:
•  A rede de teste do Bitcoin (`testnet`) é definida para a geração dos endereços.

3. **Derivação de Carteiras HD**:
•  Um caminho de derivação é definido para a criação de carteiras HD (Hierarchical Deterministic).

4. **Criação do Mnemonic e Seed**:
•  Um mnemonic (frase de 12 palavras) é gerado e convertido em uma seed.

5. **Criação da Raiz da Carteira HD**:
•  A raiz da carteira HD é criada a partir da seed.

6. **Criação de uma Conta**:
•  Uma conta é derivada da raiz da carteira HD, gerando um par de chaves pública e privada.

7. **Geração do Endereço Bitcoin**:
•  Um endereço Bitcoin é gerado a partir da chave pública.

8. **Leitura do Arquivo Existente**:
•  Se o arquivo `bloco.wallet` já existir, seu conteúdo é lido.

9. **Contagem de Execuções Anteriores**:
•  O número de execuções anteriores é contado para registro.

10. **Dados da Carteira**:
•  Os dados da carteira (endereço, chave privada e seed) são formatados e preparados para serem salvos.

11. **Salvamento dos Dados**:
•  Os dados da carteira são salvos no arquivo `bloco.wallet`.

12. **Exibição dos Dados**:
•  Os dados da carteira gerada são exibidos no console.

## 🛠️ Utilização
Foi utilizado o [Electrum Bitcoin Wallet](https://electrum.org/) para a administração da carteira. Também pode ser utilizado site [Mempool Space](https://mempool.space/pt/) para acompanhar as movimentações da carteira.

Para enviar Bitcoins de teste e validar os endereços gerados, você pode usar os seguintes sites:

- [Bitcoin Faucet](https://bitcoinfaucet.uo1.net/send.php)
- [Testnet Help BTC Faucet](https://testnet.help/en/btcfaucet/testnet)