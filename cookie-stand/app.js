'use strict';

//Hour Array
var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
 
//Store my DOM node in a variable
var ulEl = document.getElementById('pike-cookie-list');
var ulEl = document.getElementById('seatac-cookie-list');
var ulEl = document.getElementById('seattlecenter-cookie-list');
var ulEl = document.getElementById('capitolhill-cookie-list');
var ulEl = document.getElementById('alki-cookie-list');

//1st and Pike Location
var firstPike = {
  name: '1st and Pike',
  mincust: 23, 
  maxcust: 65,
  avecookie: 6.3,
  cookieTotal: 0,
  randcustArr: [],
  randcookieArr: [],
  unorderedArr: [],
  randcust: function() {
    for(var i  = 0; i < hourArr.length; i++){
      var random = Math.floor(Math.random() * (this.maxcust-this.mincust) + this.mincust);
      this.randcustArr.push(random);
    }
    console.log('I am inside 1standPike-randcust');
  },
  randcookies: function() {
    for(var i = 0; i < this.randcustArr.length; i++){
     this.randcookieArr.push(Math.floor(this.randcustArr[i]*this.avecookie));
     this.cookieTotal += (this.randcookieArr[i]);
    }
    console.log('I am inside 1standPike-randcookies');
  },
  unordered: function() {
    for(var i = 0; i < hourArr.length; i++){
      this.unorderedArr.push(`${hourArr[i]}: ${this.randcookieArr[i]} cookies`);
    }
    console.log('I am inside 1standPike-unorderedArr');
    console.log(this.unorderedArr);
  },
  render: function(){
    this.randcust();
    this.randcookies();
    this.unordered();
    for(var i=0; i < hourArr.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.unorderedArr[i];
      ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `TOTAL: ${this.cookieTotal} cookies`;
    ulEl.appendChild(liEl);
  }
};
// renderfunction()
firstPike.render();
//--------------------SeaTac Airport---------------------------
var seaTac = {
  name: 'SeaTac',
  mincust: 3, 
  maxcust: 24,
  avecookie: 1.2,
  cookieTotal: 0,
  randcustArr: [],
  randcookieArr: [],
  unorderedArr: [],
  randcust: function() {
    for(var i  = 0; i < hourArr.length; i++){
      var random = Math.floor(Math.random() * (this.maxcust-this.mincust) + this.mincust);
      this.randcustArr.push(random);
    }
    console.log('I am inside SeaTac-randcust');
  },
  randcookies: function() {
    for(var i = 0; i < this.randcustArr.length; i++){
     this.randcookieArr.push(Math.floor(this.randcustArr[i]*this.avecookie));
     this.cookieTotal += (this.randcookieArr[i]);
    }
    console.log('I am inside SeaTac-randcookies');
  },
  unordered: function() {
    for(var i = 0; i < hourArr.length; i++){
      this.unorderedArr.push(`${hourArr[i]}: ${this.randcookieArr[i]} cookies`);
    }
    console.log('I am inside SeaTac-unorderedArr');
    console.log(this.unorderedArr);
  },
  render: function(){
    this.randcust();
    this.randcookies();
    this.unordered();
    for(var i=0; i < hourArr.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.unorderedArr[i];
      ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `TOTAL: ${this.cookieTotal} cookies`;
    ulEl.appendChild(liEl);
  }
};
// Render Function
seaTac.render();
//--------------------Seattle Center---------------------------
var seattleCenter = {
  name: 'Seattle Center',
  mincust: 11, 
  maxcust: 38,
  avecookie: 3.7,
  cookieTotal: 0,
  randcustArr: [],
  randcookieArr: [],
  unorderedArr: [],
  randcust: function() {
    for(var i  = 0; i < hourArr.length; i++){
      var random = Math.floor(Math.random() * (this.maxcust-this.mincust) + this.mincust);
      this.randcustArr.push(random);
    }
    console.log('I am inside Seattlecenter-randcust');
  },
  randcookies: function() {
    for(var i = 0; i < this.randcustArr.length; i++){
     this.randcookieArr.push(Math.floor(this.randcustArr[i]*this.avecookie));
     this.cookieTotal += (this.randcookieArr[i]);
    }
    console.log('I am inside Seattlecenter-randcookies');
  },
  unordered: function() {
    for(var i = 0; i < hourArr.length; i++){
      this.unorderedArr.push(`${hourArr[i]}: ${this.randcookieArr[i]} cookies`);
    }
    console.log('I am inside seattlecenter-unorderedArr');
    console.log(this.unorderedArr);
  },
  render: function(){
    this.randcust();
    this.randcookies();
    this.unordered();
    for(var i=0; i < hourArr.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.unorderedArr[i];
      ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `TOTAL: ${this.cookieTotal} cookies`;
    ulEl.appendChild(liEl);
  }
};
// renderfunction()
seattleCenter.render();
//--------------------Capitol Hill---------------------------
var capitolHill = {
  name: 'CapitolHill',
  mincust: 20, 
  maxcust: 38,
  avecookie: 2.3,
  cookieTotal: 0,
  randcustArr: [],
  randcookieArr: [],
  unorderedArr: [],
  randcust: function() {
    for(var i  = 0; i < hourArr.length; i++){
      var random = Math.floor(Math.random() * (this.maxcust-this.mincust) + this.mincust);
      this.randcustArr.push(random);
    }
    console.log('I am inside CapitolHill-randcust');
  },
  randcookies: function() {
    for(var i = 0; i < this.randcustArr.length; i++){
     this.randcookieArr.push(Math.floor(this.randcustArr[i]*this.avecookie));
     this.cookieTotal += (this.randcookieArr[i]);
    }
    console.log('I am inside CapitolHill-randcookies');
  },
  unordered: function() {
    for(var i = 0; i < hourArr.length; i++){
      this.unorderedArr.push(`${hourArr[i]}: ${this.randcookieArr[i]} cookies`);
    }
    console.log('I am inside CapitolHill-unorderedArr');
    console.log(this.unorderedArr);
  },
  render: function(){
    this.randcust();
    this.randcookies();
    this.unordered();
    for(var i=0; i < hourArr.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.unorderedArr[i];
      ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `TOTAL: ${this.cookieTotal} cookies`;
    ulEl.appendChild(liEl);
  }
};
// renderfunction()
capitolHill.render();
//-------------------------Alki------------------------------
var alki = {
  name: 'Alki',
  mincust: 2, 
  maxcust: 16,
  avecookie: 4.6,
  cookieTotal: 0,
  randcustArr: [],
  randcookieArr: [],
  unorderedArr: [],
  randcust: function() {
    for(var i  = 0; i < hourArr.length; i++){
      var random = Math.floor(Math.random() * (this.maxcust-this.mincust) + this.mincust);
      this.randcustArr.push(random);
    }
    console.log('I am inside Alki-randcust');
  },
  randcookies: function() {
    for(var i = 0; i < this.randcustArr.length; i++){
     this.randcookieArr.push(Math.floor(this.randcustArr[i]*this.avecookie));
     this.cookieTotal += (this.randcookieArr[i]);
    }
    console.log('I am inside Alki-randcookies');
  },
  unordered: function() {
    for(var i = 0; i < hourArr.length; i++){
      this.unorderedArr.push(`${hourArr[i]}: ${this.randcookieArr[i]} cookies`);
    }
    console.log('I am inside Alki-unorderedArr');
    console.log(this.unorderedArr);
  },
  render: function(){
    this.randcust();
    this.randcookies();
    this.unordered();
    for(var i=0; i < hourArr.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.unorderedArr[i];
      ulEl.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `TOTAL: ${this.cookieTotal} cookies`;
    ulEl.appendChild(liEl);
  }
};
// renderfunction()
alki.render();
