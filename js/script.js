// Criando Navegação por Tabs = Associando imagem a descrição => Relação 1x1
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if (tabMenu.length && tabContent.length) {
    // Primeiro Item Animais ativo
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });

        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });
}


