
document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const actualPosition = window.scrollY;

        if (actualPosition < heroHeight) {
            hideHeaderItems();
        } else {
            showHeaderItems();
        }
    });

    // Seção SPACES – tabs
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            const targetTab = event.currentTarget.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id="${targetTab}"]`);

            if (!tab) return;

            hideAllTabs();
            removeActiveButton();

            tab.classList.add('spaces__list--active');
            event.currentTarget.classList.add('spaces__tabs__button--active');
        });
    }

    // Seção FAQ
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', toggleAnswer);
    }
});

function hideHeaderItems(){
    const header = document.querySelector('header');
    header.classList.add('header--hidden');
}

function showHeaderItems(){
    const header = document.querySelector('header');
    header.classList.remove('header--hidden');
}

function toggleAnswer(e){
    const classe = 'faq__questions__item--open';
    const parentE = e.target.parentNode;

    parentE.classList.toggle(classe);
}

function removeActiveButton(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('spaces__tabs__button--active');
    }
}

function hideAllTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('spaces__list--active');
    }
}