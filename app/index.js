import 'whatwg-fetch';
import Isotope from 'isotope-layout';
import matchesSelector from 'desandro-matches-selector/matches-selector';

console.log('Hi! Thanks for looking at my work. I am currently seeking freelance and full-time employment. Give me a call at (615) 881-2748 or email me at stephanie.n.winn@gmail.com. Look forward to talking!');

// const elem = document.querySelector('.grid');
const iso = new Isotope('.grid', {
  itemSelector: '.grid__item',
  layoutMode: 'fitRows'
});

const filterFns = {
  art(itemType) {
    const art =
  itemType.querySelector('.art').textContent;

    return art.match(art);
  }
};

const filterType =
document.querySelector('.filters-button-group');
filterType.addEventListener('click',
(event) => {
  if (!matchesSelector(event.target, 'button')) {
    return;
  }
  let filterValue = event.target.getAttribute('data-filter');
  filterValue = filterFns[filterValue] || filterValue;
  iso.arrange({ filter: filterValue });
});
