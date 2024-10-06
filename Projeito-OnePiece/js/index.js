//OBJETIVO 1 - quando clicar no botão do personagem na lis, marcar o botão como selecionado
//passo 1 - pegar os botões n JS pra poder verificar quando o usuario clicar em cima de um deles
const botoes = document.querySelectorAll('.botao');

//OBJETIVO 2 - Quando clicar no botão do personagem mostrar as informações do personagem
// PASSO 1 - pegar os personagens no JS para poder mostrar ou esconder ele 
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
   botao.addEventListener("click", () => {

    desselecionarBotao();
    desselecionarPersonagem();

    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
   })
})

function desselecionarPersonagem() {
   const personagemSelecionado = document.querySelector(".personagem.selecionado");
   personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
   const botaoSelecionado = document.querySelector(".botao.selecionado");
   botaoSelecionado.classList.remove("selecionado");
}
