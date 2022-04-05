function initTabNav() {
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
}

initTabNav();

function initAccordion() {
    // Criando Acordion List
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass); // Primeiro item ativo DT
        accordionList[0].nextElementSibling.classList.add(activeClass); // Primeiro item ativo DD

        function activeAccordion(event) {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();

function initSmoothScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        // const windowTop = section.offsetTop;

        // Scroll suave para a seção
        // window.scrollTo({
        //     top: windowTop,
        //     behavior: 'smooth',
        // });

        // Forma alternativa para o scroll suave
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initSmoothScroll();

function initScrollAnimation() {
    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {

        const halfHeightWindow = window.innerHeight * 0.6;

        function scrollAnimation() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - halfHeightWindow) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }

        scrollAnimation();

        window.addEventListener('scroll', scrollAnimation);
    }
}

initScrollAnimation();
