import { InstancePlugin } from '../tools';

export default new InstancePlugin({
	id: 'hello-world',
	setup(ctx) {
		console.log('Setup!');
	},
	run(ctx) {
		console.log('Hello world!');
	}
});
