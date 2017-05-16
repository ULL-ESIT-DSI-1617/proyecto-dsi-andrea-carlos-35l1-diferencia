var Diferencia = require('../lib/Diferencia.js');
var should = require('should');

describe("Función igual", function(){
  it("La función igual debe devolver los elementos comunes entre sec1 y sec2", function() {
    var sec1 = [1, 2, 3];
    var sec2 = [2, 3, 4];
    var result = Diferencia(sec1, sec2)
    result.should.be.equal('1, 4');
  })

})
