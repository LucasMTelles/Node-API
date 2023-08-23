///Importando uma dependência nativa do NodeJS para criar um servidor
const http = require("http");

///CreateServer é uma função usada para criar um servidor.
//request = requisição
//response = resposta
http.createServer((request, response) => {
    //WriteHead é uma função usada para escrever o cabeçalho da resposta que está sendo enviada
    response.writeHead(200, {
        "Content-Type":"application/json"
    });

    if(request.url === "/produtos") {
        response.end(JSON.stringify(
            [
                {
                    id: 1,
                    name: "produto 1",
                    description: "algum produto",
                    price: 12.50
                },

                {
                    id: 2,
                    name: "produto 2",
                    description: "algum produto",
                    price: 12.50
                },

                {
                    id: 3,
                    name: "produto 3",
                    description: "algum produto",
                    price: 12.50
                },

                {
                    id: 4,
                    name: "produto 4",
                    description: "algum produto",
                    price: 12.50
                },

                {
                    id: 5,
                    name: "produto 5",
                    description: "algum produto",
                    price: 12.50
                }
            ]
        ));
    }
    
    if(request.url === "/usuarios"){
        response.end(JSON.stringify({
            message: "Acessando a rota de usuários"
        }));
    }

    //stringify é uma função que converte um valor JavaScript em um formato JSON.

    //end é uma função usada para finalizar o processo de uma resposta.
    response.end(JSON.stringify({
        message: "Criando um servidor com NodeJS"
    }));
}).listen(3000, () => console.log("Servidor está sendo executado na porta 3000"));