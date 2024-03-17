var data = {
  quantidade: 9,
  itens: [
    {
      nome: "Mario Jump", // Nome do projeto
      imagemIcon: "./images/projects/mario-jump-icon.png", // Ícone do projeto
      imagemCard: "./images/projects/mario-jump-card.png", // Imagem de fundo do card
      linkGitHub: "https://github.com/NianCode/mario-jump", // Link do repositório no GitHub
      linkPreview: "https://nian-code.web.app/mariojump", // Link do preview
      skills: [ // Array de ícones Font Awesome
        "fab fa-html5", 
        "fab fa-css3-alt",
        "fab fa-js-square",
        "fas fa-database",
        "fas fa-server",
      ],
    },
    {
      nome: "Rough Bot",
      imagemIcon: "./images/projects/rough-bot-icon.png",
      imagemCard: "./images/projects/rough-bot-card.png",
      linkGitHub: "https://github.com/NianCode/rough-bot",
      skills: [
        "fab fa-js-square",
        "fab fa-node",
        "fab fa-discord",
        "fas fa-cogs",
      ],
    },
  ],
};

var aside = document.querySelector("aside");
var containerProjetos = document.querySelector(".containerProjetos");

//  //
//  //
//  //
//  //

// Cria um loop para cada item no array de itens
for (var i = 0; i < data.quantidade; i++) {
  // Cria o item
  var item = document.createElement("div");
  item.classList.add("pItens");
  // Cria o elemento para o nome
  var nomeElement = document.createElement("div");
  // Adiciona o nome ao elemento .pItens se existir
  nomeElement.textContent = data.itens[i]?.nome;
  item.appendChild(nomeElement); // Adiciona o nome ao item
  // Cria o elemento para os ícones
  var iconDiv = document.createElement("div");
  iconDiv.classList.add("iconDiv");
  // Para cada skill no array de skills
  data.itens[i]?.skills.forEach(function (skill) {
    var icon = document.createElement("i"); // Cria um elemento i
    var classes = skill.split(" "); // Divide a string em um array
    icon.classList.add(classes[0], classes[1]); // Adiciona o ícone Font Awesome ao elemento
    iconDiv.appendChild(icon); // Adiciona o ícone ao item
  });
  item.appendChild(iconDiv); // Adiciona o ícone ao item
  // Cria o elemento para os botões
  var btnDiv = document.createElement("div");
  btnDiv.classList.add("btnDiv"); // Adiciona a classe btnDiv ao elemento
  // Se o link de preview existir, cria o botão
  var btnPreview = data.itens[i]?.linkPreview
    ? document.createElement("button") // Cria o botão
    : false; // Se não, retorna false
  var btnGitHub = data.itens[i]?.linkGitHub
    ? document.createElement("button")
    : false;
  // Adiciona o elemento btnDiv ao item
  item.appendChild(btnDiv);
  // Se o link de preview existir, adiciona o link ao botão
  if (btnPreview) {
    btnPreview.type = "button"; // Define o tipo do botão
    btnPreview.classList.add("btnItens"); // Adiciona a classe btnItens ao botão
    btnPreview.textContent = "Preview"; // Adiciona o texto ao botão
    // Cria o botão de preview
    btnDiv.appendChild(btnPreview); // Adiciona o botão ao elemento btnDiv
    btnPreview.addEventListener(
      // Adiciona um evento de click ao botão
      "click",
      createClickHandler(data.itens[i].linkPreview) // Chama a função createClickHandler com o link de preview
    );
  }
  // Se o link do GitHub existir, adiciona o link ao botão
  if (btnGitHub) {
    btnGitHub.type = "button";
    btnGitHub.classList.add("btnItens");
    btnGitHub.textContent = "GitHub";
    // Cria o botão de GitHub
    btnDiv.appendChild(btnGitHub);
    btnGitHub.addEventListener(
      "click",
      createClickHandler(data.itens[i].linkGitHub)
    );
  }
  // Adiciona o item ao containerProjetos
  containerProjetos.appendChild(item);
  // Adiciona um evento de mouseover ao item
  item.addEventListener("mouseover", createMouseoverHandler(i));
  // Se a imagem do card existir, adiciona o estilo ao elemento style
  document.querySelector("style").innerHTML += data.itens[i]?.imagemIcon
    ? `.pItens:nth-child(${i + 1})::before { 
        background-image: url(${data.itens[i].imagemIcon});
    }`
    : "";
}
// Cria a função createClickHandler
function createClickHandler(link) {
  return function () {
    window.open(link, "_blank");
  };
}
// Se a imagem do card existe, define a imagem de fundo do elemento aside
function createMouseoverHandler(i) {
  return function () {
    aside.style.backgroundImage = data.itens[i]?.imagemCard
      ? "url(" + data.itens[i].imagemCard + ")"
      : "";
  };
}
