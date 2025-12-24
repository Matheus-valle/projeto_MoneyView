function bitcoin() {
    console.log("Buscando Bitcoin")
    fetch("https://economia.awesomeapi.com.br/json/last/BTC").then(
        function (resposta) {


            resposta.json().then(
                function (dados) {

                    var moeda = dados.BTCBRL
                    var preco = moeda.high
                    var npreco = Number(preco)

                    precoBtc.innerHTML = npreco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                }
            )
        }
    )
}
function buscarDolar() {
    console.log("Buscando Dolar")

    fetch("https://economia.awesomeapi.com.br/json/last/USD").then(function (resposta) {
        resposta.json().then(function (dados) {
            var moeda = dados.USDBRL
            var preco = moeda.high
            var npreco = Number(preco)
            precoDl.innerHTML = npreco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


        })
    })
}

function buscarLibra() {
    console.log("Buscando Libra")

    fetch("https://economia.awesomeapi.com.br/json/last/GBP").then(function (resposta) {
        resposta.json().then(function (dados) {
            var moeda = dados.GBPBRL
            var preco = moeda.high
            var npreco = Number(preco)
            precoL.innerHTML = npreco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


        })
    })
}

function buscarEuro() {
    console.log("Buscando Euro")

    fetch("https://economia.awesomeapi.com.br/json/last/EUR").then(function (resposta) {
        resposta.json().then(function (dados) {
            var moeda = dados.EURBRL
            var preco = moeda.high
            var npreco = Number(preco)
            precoE.innerHTML = npreco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


        })
    })
}

function buscarYene() {
    console.log("Buscando Yene")

    fetch("https://economia.awesomeapi.com.br/json/last/JPY").then(function (resposta) {
        resposta.json().then(function (dados) {
            var moeda = dados.JPYBRL
            var preco = moeda.high
            var npreco = Number(preco)
            precoI.innerHTML = npreco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


        })
    })
}

function buscarMonero() {
    console.log("Buscando Monero")

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=brl").then(
        function (resposta) {
            resposta.json().then(function (dados) {

                var moeda = dados.monero
                var preco = moeda.brl
                precoM.innerHTML = preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            })
        }
    )
}



function rodar_moedas() {


    setInterval(function () {
        bitcoin()
        buscarDolar()
        buscarLibra()
        buscarEuro()
        buscarYene()
        buscarMonero()
    },
        1000000)




}