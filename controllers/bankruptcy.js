const { map, uniq } = require('lodash');
const db = require('../helpers/db');

module.exports = {
  index: {
    handler(request, reply) {
      db.bankruptcy.find({}, (err, results) => {
        let tabs = map(results, 'TAB');
        tabs = uniq(tabs);
        reply({ tabs, results });
      });
    },
  },
};
