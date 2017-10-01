var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    lessOptions: {
      paths: [
        'bower_components/bootstrap/less'
      ]
    }
  });

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');

  return app.toTree();
};
