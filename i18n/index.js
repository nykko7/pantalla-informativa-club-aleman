var en = require('./en.json');
var de = require('./de.json');
var es = require('./es.json');

const i18n = {
	translations: {
		en,
		de,
		es,
	},
	defaultLang: 'es',
	useBrowserDefault: true,
};

module.exports = i18n;
