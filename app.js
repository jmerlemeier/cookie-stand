'use strict';

// Hour Array
var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
 
// store my DOM node in a variable
var ulEL = document.getElementById()
// 1st and Pike Location
var firstPike = {
  name: '1st and Pike',
  mincust: 23, 
  maxcust: 65,
  avecookie: 6.3,
  randcustArr: [],
  randcust: function() {
    for(var i  = 0; i < hourArr.length; i++){
      var random = Math.floor(Math.random() * (this.maxcust-this.mincust) + this.mincust);
      this.randcustArr.push(random);
    }
    console.log('I am inside randcust');
  },
  randcookieArr: [],
  randcookies: function() {
    for(var i = 0; i < this.randcustArr.length; i++){
     this.randcookieArr.push(Math.floor(this.randcustArr[i]*this.avecookie));
    }
    console.log('I am inside randcookies');
  },
  unorderedArr: [],
  unordered: function() {
    for(var i = 0; i < hourArr.length; i++){
      this.unorderedArr.push(`${hourArr[i]}: ${this.randcookieArr[i]} cookies`);
    }
    console.log('I am inside unorderedArr');
    console.log(this.unorderedArr);
  }
};

firstPike.randcust();
firstPike.randcookies();
firstPike.unordered();

// renderfunction()

// SeaTac Airport
var seaTac = {
  mincust: 3, 
  maxcust: 24,
  avecookie: 1.2,
  // methodtogeneratecookie: ,
};
// renderfunction()

// Seattle Center
var seattleCenter = {
  mincust: 11, 
  maxcust: 38,
  avecookie: 3.7,
  // methodtogeneratecookie: ,
};
// renderfunction()

// Capitol Hill
var CapitolHill = {
  mincust: 20, 
  maxcust: 38,
  avecookie: 2.3,
  // methodtogeneratecookie: ,
};
// renderfunction()

// Alki
var alki = {
  mincust: 2, 
  maxcust: 16,
  avecookie: 4.6,
  // methodtogeneratecookie: ,
};
// renderfunction()
