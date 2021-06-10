import { InstancePlugin } from 'plugin-sdk';

export default new InstancePlugin({
	id: 'hello-world',
	setup(ctx) {
	},
	run(ctx) {
		ctx.showMessage('Hello world!');
	}
});
