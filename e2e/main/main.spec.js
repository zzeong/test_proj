'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('\'Allo, \'Allo!'); // phantom.js 코드 (코드로 브라우저를 테스트한다. not gui 실제로 브라우저를 띄워서 검사를 하는데 창이 없을뿐.)
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });
});
