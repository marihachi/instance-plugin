import { ContextImplement, Engine } from 'plugin-engine';
import helloworldPlugin from 'helloworld-plugin';

const impl: ContextImplement = {
	generateSetupCtx(p) {
		return {};
	},
	generateRunCtx(p) {
		return {
			showMessage(text) {
				console.log(`[${p.id}] message:`, text);
			}
		};
	}
};

const engine = new Engine({ impl });
engine.use(helloworldPlugin);

console.log('[engine] started.');
engine.start()
.then(() => {
	console.log('[engine] all finished.');
})
.catch(e => {
	console.log('[engine error]', e);
});