[![HitCount](http://hits.dwyl.com/robertoarodrigues/robertoarodrigues/api-geocoding.svg)](http://hits.dwyl.com/robertoarodrigues/robertoarodrigues/api-geocoding)


Este projeto é o código-fonte de uma API Geolocalização. Desafio para uma vaga de emprego backend.

### Desafio - Criar uma API Rest que: 

1. Receba dois ou mais endereços como parâmetros de entrada;

2. Resolva a geolocalização entre os endereços utilizando a API do Google;

3. Após isso, com a latitude e longitude em mãos dos endereços, implementar o algoritmo
de cálculo de distância Euclidiana e aplicar em todas as combinações de endereços.

4. Retorne as distâncias calculadas entre os todos os endereços e indique os endereços
mais próximos e também os endereços mais distantes.

## Construído com:

* NodeJS
* Node library node-geocoder (https://www.npmjs.com/package/node-geocoder)  

### Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```