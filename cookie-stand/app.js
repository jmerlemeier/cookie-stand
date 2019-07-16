'use strict';

//Hour Array
var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Total Cookies

 
//Store my DOM node in a variable
var ulEl = document.getElementById('pink-cookie-list');

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
    console.log('I am inside randcust');
  },
  randcookies: function() {
    for(var i = 0; i < this.randcustArr.length; i++){
     this.randcookieArr.push(Math.floor(this.randcustArr[i]*this.avecookie));
     this.cookieTotal += (this.randcookieArr[i]);
    }
    console.log('I am inside randcookies');
    // console.log(cookieTotal);
  },
  unordered: function() {
    for(var i = 0; i < hourArr.length; i++){
      this.unorderedArr.push(`${hourArr[i]}: ${this.randcookieArr[i]} cookies`);
    }
    console.log('I am inside unorderedArr');
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
// Rendering Functions/Executable Code
// renderfunction()
firstPike.render();

//--------------------SeaTac Airport---------------------------
var seaTac = {
  mincust: 3, 
  maxcust: 24,
  avecookie: 1.2,
  // methodtogeneratecookie: ,
};
// renderfunction()

//--------------------Seattle Center---------------------------
var seattleCenter = {
  mincust: 11, 
  maxcust: 38,
  avecookie: 3.7,
  // methodtogeneratecookie: ,
};
// renderfunction()

//--------------------Capitol Hill---------------------------
var CapitolHill = {
  mincust: 20, 
  maxcust: 38,
  avecookie: 2.3,
  // methodtogeneratecookie: ,
};
// renderfunction()

//-------------------------Alki------------------------------
var alki = {
  mincust: 2, 
  maxcust: 16,
  avecookie: 4.6,
  // methodtogeneratecookie: ,
};
// renderfunction()
