function Cadastrar(){
    const produto = {
        nome: document.getElementById("prod_nome").value,
        marca: document.getElementById("prod_marca").value,
        preco: document.getElementById("prod_preco").value
    }
    //Criar um novo elemento LI
    const lista_item = document.createElement("li")

    //criando variáveis e especificando ações linkadas a elas
    const produto_nome  = document.createElement("h3")
    const produto_marca = document.createElement("h4") 
    const produto_preco = document.createElement("p")

    //colocando os valores do objeto produto nas variáveis
    produto_nome.innerHTML = produto.nome
    produto_marca.innerHTML = produto.marca
    produto_preco.innerHTML = produto.preco

    //adicionar elementos filhos a lista_item
    lista_item.appendChild(produto_nome)
    lista_item.appendChild(produto_marca)
    lista_item.appendChild(produto_preco)


    //Adicionar esse lista_item no UL
    document.getElementById("lista_prod").appendChild(lista_item)
    console.log(produto)
    console.log(lista_item)
}