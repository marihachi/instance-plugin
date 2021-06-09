import { Engine } from '../tools';
import plugin from '../helloworld-plugin';

const engine = new Engine();
engine.use(plugin);

console.log('[engine] started.');
engine.start()
.then(() => {
	console.log('[engine] all finished.');
})
.catch(e => {
	console.log('[engine error]', e);
});
