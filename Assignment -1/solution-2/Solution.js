var expectCountryNames = function(expectedNames, key) {
    element.all(by.repeater(key + ' in friends').column(key + '.name')).then(function(arr) {
      arr.forEach(function(wd, i) {
        expect(wd.getText()).toMatch(expectedNames[i]);
      });
    });
  };