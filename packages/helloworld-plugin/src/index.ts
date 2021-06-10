import { InstancePlugin } from 'plugin-sdk';

export default new InstancePlugin({
	id: 'hello-world',
	setup(api) {
	},
	run(api) {
		api.showMessage('Hello world!');
	}
});
