'use strict';

var generateUniqueId = {
  defaultOpts: {
    length: 10,
    useLetters: true,
    useNumbers: true,
    includeSymbols: [],
    excludeSymbols: []
  },
  init: function (opts={}) {
    this.config = Object.assign({}, this.defaultOpts, opts);
    let mainArr = [];
    let lettersArr = [];
    let numbersArr = [];

    if (this.config.useLetters) {
      if (this.config.excludeSymbols.length) this.filterSymbols('letters');
      lettersArr = this.letters.split('');
    }

    if (this.config.useNumbers) {
      if (this.config.excludeSymbols.length) this.filterSymbols('numbers');
      numbersArr = this.numbers.split('');
    }

    this.pool = mainArr.concat(lettersArr, numbersArr, this.config.includeSymbols);

    return this.createID();
  },
  letters: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  pool: [],
  filterSymbols: function(group) {
    this.config.excludeSymbols.map(item => this[group] = this[group].replace(item, ''));
  },
  getRandomNumber: function() {
    return Math.floor(Math.random()*this.pool.length);
  },
  createID: function() {
    let id = '';
    for (let i=0;i<this.config.length;i++){
      id += this.pool[this.getRandomNumber()];
    }

    return id;
  }
}

module.exports = generateUniqueId;
