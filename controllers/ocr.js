const { map, uniq, orderBy } = require('lodash');
const db = require('../helpers/db');

module.exports = {
  index: {
    handler(request, reply) {
      db.ocr.find({}, (err, data) => {
        if (err) console.log(err);
        let tabs = map(data, 'TAB');
        const results = orderBy(data, ['RANK'], ['asc']);
        tabs = uniq(tabs);
        reply({ tabs, results });
      });
    },
  },
};
