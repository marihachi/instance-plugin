import { ApiImplement, Engine } from 'plugin-engine';
import helloworldPlugin from 'helloworld-plugin';

const impl: ApiImplement = {
	generateSetupApi(p) {
		return {};
	},
	generateRunApi(p) {
		return {
			showMessage(text) {
				console.log(`[${p.id}] message:`, text);
			}
		};
	}
};

async function entry() {
	const engine = new Engine({ impl });
	engine.use(helloworldPlugin);
	
	console.log('setup plugins');
	await engine.setup();

	console.log('run plugins');
	await engine.run();

	console.log('all finished');
}

entry()
.catch(e => {
	console.log('error', e);
});
