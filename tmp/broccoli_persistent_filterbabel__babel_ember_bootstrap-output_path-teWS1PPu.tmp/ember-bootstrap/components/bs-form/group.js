define('ember-bootstrap/components/bs-form/group', ['exports', 'ember-bootstrap/components/base/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = Ember.computed;
  exports.default = _group.default.extend({
    classNames: ['form-group'],
    classNameBindings: ['hasFeedback'],

    classTypePrefix: 'form-group',

    _validationType: computed.readOnly('validation')
  });
});