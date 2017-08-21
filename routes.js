const requireDirectory = require('require-directory');

module.exports = () => {
  const controller = requireDirectory(module, './controllers');
  const routeTable = [{
    method: 'GET',
    path: '/bankruptcy',
    config: controller.bankruptcy.index,
  },
  {
    method: 'GET',
    path: '/out_of_court',
    config: controller.ocr.index,
  }];
  return routeTable;
};
