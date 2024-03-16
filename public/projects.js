var data = {
    quantidade: 9,
    itens: [
        {
            nome: 'Mario Jump',
            imagemIcon: './images/projects/mario-jump-icon.png',
            imagemCard: './images/projects/mario-jump-card.png',
            linkGitHub: 'https://github.com/NianCode/mario-jump',
            linkPreview: 'https://nian-code.web.app/mariojump',
            skills: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square', 'fas fa-database', 'fas fa-server']

        },
        {
            nome: 'Rough Bot',
            imagemIcon: './images/projects/rough-bot-icon.png',
            imagemCard: './images/projects/rough-bot-card.png',
            linkGitHub: 'https://github.com/NianCode/rough-bot',
            skills: ['fab fa-js-square', 'fab fa-node', 'fab fa-discord', 'fas fa-cogs']
        },
        {
            nome: 'Nian Code',
            imagemIcon: './images/nian-code.png',
            imagemCard: './images/projects/mario-jump-card.png',
        }
    ]
};

var aside = document.querySelector('aside');
var containerProjetos = document.querySelector('.containerProjetos');

//  //
//  //
//  //
//  //

for (var i = 0; i < data.quantidade; i++) {
    // Cria o item
    var item = document.createElement('div');
    item.classList.add('pItens');

    // Cria o elemento para o nome
    var nomeElement = document.createElement('div');
    var nome = data.itens[i] && data.itens[i].nome ? data.itens[i].nome : `...`;

    nomeElement.textContent = nome; // Adiciona o nome ao elemento .pItens
    item.appendChild(nomeElement); // Adiciona o nome ao item


    var iconDiv = document.createElement('div');
    iconDiv.classList.add('iconDiv');

    if (data.itens[i] && data.itens[i].skills) {
        data.itens[i].skills.forEach(function (skill) {
            var icon = document.createElement('i');
            var classes = skill.split(' ');
            icon.classList.add(classes[0], classes[1]); // Adiciona o ícone Font Awesome

            iconDiv.appendChild(icon);
        });
    }

    item.appendChild(iconDiv);

    var btnDiv = document.createElement('div');
    btnDiv.classList.add('btnDiv');

    var btnPreview = document.createElement('button');
    btnPreview.type = 'button';
    btnPreview.classList.add('btnItens');
    btnPreview.textContent = 'Preview';

    var btnGitHub = document.createElement('button');
    btnGitHub.type = 'button';
    btnGitHub.classList.add('btnItens');
    btnGitHub.textContent = 'GitHub';

    item.appendChild(btnDiv);

    // Se o link de preview existir, adiciona o link ao botão
    if (data.itens[i] && data.itens[i].linkPreview) {
        // Cria o botão de preview
        btnDiv.appendChild(btnPreview);
        btnPreview.addEventListener('click', createClickHandler(data.itens[i].linkPreview));
    }

    // Se o link do GitHub existir, adiciona o link ao botão
    if (data.itens[i] && data.itens[i].linkGitHub) {
        // Cria o botão de GitHub
        btnDiv.appendChild(btnGitHub);
        btnGitHub.addEventListener('click', createClickHandler(data.itens[i].linkGitHub));
    }

    // Adiciona o item ao container
    containerProjetos.appendChild(item);

    item.addEventListener('mouseover', createMouseoverHandler(i));

    var style = document.createElement('style');

    if (data.itens[i] && data.itens[i].imagemIcon) {
        style.innerHTML = `
        .pItens:nth-child(${i + 1})::before {
            background-image: url(${data.itens[i].imagemIcon});
        }
        `;
        document.head.appendChild(style);
    }
}

function createClickHandler(link) {
    return function () {
        window.open(link, '_blank');
    };
}

function createMouseoverHandler(i) {
    return function () {
        // Se a imagem do card existe, define a imagem de fundo do elemento aside
        if (data.itens[i] && data.itens[i].imagemCard) {
            aside.style.backgroundImage = 'url(' + data.itens[i].imagemCard + ')';
        } else {
            aside.style.backgroundImage = '';
        }
    };
}