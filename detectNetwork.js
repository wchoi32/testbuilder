// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  // ***** Diner's Club *****

  if ((cardNumber.startsWith('38') || cardNumber.startsWith('39')) && cardNumber.length === 14) {
  	return 'Diner\'s Club';
  } 

  // ***** American Express *****

  if ((cardNumber.startsWith('34') || cardNumber.startsWith('37')) && cardNumber.length === 15) {
  	return 'American Express';
  } 

  // ***** Master Card *****

  var masterPrefix = ['51', '52', '53', '54', '55'];

  for (var i = 0; i < 5; i++) {
    if (cardNumber.startsWith(masterPrefix[i]) && cardNumber.length === 16) {
      return 'MasterCard';
    }
  }

  // ***** Discover *****

  var discoverPrefix = ['6011', '644', '645', '646', '647', '648', '649', '65'];

  for (var j = 0; j < 8; j++) {
    if (cardNumber.startsWith(discoverPrefix[j]) && (cardNumber.length === 16 || cardNumber.length === 19)) {
      return 'Discover';
    }
  }

  // ***** Maestro *****

  var maestroPrefix = ['5018', '5020', '5038', '6304']

  for (var k = 0; k < 4; k++) {
    for (var len = 12; len < 20; len++) {
      if (cardNumber.startsWith(maestroPrefix[k]) && (cardNumber.length === len)) {
        return 'Maestro';
      }
    }
  }

  // ***** China UnionPay *****

  var chinaPrefix = ['624', '625', '626'];

  for (var pref = 622126; pref <= 622925; pref++) {
    chinaPrefix.push(pref.toString());
  }

  for (var pref1 = 6282; pref1 <= 6288; pref1++) {
    chinaPrefix.push(pref1.toString());
  }

  for (var l = 0; l < chinaPrefix.length; l++) {
    for (var len = 16; len < 20; len++) {
      if (cardNumber.startsWith(chinaPrefix[l]) && (cardNumber.length === len)) {
        return 'China UnionPay';
      }
    }
  }

  // ***** Switch *****

  var switchPrefix = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  var switchLength = [16, 18, 19];

  for (var m = 0; m < switchPrefix.length; m++) {
    for (var len = 0; len < 3; len++) {
      if (cardNumber.startsWith(switchPrefix[m]) && (cardNumber.length === switchLength[len])) {
        return 'Switch';
      }
    }
  }

  // ***** Visa *****

  if (cardNumber.startsWith('4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  }

}