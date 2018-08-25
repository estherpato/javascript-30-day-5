'use strict';

const panels = document.querySelectorAll('.panel');

function handleClick(event) {
    const panelClicked = event.currentTarget;
    const children = panelClicked.children[0];
    console.log(children);
    panelClicked.classList.toggle('open');
    children.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', handleClick));