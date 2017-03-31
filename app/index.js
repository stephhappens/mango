import 'whatwg-fetch';

const Shuffle = window.shuffle;

const el = function (element) {
  this.element = element;


  this.addShuffleEventListerners();

  this.Shuffle = new Shuffle(element, {
    itemSelector: '.picture-item',
    sizer: element.querySelector('.my-sizer-element'),
  });

  this._activeFilters = [];

  this.addFilterButtons();
  this.addSorting();

  this.mode = 'exclusive';
};
