import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: glimmer-todo', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await this.render(hbs`<glimmer-todo />`);
        assert.ok(this.containerElement.querySelector('section.todoapp'));
    });
});
