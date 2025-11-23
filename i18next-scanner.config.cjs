const fs = require('fs');

module.exports = {
  input: ['src/**/*.{js,ts,jsx,tsx}', '!src/**/*.test.{js,ts,jsx,tsx}'],
  output: './i18n/$LOCALE.json',
  options: {
    removeUnusedKeys: false,
    sort: true,
    func: { list: ['t', 'i18n.t'], extensions: ['.js', '.ts', '.jsx', '.tsx'] },
    lngs: ['en'],
    ns: ['translation'],
    resource: { loadPath: 'i18n/{{lng}}.json', savePath: 'i18n/{{lng}}.json', jsonIndent: 2 },
    keySeparator: false,
    nsSeparator: false,
    debug: false,
    transform: function(file, enc, done) {
      const parser = this.parser;
      parser.parse(file, enc, function() {
        fs.writeFileSync('./i18n/used-keys.json', JSON.stringify(parser.keys(), null, 2));
        done();
      });
    }
  }
};