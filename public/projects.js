var data = {
    quantidade: 8,
    itens: [
        {
            nome: 'Mario Jump',
            imagemIcon: './images/projects/mario-jump-icon.png',
            imagemCard: './images/projects/mario-jump-card.png',
            linkGitHub: 'https://github.com/NianCode/mario-jump',
            linkPreview: 'https://nian-code.web.app/mariojump'
        },
        {
            nome: 'Rough Bot',
            imagemIcon: './images/projects/rough-bot-icon.png',
            imagemCard: './images/projects/rough-bot-card.png',
            linkGitHub: 'https://github.com/NianCode/rough-bot',
            linkPreview: 'https://github.com/NianCode/rough-bot'
        }
    ]
};

var aside = document.querySelector('aside');
var icons = document.querySelectorAll('.pItens');
var btnIcons = document.querySelectorAll('.btnItens');
var containerProjetos = document.querySelector('.containerProjetos');

//  //
//  //
//  //
//  //

for (var i = 0; i < data.quantidade; i++) {
    // Cria o item
    var item = document.createElement('div');
    item.classList.add('pItens');

    // Usa a imagem do item se ela existir, caso contrário usa uma imagem padrão
    if (data.itens[i] && data.itens[i].imagemIcon) {
        item.style.backgroundImage = 'url(' + data.itens[i].imagemIcon + ')';
    }

    // Cria o botão de preview
    var btnPreview = document.createElement('button');
    btnPreview.type = 'button';
    btnPreview.classList.add('btnItens');
    btnPreview.textContent = 'Preview';

    // Cria o botão de GitHub
    var btnGitHub = document.createElement('button');
    btnGitHub.type = 'button';
    btnGitHub.classList.add('btnItens');
    btnGitHub.textContent = 'GitHub';


    // Adiciona os botões ao item
    item.appendChild(btnPreview);
    item.appendChild(btnGitHub);

    // Se o link de preview existir, adiciona o link ao botão
    if (data.itens[i] && data.itens[i].linkPreview) {
        btnPreview.addEventListener('click', createClickHandler(data.itens[i].linkPreview));
    }

    // Se o link do GitHub existir, adiciona o link ao botão
    if (data.itens[i] && data.itens[i].linkGitHub) {
        btnGitHub.addEventListener('click', createClickHandler(data.itens[i].linkGitHub));
    }

    // Adiciona o item ao container
    containerProjetos.appendChild(item);

    // Adiciona o nome ao ::before do item
    var style = document.createElement('style');
    var nome = data.itens[i] && data.itens[i].nome ? data.itens[i].nome : `...`;
    style.innerHTML = `
    .pItens:nth-child(${i + 1})::before {
        content: "${nome}";
    }
`;
    document.head.appendChild(style);

    item.addEventListener('mouseover', createMouseoverHandler(i));
}

function createClickHandler(link) {
    return function () {
        window.open(link, '_blank');
    };
}

function createMouseoverHandler(i) {
    return function () {
        // Remove as classes 'upscale' e 'semBefore' de todos os itens
        var allItems = document.querySelectorAll('.pItens');
        allItems.forEach(function (el) {
            el.classList.remove('upscale');
            el.classList.remove('semBefore');
        });

        // Remove a classe 'display' e adiciona a classe 'noDisplay' a todos os botões
        var allButtons = document.querySelectorAll('.btnItens');
        allButtons.forEach(function (botao) {
            botao.classList.remove('display');
            botao.classList.add('noDisplay');
        });

        // Adiciona a classe 'display' e remove a classe 'noDisplay' dos botões deste item
        var thisButtons = this.querySelectorAll('.btnItens');
        thisButtons.forEach(function (botao) {
            botao.classList.remove('noDisplay');
            botao.classList.add('display');
        });

        // Adiciona as classes 'upscale' e 'semBefore' a este item
        this.classList.add('upscale');
        this.classList.add('semBefore');

        // Se a imagem do card existe, define a imagem de fundo do elemento aside
        if (data.itens[i] && data.itens[i].imagemCard) {
            aside.style.backgroundImage = 'url(' + data.itens[i].imagemCard + ')';
        } else {
            aside.style.backgroundImage = '';
        }
    };
}