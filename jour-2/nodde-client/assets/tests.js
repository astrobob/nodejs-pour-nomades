define('nodde-client/tests/answer/answer-question/component.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - answer/answer-question');
  test('answer/answer-question/component.js should pass jscs', function () {
    ok(true, 'answer/answer-question/component.js should pass jscs.');
  });
});
define('nodde-client/tests/answer/answer-question/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - answer/answer-question');
  QUnit.test('answer/answer-question/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'answer/answer-question/component.js should pass jshint.');
  });
});
define('nodde-client/tests/answer/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - answer');
  test('answer/controller.js should pass jscs', function () {
    ok(true, 'answer/controller.js should pass jscs.');
  });
});
define('nodde-client/tests/answer/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - answer');
  QUnit.test('answer/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'answer/controller.js should pass jshint.');
  });
});
define('nodde-client/tests/answer/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - answer');
  test('answer/route.js should pass jscs', function () {
    ok(false, 'answer/route.js should pass jscs.\ndisallowMultipleLineBreaks: ; and export should have at most 2 line(s) between them at answer/route.js :\n     1 |import Ember from \'ember\';\n     2 |import AuthenticatedRouteMixin from \'ember-simple-auth/mixins/authenticated-route-mixin\';\n-------------------------------------------------------------------------------------------------^\n     3 |\n     4 |\nrequireCamelCaseOrUpperCaseIdentifiers: All identifiers must be camelCase or UPPER_CASE at answer/route.js :\n     5 |export default Ember.Route.extend(AuthenticatedRouteMixin , {\n     6 |  model(params) {\n     7 |    return this.store.find(\'pool\', params.pool_id);\n--------------------------------------------------^\n     8 |  }\n     9 |});');
  });
});
define('nodde-client/tests/answer/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - answer');
  QUnit.test('answer/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'answer/route.js should pass jshint.');
  });
});
define('nodde-client/tests/app.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('app.js should pass jscs', function () {
    ok(true, 'app.js should pass jscs.');
  });
});
define('nodde-client/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('nodde-client/tests/application/adapter.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - application');
  test('application/adapter.js should pass jscs', function () {
    ok(true, 'application/adapter.js should pass jscs.');
  });
});
define('nodde-client/tests/application/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/adapter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/adapter.js should pass jshint.');
  });
});
define('nodde-client/tests/application/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - application');
  test('application/route.js should pass jscs', function () {
    ok(false, 'application/route.js should pass jscs.\ndisallowMultipleLineBreaks: ; and export should have at most 2 line(s) between them at application/route.js :\n     6 |  inject\n     7 |  } = Ember;\n     8 |const { service } = inject;\n-----------------------------------^\n     9 |\n    10 |\nrequireSpaceBeforeBlockStatements: One (or more) spaces required before opening brace for block expressions at application/route.js :\n    13 |  currentUser: service(),\n    14 |\n    15 |  beforeModel(){\n-----------------------^\n    16 |    this._super(...arguments);\n    17 |    if (this.get(\'session.session.isAuthenticated\')) {\nrequireSpacesInFunction: Missing space before opening curly brace at application/route.js :\n    13 |  currentUser: service(),\n    14 |\n    15 |  beforeModel(){\n-----------------------^\n    16 |    this._super(...arguments);\n    17 |    if (this.get(\'session.session.isAuthenticated\')) {\ndisallowMultipleLineBreaks: , and _populateCurrentUser should have at most 2 line(s) between them at application/route.js :\n    24 |      this._populateCurrentUser();\n    25 |    }\n    26 |  }),\n-------------^\n    27 |\n    28 |\nrequireSpaceBeforeBlockStatements: One (or more) spaces required before opening brace for block expressions at application/route.js :\n    27 |\n    28 |\n    29 |  _populateCurrentUser(){\n--------------------------------^\n    30 |    console.log(\'_populateCurrentUser\');\n    31 |    let authenticator = this.container.lookup(\'authenticator:jwt\');\nrequireSpacesInFunction: Missing space before opening curly brace at application/route.js :\n    27 |\n    28 |\n    29 |  _populateCurrentUser(){\n--------------------------------^\n    30 |    console.log(\'_populateCurrentUser\');\n    31 |    let authenticator = this.container.lookup(\'authenticator:jwt\');');
  });
});
define('nodde-client/tests/application/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass jshint.');
  });
});
define('nodde-client/tests/components/default-toolbar/component.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components/default-toolbar');
  test('components/default-toolbar/component.js should pass jscs', function () {
    ok(true, 'components/default-toolbar/component.js should pass jscs.');
  });
});
define('nodde-client/tests/components/default-toolbar/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/default-toolbar');
  QUnit.test('components/default-toolbar/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/default-toolbar/component.js should pass jshint.');
  });
});
define('nodde-client/tests/components/line-edit/component.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components/line-edit');
  test('components/line-edit/component.js should pass jscs', function () {
    ok(false, 'components/line-edit/component.js should pass jscs.\nvalidateIndentation: Expected indentation of 8 characters at components/line-edit/component.js :\n    42 |          break;\n    43 |        default:\n    44 |          // do nothing\n----------------^\n    45 |      }\n    46 |    },');
  });
});
define('nodde-client/tests/components/line-edit/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/line-edit');
  QUnit.test('components/line-edit/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/line-edit/component.js should pass jshint.');
  });
});
define('nodde-client/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('nodde-client/tests/helpers/destroy-app.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/destroy-app.js should pass jscs', function () {
    ok(true, 'helpers/destroy-app.js should pass jscs.');
  });
});
define('nodde-client/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('nodde-client/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;
});
define('nodde-client/tests/helpers/ember-sortable/test-helpers', ['exports', 'ember-sortable/helpers/drag', 'ember-sortable/helpers/reorder'], function (exports, _emberSortableHelpersDrag, _emberSortableHelpersReorder) {});
define('nodde-client/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'nodde-client/tests/helpers/start-app', 'nodde-client/tests/helpers/destroy-app'], function (exports, _qunit, _noddeClientTestsHelpersStartApp, _noddeClientTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _noddeClientTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _noddeClientTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('nodde-client/tests/helpers/module-for-acceptance.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/module-for-acceptance.js should pass jscs', function () {
    ok(false, 'helpers/module-for-acceptance.js should pass jscs.\nrequireSpread: Illegal use of apply method. Use the spread operator instead at helpers/module-for-acceptance.js :\n     9 |\n    10 |      if (options.beforeEach) {\n    11 |        options.beforeEach.apply(this, arguments);\n-----------------------------------^\n    12 |      }\n    13 |    },\nrequireSpread: Illegal use of apply method. Use the spread operator instead at helpers/module-for-acceptance.js :\n    17 |\n    18 |      if (options.afterEach) {\n    19 |        options.afterEach.apply(this, arguments);\n----------------------------------^\n    20 |      }\n    21 |    }');
  });
});
define('nodde-client/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('nodde-client/tests/helpers/resolver', ['exports', 'nodde-client/resolver', 'nodde-client/config/environment'], function (exports, _noddeClientResolver, _noddeClientConfigEnvironment) {

  var resolver = _noddeClientResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _noddeClientConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _noddeClientConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('nodde-client/tests/helpers/resolver.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/resolver.js should pass jscs', function () {
    ok(true, 'helpers/resolver.js should pass jscs.');
  });
});
define('nodde-client/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('nodde-client/tests/helpers/start-app', ['exports', 'ember', 'nodde-client/app', 'nodde-client/config/environment'], function (exports, _ember, _noddeClientApp, _noddeClientConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _noddeClientConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _noddeClientApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('nodde-client/tests/helpers/start-app.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/start-app.js should pass jscs', function () {
    ok(true, 'helpers/start-app.js should pass jscs.');
  });
});
define('nodde-client/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('nodde-client/tests/integration/components/answer-question/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('answer-question', 'Integration | Component | answer question', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 19
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'answer-question', ['loc', [null, [1, 0], [1, 19]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'answer-question', [], [], 0, null, ['loc', [null, [2, 4], [4, 24]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('nodde-client/tests/integration/components/answer-question/component-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - integration/components/answer-question');
  test('integration/components/answer-question/component-test.js should pass jscs', function () {
    ok(true, 'integration/components/answer-question/component-test.js should pass jscs.');
  });
});
define('nodde-client/tests/integration/components/answer-question/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/answer-question');
  QUnit.test('integration/components/answer-question/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/answer-question/component-test.js should pass jshint.');
  });
});
define('nodde-client/tests/integration/components/default-toolbar/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('default-toolbar', 'Integration | Component | default toolbar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 19
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'default-toolbar', ['loc', [null, [1, 0], [1, 19]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'default-toolbar', [], [], 0, null, ['loc', [null, [2, 4], [4, 24]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('nodde-client/tests/integration/components/default-toolbar/component-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - integration/components/default-toolbar');
  test('integration/components/default-toolbar/component-test.js should pass jscs', function () {
    ok(true, 'integration/components/default-toolbar/component-test.js should pass jscs.');
  });
});
define('nodde-client/tests/integration/components/default-toolbar/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/default-toolbar');
  QUnit.test('integration/components/default-toolbar/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/default-toolbar/component-test.js should pass jshint.');
  });
});
define('nodde-client/tests/integration/components/line-edit/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('line-edit', 'Integration | Component | line edit', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'line-edit', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'line-edit', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('nodde-client/tests/integration/components/line-edit/component-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - integration/components/line-edit');
  test('integration/components/line-edit/component-test.js should pass jscs', function () {
    ok(true, 'integration/components/line-edit/component-test.js should pass jscs.');
  });
});
define('nodde-client/tests/integration/components/line-edit/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/line-edit');
  QUnit.test('integration/components/line-edit/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/line-edit/component-test.js should pass jshint.');
  });
});
define('nodde-client/tests/integration/components/pool-in-list/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('pool-in-list', 'Integration | Component | pool in list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'pool-in-list', ['loc', [null, [1, 0], [1, 16]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:"
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.3.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'pool-in-list', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('nodde-client/tests/integration/components/pool-in-list/component-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - integration/components/pool-in-list');
  test('integration/components/pool-in-list/component-test.js should pass jscs', function () {
    ok(true, 'integration/components/pool-in-list/component-test.js should pass jscs.');
  });
});
define('nodde-client/tests/integration/components/pool-in-list/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/pool-in-list');
  QUnit.test('integration/components/pool-in-list/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/pool-in-list/component-test.js should pass jshint.');
  });
});
define('nodde-client/tests/login/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - login');
  test('login/controller.js should pass jscs', function () {
    ok(true, 'login/controller.js should pass jscs.');
  });
});
define('nodde-client/tests/login/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - login');
  QUnit.test('login/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'login/controller.js should pass jshint.');
  });
});
define('nodde-client/tests/login/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - login');
  test('login/route.js should pass jscs', function () {
    ok(true, 'login/route.js should pass jscs.');
  });
});
define('nodde-client/tests/login/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - login');
  QUnit.test('login/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'login/route.js should pass jshint.');
  });
});
define('nodde-client/tests/models/pool.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/pool.js should pass jscs', function () {
    ok(true, 'models/pool.js should pass jscs.');
  });
});
define('nodde-client/tests/models/pool.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/pool.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/pool.js should pass jshint.');
  });
});
define('nodde-client/tests/models/user.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/user.js should pass jscs', function () {
    ok(true, 'models/user.js should pass jscs.');
  });
});
define('nodde-client/tests/models/user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/user.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass jshint.');
  });
});
define('nodde-client/tests/new-pool/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - new-pool');
  test('new-pool/controller.js should pass jscs', function () {
    ok(true, 'new-pool/controller.js should pass jscs.');
  });
});
define('nodde-client/tests/new-pool/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - new-pool');
  QUnit.test('new-pool/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'new-pool/controller.js should pass jshint.');
  });
});
define('nodde-client/tests/new-pool/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - new-pool');
  test('new-pool/route.js should pass jscs', function () {
    ok(false, 'new-pool/route.js should pass jscs.\ndisallowSpacesInsideParentheses: Illegal space after opening round bracket at new-pool/route.js :\n    11 |    let userPromise = this.get(\'currentUser.user\');\n    12 |    console.log(\'user -> \', userPromise);\n    13 |    return userPromise.then( (user) => {\n------------------------------------^\n    14 |      return this.store.createRecord(\'pool\', {\n    15 |        title: \'Pick a title\',');
  });
});
define('nodde-client/tests/new-pool/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - new-pool');
  QUnit.test('new-pool/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'new-pool/route.js should pass jshint.');
  });
});
define('nodde-client/tests/resolver.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('resolver.js should pass jscs', function () {
    ok(true, 'resolver.js should pass jscs.');
  });
});
define('nodde-client/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('nodde-client/tests/results/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - results');
  test('results/route.js should pass jscs', function () {
    ok(true, 'results/route.js should pass jscs.');
  });
});
define('nodde-client/tests/results/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - results');
  QUnit.test('results/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'results/route.js should pass jshint.');
  });
});
define('nodde-client/tests/router.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('router.js should pass jscs', function () {
    ok(true, 'router.js should pass jscs.');
  });
});
define('nodde-client/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('nodde-client/tests/services/current-user.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - services');
  test('services/current-user.js should pass jscs', function () {
    ok(true, 'services/current-user.js should pass jscs.');
  });
});
define('nodde-client/tests/services/current-user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/current-user.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/current-user.js should pass jshint.');
  });
});
define('nodde-client/tests/sign-up/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - sign-up');
  test('sign-up/controller.js should pass jscs', function () {
    ok(true, 'sign-up/controller.js should pass jscs.');
  });
});
define('nodde-client/tests/sign-up/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - sign-up');
  QUnit.test('sign-up/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'sign-up/controller.js should pass jshint.');
  });
});
define('nodde-client/tests/sign-up/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - sign-up');
  test('sign-up/route.js should pass jscs', function () {
    ok(true, 'sign-up/route.js should pass jscs.');
  });
});
define('nodde-client/tests/sign-up/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - sign-up');
  QUnit.test('sign-up/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'sign-up/route.js should pass jshint.');
  });
});
define('nodde-client/tests/test-helper', ['exports', 'nodde-client/tests/helpers/resolver', 'ember-qunit'], function (exports, _noddeClientTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_noddeClientTestsHelpersResolver['default']);
});
define('nodde-client/tests/test-helper.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('test-helper.js should pass jscs', function () {
    ok(true, 'test-helper.js should pass jscs.');
  });
});
define('nodde-client/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/answer/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:answer', 'Unit | Controller | answer', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('nodde-client/tests/unit/answer/controller-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/answer');
  test('unit/answer/controller-test.js should pass jscs', function () {
    ok(true, 'unit/answer/controller-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/answer/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/answer');
  QUnit.test('unit/answer/controller-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/answer/controller-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/answer/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:answer', 'Unit | Route | answer', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('nodde-client/tests/unit/answer/route-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/answer');
  test('unit/answer/route-test.js should pass jscs', function () {
    ok(true, 'unit/answer/route-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/answer/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/answer');
  QUnit.test('unit/answer/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/answer/route-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/application/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('nodde-client/tests/unit/application/adapter-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/application');
  test('unit/application/adapter-test.js should pass jscs', function () {
    ok(true, 'unit/application/adapter-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/application/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/adapter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/adapter-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/login/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('nodde-client/tests/unit/login/controller-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/login');
  test('unit/login/controller-test.js should pass jscs', function () {
    ok(true, 'unit/login/controller-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/login/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/login');
  QUnit.test('unit/login/controller-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/login/controller-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/login/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('nodde-client/tests/unit/login/route-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/login');
  test('unit/login/route-test.js should pass jscs', function () {
    ok(true, 'unit/login/route-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/login/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/login');
  QUnit.test('unit/login/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/login/route-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/models/pool-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('pool', 'Unit | Model | pool', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('nodde-client/tests/unit/models/pool-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/models');
  test('unit/models/pool-test.js should pass jscs', function () {
    ok(true, 'unit/models/pool-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/models/pool-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/pool-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/pool-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('nodde-client/tests/unit/models/user-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/models');
  test('unit/models/user-test.js should pass jscs', function () {
    ok(true, 'unit/models/user-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/models/user-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/user-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/new-pool/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:new-pool', 'Unit | Controller | new pool', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('nodde-client/tests/unit/new-pool/controller-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/new-pool');
  test('unit/new-pool/controller-test.js should pass jscs', function () {
    ok(true, 'unit/new-pool/controller-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/new-pool/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/new-pool');
  QUnit.test('unit/new-pool/controller-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/new-pool/controller-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/new-pool/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:new-pool', 'Unit | Route | new pool', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('nodde-client/tests/unit/new-pool/route-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/new-pool');
  test('unit/new-pool/route-test.js should pass jscs', function () {
    ok(true, 'unit/new-pool/route-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/new-pool/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/new-pool');
  QUnit.test('unit/new-pool/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/new-pool/route-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/results/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:results', 'Unit | Route | results', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('nodde-client/tests/unit/results/route-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/results');
  test('unit/results/route-test.js should pass jscs', function () {
    ok(true, 'unit/results/route-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/results/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/results');
  QUnit.test('unit/results/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/results/route-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/services/current-user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:current-user', 'Unit | Service | current user', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('nodde-client/tests/unit/services/current-user-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/services');
  test('unit/services/current-user-test.js should pass jscs', function () {
    ok(true, 'unit/services/current-user-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/services/current-user-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services');
  QUnit.test('unit/services/current-user-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/current-user-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/sign-up/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:sign-up', 'Unit | Controller | sign up', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('nodde-client/tests/unit/sign-up/controller-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/sign-up');
  test('unit/sign-up/controller-test.js should pass jscs', function () {
    ok(true, 'unit/sign-up/controller-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/sign-up/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/sign-up');
  QUnit.test('unit/sign-up/controller-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/sign-up/controller-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/sign-up/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sign-up', 'Unit | Route | sign-up', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('nodde-client/tests/unit/sign-up/route-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/sign-up');
  test('unit/sign-up/route-test.js should pass jscs', function () {
    ok(true, 'unit/sign-up/route-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/sign-up/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/sign-up');
  QUnit.test('unit/sign-up/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/sign-up/route-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/welcome/controller-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:welcome', 'Unit | Controller | welcome', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('nodde-client/tests/unit/welcome/controller-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/welcome');
  test('unit/welcome/controller-test.js should pass jscs', function () {
    ok(true, 'unit/welcome/controller-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/welcome/controller-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/welcome');
  QUnit.test('unit/welcome/controller-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/welcome/controller-test.js should pass jshint.');
  });
});
define('nodde-client/tests/unit/welcome/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:welcome', 'Unit | Route | welcome', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('nodde-client/tests/unit/welcome/route-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/welcome');
  test('unit/welcome/route-test.js should pass jscs', function () {
    ok(true, 'unit/welcome/route-test.js should pass jscs.');
  });
});
define('nodde-client/tests/unit/welcome/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/welcome');
  QUnit.test('unit/welcome/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/welcome/route-test.js should pass jshint.');
  });
});
define('nodde-client/tests/welcome/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - welcome');
  test('welcome/controller.js should pass jscs', function () {
    ok(true, 'welcome/controller.js should pass jscs.');
  });
});
define('nodde-client/tests/welcome/controller.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - welcome');
  QUnit.test('welcome/controller.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'welcome/controller.js should pass jshint.');
  });
});
define('nodde-client/tests/welcome/pool-in-list/component.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - welcome/pool-in-list');
  test('welcome/pool-in-list/component.js should pass jscs', function () {
    ok(true, 'welcome/pool-in-list/component.js should pass jscs.');
  });
});
define('nodde-client/tests/welcome/pool-in-list/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - welcome/pool-in-list');
  QUnit.test('welcome/pool-in-list/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'welcome/pool-in-list/component.js should pass jshint.');
  });
});
define('nodde-client/tests/welcome/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - welcome');
  test('welcome/route.js should pass jscs', function () {
    ok(true, 'welcome/route.js should pass jscs.');
  });
});
define('nodde-client/tests/welcome/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - welcome');
  QUnit.test('welcome/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'welcome/route.js should pass jshint.\nwelcome/route.js: line 11, col 14, \'Promise\' is not defined.\n\n1 error');
  });
});
/* jshint ignore:start */

require('nodde-client/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map