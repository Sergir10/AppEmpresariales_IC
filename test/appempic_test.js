'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('Nombre debe ser Sergio', function () {
    appempic.getName().should.equal('Sergio');
  });

  it('Apellido debe ser Giraldo', function () {
    appempic.getLastName().should.equal('Giraldo');
  });

});
