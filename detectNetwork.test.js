/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) === true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 
  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011567890123456').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011567890123456789').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6534567890123456').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6534567890123456789').should.equal('Discover');
  });

  var prefixDiscover = ['644', '645', '646', '647', '648', '649'];

  prefixDiscover.forEach(function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
      detectNetwork(prefix + '1234567890123').should.equal('Discover');
    });

    it('has a prefix of ' + prefix + ' and a length of 19', function() {
      detectNetwork(prefix + '1234567890123456').should.equal('Discover');
    });
  });

  //*****FirstSol*****
  // for(var prefix = 0; prefix < 6; prefix++) {
  //   (function(prefix) {
  //     it('has a prefix of ' + prefixDiscover[prefix] + ' and a length of 16', function() {
  //       detectNetwork(prefixDiscover[prefix] + '1234567890123').should.equal('Discover');
  //     });

  //     it('has a prefix of ' + prefixDiscover[prefix] + ' and a length of 19', function() {
  //       detectNetwork(prefixDiscover[prefix] + '1234567890123456').should.equal('Discover');
  //     });
  //   })(prefix);
  // };
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();
  var prefixMaestro = ['5018', '5020', '5038', '6304'];
  var leng = '012345678901234567890';

  //*****FirstSol*****
  // for(var j = 0; j < 4; j++) {
  //   (function(j) {    
  //     for(var len = 12; len < 20; len++) {
  //       (function(len) {
  //         it('has a prefix of ' + prefixMaestro[j] + ' and a length of ' + len, function() {
  //           detectNetwork(prefixMaestro[j] + length.slice(5, len + 1)).should.equal('Maestro');
  //         });
  //       })(len)
  //     }
  //   })(j)
  // };

  prefixMaestro.forEach(function(prefix) {
    for(var len = 12; len < 20; len++) {
      (function(len) {
        it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
          detectNetwork(prefix + leng.slice(5, len + 1)).should.equal('Maestro');
        });
      })(len);
    }
  });

  //*****FirstSol*****
  // prefixMaestro.forEach(function(i) {
  //   it('has a prefix of ' + i + ' and a length of 12', function() {
  //     detectNetwork(i + '56789012').should.equal('Maestro');
  //   });

  //   it('has a prefix of ' + i + ' and a length of 13', function() {
  //     detectNetwork(i + '567890123').should.equal('Maestro');
  //   });

  //   it('has a prefix of ' + i + ' and a length of 14', function() {
  //     detectNetwork(i + '5678901234').should.equal('Maestro');
  //   });

  //   it('has a prefix of ' + i + ' and a length of 15', function() {
  //     detectNetwork(i + '56789012345').should.equal('Maestro');
  //   });

  //   it('has a prefix of ' + i + ' and a length of 16', function() {
  //     detectNetwork(i + '567890123456').should.equal('Maestro');
  //   });

  //   it('has a prefix of ' + i + ' and a length of 17', function() {
  //     detectNetwork(i + '5678901234567').should.equal('Maestro');
  //   });

  //   it('has a prefix of ' + i + ' and a length of 18', function() {
  //     detectNetwork(i + '56789012345678').should.equal('Maestro');
  //   });

  //   it('has a prefix of ' + i + ' and a length of 19', function() {
  //     detectNetwork(i + '567890123456789').should.equal('Maestro');
  //   });
  // });

  //*****SecondSol*****
  // for(var i = 0; i < 4; i++) {
  //   (function(i) {
  //     it('has a prefix of ' + prefixMaestro[i] + ' and a length of 12', function() {
  //       detectNetwork(prefixMaestro[i] + '56789012').should.equal('Maestro');
  //     });

  //     it('has a prefix of ' + prefixMaestro[i] + ' and a length of 13', function() {
  //       detectNetwork(prefixMaestro[i] + '567890123').should.equal('Maestro');
  //     });

  //     it('has a prefix of ' + prefixMaestro[i] + ' and a length of 14', function() {
  //       detectNetwork(prefixMaestro[i] + '5678901234').should.equal('Maestro');
  //     });

  //     it('has a prefix of ' + prefixMaestro[i] + ' and a length of 15', function() {
  //       detectNetwork(prefixMaestro[i] + '56789012345').should.equal('Maestro');
  //     });

  //     it('has a prefix of ' + prefixMaestro[i] + ' and a length of 16', function() {
  //       detectNetwork(prefixMaestro[i] + '567890123456').should.equal('Maestro');
  //     });

  //     it('has a prefix of ' + prefixMaestro[i] + ' and a length of 17', function() {
  //       detectNetwork(prefixMaestro[i] + '5678901234567').should.equal('Maestro');
  //     });

  //     it('has a prefix of ' + prefixMaestro[i] + ' and a length of 18', function() {
  //       detectNetwork(prefixMaestro[i] + '56789012345678').should.equal('Maestro');
  //     });

  //     it('has a prefix of ' + prefixMaestro[i] + ' and a length of 19', function() {
  //       detectNetwork(prefixMaestro[i] + '567890123456789').should.equal('Maestro');
  //     });
  //   })(i);
  // };
});

describe('China UnionPay', function() {
  var should = chai.should();
  var leng = '0123456789012345678901234567890';
  var prefixChina = ['624', '625', '626'];

  for (var pref = 622126; pref <= 622925; pref++) {
    prefixChina.push(pref.toString());
  }

  for (var pref1 = 6282; pref1 <= 6288; pref1++) {
    prefixChina.push(pref1.toString());
  }

  prefixChina.forEach(function(prefix) {
    for (var len = 16; len < 20; len++) {
      (function(len) {
        it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
          detectNetwork(prefix + leng.slice(prefix.length + 1, len + 1)).should.equal('China UnionPay');
        });
      })(len);
    }
  });
});

describe('Switch', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();
  var leng = '0123456789012345678901234567890';
  var len = [16, 18, 19];
  var prefixSwitch = ['4903', '4905', '4911', '4936', '6333', '6759', '564182', '633110'];

  prefixSwitch.forEach(function(prefix) {
    for(var ind = 0; ind < 3; ind++) {
      (function(ind) {
        it('has a prefix of ' + prefix + ' and a length of ' + len[ind], function() {
          detectNetwork(prefix + leng.slice(prefix.length + 1, len[ind] + 1)).should.equal('Switch');
        });
      })(ind);
    }
  });
});

