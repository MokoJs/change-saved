var expect = require('expect.js'),
    moko = require('moko'),
    co = require('co');

var changeSaved = require('../');


var User = new moko('User');

User.attr('id').attr('name');

User.save = User.update = function*() { };

describe('moko-change-saved', function() {
  it('is a moko plugin', function() {
    User.use(changeSaved);
  });

  it('adds a ":attr change saved" event to Model', function(done) {
    co(function*() {
      var bob = yield new User({name: 'Bob'});
      User.once('name change saved', function(instance, val) {
        expect(instance).to.be(bob);
        expect(val).to.be('Bob');
        done();
      });
      yield bob.save();
    })();
  });

  it('adds a ":attr change saved" event to instance', function(done) {
    co(function*() {
      var sam = yield new User({name: 'Sam'});
      sam.once('name change saved', function(val) {
        expect(val).to.be('Sam');
        done();
      });
      yield sam.save();
    })();
  });
});
