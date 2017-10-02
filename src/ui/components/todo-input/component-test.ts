import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: todo-input', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await this.render(hbs`<todo-input />`);
        assert.ok(this.containerElement.querySelector('input'));
    });
});
